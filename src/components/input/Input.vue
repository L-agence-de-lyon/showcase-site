<template lang="">
  <div>
    <div class="input-container w-full">
      <div style="opacity: 1">
        <label
          :class="modelValue.length > 0 ? 'hasValue' : ''"
          style="font-weight: normal"
          >{{ label }}</label
        >
      </div>
      <input
        @input="$emit('onChange', $event)"
        :autocomplete="name"
        :id="name"
        :name="name"
        v-model="modelValue"
        class="input"
        type="text"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Input",
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
.input {
  width: 100%;
  box-shadow: unset;
  font-weight: normal;
  background: 0 0;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  color: black;
  font-size: 35px;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 100%;
  margin: 0;
  outline: 0;
  padding: 15px 0;
  position: relative;
  resize: none;
  transition: all 0.3s, height 0s;
  width: 100%;
  z-index: 1;
}

.input-container label {
  color: #cfcfcf;
  font-size: 32px;
  font-weight: 400;
  position: absolute;
}

.input-container label {
  bottom: 12px;
  transition: 0.3s;
}

.input-container label.hasValue{
    opacity: 0;
}

.input-container {
  position: relative;
}
</style>
