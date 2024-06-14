<script setup>
import { ref, inject } from "vue";

const props = defineProps({
  label: {
    type: String,
  },
  modelValue: {
    type: String,
  },
  type: {
    type: String,
  },
  id: {
    type: String,
  },
  error: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
const clearErrors = inject("clearErrors");

const inputValue = ref(props.modelValue);
const isFocused = ref(false);

const updateValue = (event) => {
  clearErrors();
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="input-field">
    <label :for="id" class="input-field__label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :aria-label="label"
      :class="[
        'input-field__input',
        { 'input-field__input--focused': isFocused },
        { 'input-field__error': error },
      ]"
      v-model="inputValue"
      @input="updateValue"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <span v-if="error" class="input-field__error--text">{{ error }}</span>
  </div>
</template>

<style scoped lang="scss">
.input-field {
  width: 100%;
  font-family: $font-family;
  display: flex;
  flex-direction: column;
  padding-bottom: $size-xs;

  &__label {
    padding-bottom: 0.375rem;
    font-size: $size-s;
    font-weight: 300;
  }

  &__input {
    border-radius: 0.375rem;
    height: $size-md;
    border: 1px solid;
    font-size: $size-s;
    padding-left: $size-xs;

    &--focused,
    :focus {
      border: 1px solid $primary-color;
      outline: 3px solid rgba($primary-color, 0.3);
    }
  }

  &__error {
    border: 1px solid $error-color;
    outline: 3px solid rgba($error-color, 0.5);

    &--text {
      color: $error-color;
      font-size: $size-s;
      padding-top: 0.375rem;
    }
  }
}
</style>
