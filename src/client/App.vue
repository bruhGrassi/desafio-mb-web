<script setup>
import { reactive } from "vue";
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Review from "@/views/Review.vue";

const entity = reactive({});
const errors = reactive({});
</script>

<template>
  <div class="app__wrapper">
    <form>
      <Header title="Seja Bem vindo(a)" :actualStep="1" :numOfSteps="4" />

      <Review :entity :errors />

      <div class="app__actions">
        <Button type="button" text="Voltar" :isOutline="true" />
        <Button type="button" text="Continuar" :isOutline="false" />
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.app {
  &__wrapper {
    max-width: 31.25rem;
    margin: 0 auto;
    padding: $size-md $size-normal;
  }

  &__actions {
    width: 100%;
    @include flex-center-start;
    gap: $size-normal;
    padding-top: $size-xs;
  }
}
</style>
