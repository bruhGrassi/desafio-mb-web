<script setup>
import { ref, reactive, computed, provide } from "vue";
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Message from "@/components/Message.vue";
import Welcome from "@/views/Welcome.vue";
import EntityInfo from "@/views/EntityInfo.vue";
import Password from "@/views/Password.vue";
import Review from "@/views/Review.vue";
import { validateForm } from "@/helpers/validations.js";

const currentStep = ref(0);
const entity = reactive({});
const errors = reactive({});
const isSubmitting = ref(false);
const isSuccess = ref(false);

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

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    delete errors[key];
  });
};

provide("clearErrors", clearErrors);

const validateStep = () => {
  clearErrors();
  if (currentStep.value <= 3) {
    Object.assign(
      errors,
      validateForm(entity, steps[currentStep.value].requiredFields)
    );
  }

  return Object.keys(errors).length === 0;
};

const nextStep = () => {
  if (!validateStep()) return;

  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
};

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const submit = async () => {
  isSubmitting.value = true;

  const response = await fetch("/registration", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entity),
  });

  const data = await response.json();

  if (data.errors) {
    Object.assign(errors, data.errors);
    return;
  }

  isSubmitting.value = false;
  isSuccess.value = true;
};

const goBack = () => {
  isSuccess.value = false;
  currentStep.value = 0;
  Object.assign(entity, {});
  Object.assign(errors, {});
};
</script>

<template>
  <div class="app__wrapper">
    <div v-if="isSuccess">
      <Message
        text="Seu cadastro foi realizado com sucesso!"
        @clicked="goBack"
      />
    </div>

    <form v-else>
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
