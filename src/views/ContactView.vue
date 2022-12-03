<template lang="">
  <div>
    <div class="contact-section md:px-20">
      <div class="mt-20 flex justify-between items-center">
        <div>
          <span class="text-sm block mb-4">Votre demande</span>
          <h4 class="text-6xl" style="color: #151515">
            Parlez-nous de <br />
            votre nouveau projet<br />
            ambitieux ou posez- <br />
            nous une question.
          </h4>
        </div>

        <div class="form-stepper-num">
          <div class="flex items-center">
            <h4 class="stepper-num" :style="'--value:' + form"></h4>
            <h4 class="">/4</h4>
          </div>
          <div
            :class="form > 0 ? 'opacity-1' : 'opacity-0 !cursor-default'"
            class="
              flex
              space-x-5
              justify-end
              ml-auto
              cursor-pointer
              relative
              z-10
              w-fit
              mt-7
              items-center
            "
            style="transition: 0.5s"
            @click="backForm"
          >
            <ArrowUturnLeftIcon class="h-6 w-6" />
            <span class="text-xs">Prev</span>
          </div>
        </div>
      </div>
      <div class="form mt-28">
        <div
          :class="form === 0 ? 'actif' : ''"
          class="option flex flex-col space-y-4"
        >
          <label
            @click="setSelected(1)"
            class="option-1 flex items-center space-x-3 cursor-pointer"
            :class="selected === 1 ? 'option-selected' : ''"
          >
            <div
              :class="selectedError === true ? 'error' : ''"
              class="checkbox"
            ></div>
            <span
              :class="selectedError === true ? 'error' : ''"
              class="option-text"
              >Question ?</span
            >
          </label>
          <label
            @click="setSelected(2)"
            class="option-2 flex items-center space-x-3 cursor-pointer"
            :class="selected === 2 ? 'option-selected' : ''"
          >
            <div
              :class="selectedError === true ? 'error' : ''"
              class="checkbox"
            ></div>
            <span
              :class="selectedError === true ? 'error' : ''"
              class="option-text"
              >Nouveau Projet</span
            >
          </label>
        </div>
        <div
          :class="form === 1 ? 'actif' : 'z-0'"
          class="option flex flex-col space-y-8"
        >
          <div style="width: 67%">
            <InputVue
              @onBlur="onBlur"
              @onChange="onChange"
              :name="'name'"
              :label="'Nom Prénom *'"
              :error="errors.name"
            />
          </div>
          <div style="width: 67%">
            <InputVue
              @onBlur="onBlur"
              @onChange="onChange"
              :name="'society'"
              :label="'Nom de l\'entreprise'"
            />
          </div>
        </div>
        <div
          :class="form === 2 ? 'actif' : 'z-0'"
          class="option flex flex-col space-y-8"
        >
          <div style="width: 67%">
            <TextAreaVue
              @onChange="onChange"
              :name="'message'"
              :label="'Message *'"
              :error="errors.message"
            />
          </div>
        </div>
        <div
          :class="form === 3 ? 'actif' : 'z-0'"
          class="option flex flex-col space-y-8"
        >
          <div style="width: 67%">
            <InputVue
              @onBlur="onBlur"
              :error="errors.email"
              @onChange="onChange"
              :name="'email'"
              :label="'Email *'"
            />
          </div>
        </div>
      </div>
      <div class="button-form-next mt-10 pb-3">
        <button
          :class="sending ? 'sending' : ''"
          @click="changeForm"
          :disabled="sent || sending ? true : false"
        >
          <svg
            style="left: 46%"
            :class="sending && !sent ? 'opacity-1' : 'opacity-0'"
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white absolute z-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span
            class="relative z-10"
            :class="form < 3 && !sending && !sent ? 'actif' : ''"
            >{{ form === 3 ? "Envoyer" : "Suivant" }}</span
          >
          <span
            class="relative z-10"
            :class="form === 3 && !sending && !sent ? 'actif' : ''"
            >Envoyer</span
          >
          <span
            class="relative z-10 flex space-x-2 items-center opacity-50"
            :class="form === 3 && !sending && sent ? 'actif' : ''"
            ><p>Envoyé</p>
            <CheckIcon class="h-4 w-4" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import InputVue from "../components/input/Input.vue";
import TextAreaVue from "../components/textarea/TextArea.vue";
import { ArrowUturnLeftIcon, CheckIcon } from "@heroicons/vue/24/solid";
import axios from "axios";

export default {
  name: "Contact",
  components: {
    InputVue,
    TextAreaVue,
    ArrowUturnLeftIcon,
    CheckIcon,
  },
  data() {
    return {
      selected: 0,
      selectedError: false,
      form: 0,
      formsValue: {
        name: "",
        society: "",
        message: "",
        email: "",
        type: "",
      },
      errors: {
        name: false,
        message: false,
        email: false,
        type: false,
      },
      validRegex: {
        email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
      sending: false,
      sent: false,
    };
  },
  methods: {
    setSelected(selected) {
      this.selected = selected;
      this.selectedError = false;
      switch (selected) {
        case 0:
          this.formsValue.type = "Question Général";
          break;
        case 1:
          this.formsValue.type = "Nouveau Projet";
          break;
        default:
          this.formsValue.type = "Question Général";
      }
    },
    checkErrors() {
      let isValid = false;
      switch (this.form) {
        case 0:
          if (this.selected == 0) {
            isValid = false;
            this.selectedError = true;
          } else {
            isValid = true;
          }
          break;
        case 1:
          if (!this.formsValue.name) {
            this.errors.name = true;
            isValid = false;
          } else {
            this.errors.name = false;
            isValid = true;
          }
          break;
        case 2:
          if (!this.formsValue.message || this.formsValue.message.length <= 1) {
            this.errors.message = true;
            isValid = false;
          } else {
            this.errors.message = false;
            isValid = true;
          }
          break;
        case 3:
          if (this.formsValue.email && !this.errors.email) {
            this.errors.email = false;
            this.submit();
          } else {
            this.errors.email = true;
          }
          break;

        default:
          isValid = false;
      }

      return { isValid };
    },
    changeForm() {
      const { isValid } = this.checkErrors();
      if (isValid && this.form < 3) return (this.form += 1);
    },
    onChange(e) {
      if (e.target.value) {
        if (
          this.validRegex[e.target.name] === false ||
          this.validRegex[e.target.name] === undefined
        )
          this.errors[e.target.name] = false;
        else {
          if (e.target.value.match(this.validRegex[e.target.name]))
            this.errors[e.target.name] = false;
          else this.errors[e.target.name] = true;
        }
      } else this.errors[e.target.name] = true;
      this.formsValue[e.target.name] = e.target.value;
    },
    onBlur() {
      this.checkErrors();
    },
    backForm() {
      this.sent = false;
      if (!this.form < 1) this.form -= 1;
    },
    async submit() {
      if (this.sending || this.sent) return;
      this.sending = true;
      const { data } = await axios.post(`${process.env.VUE_APP_SERVER_API_URL}/api/mail`, {
        ...this.formsValue,
      });
      this.sending = false;
      if (data) {
        this.sent = true;
      }
    },
  },
};
</script>
<style lang="css">
.contact-section {
  padding-top: 78px;
  margin: 0 auto;
  max-width: 1440px;
  position: relative;
}

.checkbox {
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid;
  border-radius: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.option-text {
  font-size: 1.8vw;
  line-height: 3vw;
  font-weight: 500;
}

.option .option-1,
.option .option-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 67%;
  margin-bottom: 1vw;
  padding: 1.5vw 1vw 2.5vw 2vw;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding-left: 0px;
}

.option::after,
.form:after {
  content: "";
  clear: both;
}

.option-1:hover .checkbox:after,
.option-2:hover .checkbox:after {
  width: 30px;
  height: 30px;
  opacity: 1;
}

.checkbox:after {
  background: black;
  width: 0px;
  height: 0px;
  border-radius: 100%;
  position: absolute;
  content: "";
  opacity: 0;
  transition: 0.4s;
}

.checkbox.error:after {
  background: #e43052;
}

.form {
  position: relative;
}

form::after {
  content: "";
  clear: both;
}

.form .option {
  opacity: 0;
  z-index: 0;
  display: inline-block;
  vertical-align: top;
  width: 0;
  white-space: normal;
  text-align: left;
  left: 0;
  user-select: none;
  touch-action: none;
  position: absolute;
  position: absolute;
  height: 0;
  display: -webkit-box;
}

.form .actif {
  opacity: 1;
  z-index: 22;
  transition: opacity 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.3s;
  z-index: 10;
  user-select: auto;
  touch-action: auto;
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
}

.option .option-selected .checkbox:after {
  opacity: 1;
  width: 20px;
  height: 20px;
}

.button-form-next {
  position: absolute;
  right: 20px;
}

.button-form-next button {
  z-index: 9;
  display: flex;
  width: 10.6rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  font-size: 17px;
  color: black;
  line-height: 1vw;
  position: relative;
  transition: 0.3s;
  font-weight: 600;
  overflow: hidden;
}

.button-form-next button::after {
  content: "";
  width: 100%;
  height: 100%;
  background: #151515;
  position: absolute;
  top: -50%;
  left: 0;
  z-index: 1;
  transition: 0.3s;
  color: white;
  transform: translate(0px, -75%);
}

.button-form-next button:hover {
  color: white !important;
}

.button-form-next button:hover::after {
  transform: translate(0px, 0%);
  top: 0;
}

.form-stepper-num h4 {
  position: relative;
  font-size: 12vw;
  line-height: 12vw;
  text-align: right;
  color: #151515;
  font-weight: 100;
}

.checkbox.error {
  box-shadow: 0 0 0 0.2rem #e4305247 !important;
  border: 1px solid #e43052 !important;
  background-color: #e4305229 !important;
}

.option-text {
  transition: 0.3s;
  color: #151515;
}

.option-text.error {
  color: #e43052;
}

.stepper-num {
  display: flex;
  height: 1em;
  line-height: 1em;
  overflow-y: hidden;
}

.stepper-num::before {
  content: "1\a 2\a 3\a 4\a";
  position: relative;
  text-align: center;
  top: calc(var(--value) * -1em);
  transition: all 0.8s cubic-bezier(1, 0, 0, 1);
  white-space: pre;
  font-weight: lighter;
}

.button-form-next button span {
  transform: translateY(400%);
  transition: 0.3s;
  position: absolute;
  z-index: 9;
}

.button-form-next button span.actif {
  transform: translateY(0%);
}

.button-form-next button.sending::after {
  background: #151515;
  transform: translate(0px, 0%);
  top: 0;
}

.button-form-next button:disabled {
  cursor: not-allowed !important;
}
</style>
