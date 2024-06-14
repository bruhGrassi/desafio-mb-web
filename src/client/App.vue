<script setup>
import { ref, reactive, computed } from "vue";
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Welcome from "@/views/Welcome.vue";
import EntityInfo from "@/views/EntityInfo.vue";
import Password from "@/views/Password.vue";
import Review from "@/views/Review.vue";

const currentStep = ref(0);
const entity = reactive({});
const errors = reactive({});

const entityTitle = computed(
  () => `Pessoa ${entity.type === "PF" ? "Física" : "Jurídica"}`
);

const steps = [
  {
    title: "Seja bem vindo(a)",
    component: Welcome,
    requiredFields: ["email", "type"],
  },
  {
    component: EntityInfo,
    requiredFields: ["name", "document", "birth_date", "phone"],
  },
  {
    title: "Senha de acesso",
    component: Password,
    requiredFields: ["password"],
  },
  {
    title: "Revise suas informações",
    component: Review,
    requiredFields: [
      "email",
      "name",
      "document",
      "birth_date",
      "phone",
      "password",
    ],
  },
];

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
};

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const submit = () => {
  console.log("submit");
};
</script>

<template>
  <div class="app__wrapper">
    <form>
      <Header
        :title="steps[currentStep].title || entityTitle"
        :actualStep="currentStep + 1"
        :numOfSteps="steps.length"
      />
      <component :is="steps[currentStep].component" :entity :errors />

      <div class="app__actions">
        <Button
          type="button"
          text="Voltar"
          :isOutline="true"
          @click="previousStep"
          v-if="currentStep > 0"
        />
        <Button
          type="button"
          v-if="currentStep === steps.length - 1"
          text="Cadastrar"
          :isOutline="false"
          @click="submit"
        />
        <Button
          type="button"
          v-else
          text="Continuar"
          :isOutline="false"
          @click="nextStep"
        />
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
