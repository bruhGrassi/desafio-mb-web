<script setup>
import InputField from "@/components/InputField.vue";

const props = defineProps({
  entity: Object,
  errors: Object,
});
</script>

<template>
  <InputField
    type="email"
    id="id-email"
    label="Endereço de email"
    v-model="entity.email"
    :error="errors.email"
  />
  <InputField
    type="text"
    id="name"
    label="Nome"
    v-model="entity.name"
    :error="errors.name"
  />
  <InputField
    type="text"
    id="document"
    label="CPF"
    v-model="entity.document"
    :error="errors.document"
  />
  <InputField
    type="date"
    id="birthday"
    label="Data de nascimento"
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
  <InputField
    type="password"
    id="id-password"
    label="Senha"
    v-model="entity.password"
    :error="errors.password"
  />
</template>
