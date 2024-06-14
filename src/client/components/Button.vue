<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: "",
  },
  isOutline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["action"]);

const handleClick = () => {
  emit("action");
};
</script>

<template>
  <button
    :class="[
      'button',
      { 'button--outline': isOutline, 'button--disabled': disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
.button {
  width: 100%;
  height: $size-md;
  border: 1px solid $secondary-color;
  cursor: pointer;
  border-radius: 0.375rem;
  padding: 0 1rem;
  background: $secondary-color;
  color: #fff;
  font-family: $font-family;
  font-size: $size-s;
  font-weight: 300;

  &--outline {
    background: transparent;
    color: $secondary-color;
  }

  &--disabled {
    background: black;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
