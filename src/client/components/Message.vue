<script setup>
import Button from "@/components/Button.vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["clicked"]);

const goBack = () => {
  emits("clicked");
};
</script>

<template>
  <div class="message">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      style="fill: #000"
      viewBox="0 0 256 256"
    >
      <path
        fill="#ff9020"
        stroke-miterlimit="10"
        d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm9.988 10.988a1 1 0 0 0-.816.451L23.97 30.477 16.68 23.71a1 1 0 1 0-1.36 1.467l8.996 8.347 11.512-16.964a1 1 0 0 0-.84-1.573z"
        font-family="none"
        font-size="none"
        font-weight="none"
        style="mix-blend-mode: normal"
        text-anchor="none"
        transform="scale(5.12)"
      />
    </svg>
    <p class="message__text">{{ text }}</p>
    <Button type="button" text="Ir para página inicial" @click="goBack" />
  </div>
</template>

<style scoped lang="scss">
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $size-normal;
  padding: $size-lg $size-normal;
  text-align: center;
  max-width: 23.75rem;

  &__text {
    font-size: 1.2rem;
    color: $dark-primary;
    padding-bottom: $size-normal;
  }
}
</style>
