<script setup>
import InputField from "@/components/InputField.vue";

const props = defineProps({
  entity: Object,
  errors: Object,
});
</script>

<template>
  <InputField
    type="text"
    id="name"
    :label="entity.type === 'PF' ? 'Nome' : 'Razao social'"
    v-model="entity.name"
    :error="errors.name"
  />
  <InputField
    type="text"
    id="document"
    :label="entity.type === 'PF' ? 'CPF' : 'CNPJ'"
    v-model="entity.document"
    :error="errors.document"
  />
  <InputField
    type="date"
    id="birth_date"
    :label="entity.type === 'PF' ? 'Data de nascimento' : 'Data de abertura'"
    v-model="entity.birth_date"
    :error="errors.birth_date"
  />
  <InputField
    type="text"
    id="phone"
    label="Telefone"
    v-model="entity.phone"
    :error="errors.phone"
  />
</template>
