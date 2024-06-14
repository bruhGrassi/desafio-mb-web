<script setup>
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import InputField from "@/components/InputField.vue";
import InputGroup from "@/components/InputGroup.vue";
import Message from "@/components/Message.vue";
</script>

<template>
  <Header title="Seja bem vindo(a)" :actualStep="1" :numOfSteps="4" />
  <Button text="Continuar" :isOutline="false" />
  <InputField id="name" label="Nome" type="text" />
  <InputField id="name" label="Nome" type="text" error="Preencha o Nome" />
  <InputGroup error="Escolha um dos itens" />
  <Message text="Registrado com sucesso!" />
</template>
