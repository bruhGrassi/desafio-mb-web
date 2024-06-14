<script setup>
import InputField from "@/components/InputField.vue";

const props = defineProps({
  entity: Object,
  errors: Object,
});
</script>

<template>
  <InputField
    type="password"
    id="password"
    label="Sua senha"
    v-model="entity.password"
    :error="errors.password"
  />
</template>
