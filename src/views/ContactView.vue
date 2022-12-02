<template lang="">
  <div>
    <div class="contact-section md:px-20">
      <div class="mt-20 flex justify-between items-center">
        <h4 class="text-5xl">
          Parlez-nous de <br />
          votre nouveau projet<br />
          ambitieux ou posez- <br />
          nous une question.
        </h4>
        <div class="form-stepper-num">
          <h4 class="">{{ form + 1 }}/4</h4>
          <div
            :class="form > 0 ? 'opacity-1' : 'opacity-0 cursor-default'"
            class="flex space-x-3 justify-end ml-auto cursor-pointer relative z-10 w-fit"
            style="transition: 0.5s"
            @click="backForm"
          >
            <ArrowUturnLeftIcon class="h-6 w-6" />
            <span>Prev</span>
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
            <div class="checkbox"></div>
            <span class="option-text">Question Général</span>
          </label>
          <label
            @click="setSelected(2)"
            class="option-2 flex items-center space-x-3 cursor-pointer"
            :class="selected === 2 ? 'option-selected' : ''"
          >
            <div class="checkbox"></div>
            <span class="option-text">Nouveau Projet</span>
          </label>
        </div>
        <div
          :class="form === 1 ? 'actif' : 'z-0'"
          class="option flex flex-col space-y-8"
        >
          <div style="width: 67%">
            <InputVue
              @onChange="onChange"
              :name="'name'"
              :label="'Nom Prénom *'"
            />
          </div>
          <div style="width: 67%">
            <InputVue
              @onChange="onChange"
              :name="'society'"
              :label="'Nom de l\'entreprise *'"
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
            />
          </div>
        </div>
        <div
          :class="form === 3 ? 'actif' : 'z-0'"
          class="option flex flex-col space-y-8"
        >
          <div style="width: 67%">
            <InputVue @onChange="onChange" :name="'email'" :label="'Email *'" />
          </div>
        </div>
      </div>
      <div class="button-form-next mt-10 pb-3">
        <button @click="changeForm">
          <span class="relative z-10"> {{ form === 3 ? "Envoyer" : "Suivant" }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import InputVue from "../components/input/Input.vue";
import TextAreaVue from "../components/textarea/TextArea.vue";
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/solid";

export default {
  name: "Contact",
  components: {
    InputVue,
    TextAreaVue,
    ArrowUturnLeftIcon,
  },
  data() {
    return {
      selected: 0,
      form: 0,
      formsValue: {
        name: "",
        society: "",
        message: "",
        email: "",
        type: "",
      },
    };
  },
  methods: {
    setSelected(selected) {
      this.selected = selected;
      switch (selected) {
        case 0:
          this.type = "Question Général";
          break;
        case 1:
          this.type = "Nouveau Projet";
          break;
        default:
          this.type = "Question Général";
      }
    },
    changeForm() {
      if (this.form < 3) return (this.form += 1);
    },
    onChange(e) {
      this.formsValue[e.target.name] = e.target.value;
    },
    backForm() {
      if (!this.form < 1) this.form -= 1;
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
}

.option-text {
  font-size: 2.4vw;
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 10.6rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
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
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateY(110%);
  transition: 0.3s;
  color: white;
}
.button-form-next button:hover {
  color: white !important;
}
.button-form-next button:hover::after {
  transform: translateY(0%);
}

.form-stepper-num h4 {
  position: relative;
  font-size: 14vw;
  line-height: 14vw;
  font-weight: 300;
  text-align: right;
}
</style>
