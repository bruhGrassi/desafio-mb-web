<script setup>
import InputRadio from "@/components/InputRadio.vue";

const radioValue = defineModel();
const props = defineProps({
  error: {
    type: String,
  },
});
</script>

<template>
  <div class="input-group__wrapper">
    <div class="input-group__fields">
      <InputRadio
        label="Pessoa Fisica"
        value="PF"
        name="entity"
        v-model="radioValue"
      />
      <InputRadio
        label="Pessoa Juridica"
        value="PJ"
        name="entity"
        v-model="radioValue"
      />
    </div>
    <span v-if="error" class="input-group--error">{{ error }}</span>
  </div>
</template>

<style lang="scss">
.input-group {
  &__wrapper {
    padding: $size-s 0;
  }

  &__fields {
    @include flex-center-start;
    width: 100%;
    gap: $size-normal;
  }

  &--error {
    display: block;
    color: $error-color;
    font-size: $size-s;
    padding-top: 0.375rem;
  }
}
</style>
