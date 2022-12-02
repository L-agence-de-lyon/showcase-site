<template lang="">
  <div class="textarea-container">
    <div class="relative">
      <div style="opacity: 1">
        <label
          :class="modelValue.length > 0 ? 'hasValue' : ''"
          for="message"
          style="font-weight: normal"
          >{{ label }}</label
        >
      </div>
      <textarea
        @input="$emit('onChange', $event)"
        rows="1"
        autocomplete="message"
        id="message"
        name="message"
        class="input custom-scroll-bar message-textarea"
        v-model="modelValue"
        style="
          width: 100%;
          box-shadow: unset;
          height: 99px;
          min-height: 100px;
          max-height: 300px;
        "
      ></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: "Textarea",
  data() {
    return {
      modelValue: "",
    };
  },
  props: {
    label: String,
    onChange: Function,
    name: String,
  },
};
</script>
<style lang="css">
.textarea-container label {
  color: #cfcfcf;
  font-size: 32px;
  font-weight: 400;
  position: absolute;
}
.textarea-container label {
  bottom: 47px;
  transition: 0.3s;
}

.textarea-container label.hasValue{
    opacity: 0;
}
</style>
