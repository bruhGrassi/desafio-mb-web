<script setup>
import InputField from "@/components/InputField.vue";
import InputGroup from "@/components/InputGroup.vue";

const props = defineProps({
  entity: Object,
  errors: Object,
});
</script>

<template>
  <InputField
    type="email"
    id="email"
    label="Endereço de e-mail"
    v-model="entity.email"
    :error="errors.email"
  />
  <InputGroup v-model="entity.type" :error="errors.type" />
</template>
