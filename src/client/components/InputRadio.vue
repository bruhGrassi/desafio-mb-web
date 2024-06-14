<script setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: [String, Number, Boolean],
    required: true,
  },
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
});

const emits = defineEmits(["selectedValue"]);

const checkedValue = ref(props.value);

const inputValue = defineModel();

const updateValue = () => {
  emits("selectedValue", inputValue);
};
</script>

<template>
  <input
    :id="label"
    type="radio"
    :name="name"
    :value="value"
    @change="updateValue(value)"
    class="input-radio__control"
    v-model="inputValue"
  />
  <label class="input-radio__label" :for="label">{{ label }}</label>
</template>

<style scoped lang="scss">
.input-radio {
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &__label {
    font-family: $font-family;
    font-size: $size-s;
    position: relative;
    padding-left: 1.625rem;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: $size-normal;
      height: $size-normal;
      border: 1px solid $dark-secondary;
      border-radius: 50%;
      background-color: transparent;
    }

    &::after {
      content: "";
      position: absolute;
      left: 3px;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid transparent;
      transition: background-color 0.3s, border-color 0.3s;
    }

    &:hover::before {
      border-color: $secondary-color;
    }
  }

  &__control {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked + .input-radio__label::after {
      background-color: $primary-color;
      border-color: $primary-color;
    }

    &:checked + .input-radio__label::before {
      border-color: $secondary-color;
    }
  }
}
</style>
