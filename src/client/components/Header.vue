<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  actualStep: {
    type: Number,
  },
  numOfSteps: {
    type: Number,
  },
});
</script>

<template>
  <div class="header">
    <p class="header__steps">
      Etapa <span class="header__steps--actual">{{ actualStep }}</span> de
      {{ numOfSteps }}
    </p>
    <h2 class="header__title">{{ title }}</h2>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  font-family: $font-family;
  padding-bottom: $size-md;

  &__steps {
    padding-bottom: $size-xs;
    font-size: $size-s;

    &--actual {
      color: $secondary-color;
    }
  }

  &__title {
    font-size: $size-md;
  }
}
</style>
