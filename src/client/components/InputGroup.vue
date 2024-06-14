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
  <div class="input-group">
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
</template>

<style lang="scss">
.input-group {
  width: 100%;
  @include flex-center-start;
  gap: $size-normal;
  padding: $size-s 0;

  &--error {
    display: block;
    color: $error-color;
    font-size: $size-s;
    padding-left: $size-xs;
    padding-top: 0.375rem;
  }
}
</style>
