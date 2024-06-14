<script setup>
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header title="Seja bem vindo(a)" :actualStep="1" :numOfSteps="4" />
  <Button text="Continuar" :isOutline="false" />
</template>
