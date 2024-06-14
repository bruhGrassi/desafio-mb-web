const errorMessages = {
  required: "Campo obrigatório",
  invalidEmail: "Email inválido",
  invalidCNPJ: "CNPJ inválido",
  invalidCPF: "CPF inválido",
  invalidPassword: "A senha deve ter no mínimo 6 caracteres",
  invalidDate: "Data inválida",
  invalidPhone: "Telefone inválido",
};

function isRequired(value) {
  if (!value) return errorMessages.required;
}

function validateEmail(value) {
  if (!value) return errorMessages.required;

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;

  if (!re.test(String(value).toLowerCase())) {
    return "Email inválido";
  }
}

function validateCPF(value) {
  let cpf = value.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  return [9, 10].every(
    (j) =>
      (([...cpf].slice(0, j).reduce((s, n, i) => s + n * (j + 1 - i), 0) * 10) %
        11) %
        10 ==
      cpf[j]
  );
}

function validateCNPJ(value) {
  let cnpj = value.replace(/\D/g, "");
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

  const calcCheckDigit = (len) => {
    const weights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum = cnpj
      .slice(0, len)
      .split("")
      .reduce(
        (acc, digit, i) => acc + digit * weights[i + (weights.length - len)],
        0
      );
    return sum % 11 < 2 ? 0 : 11 - (sum % 11);
  };

  return [12, 13].every((len) => calcCheckDigit(len) == cnpj[len]);
}

function validateDocument(value, type) {
  if (!value) return errorMessages.required;

  if (type === "PJ" && !validateCNPJ(value)) {
    return errorMessages.invalidCNPJ;
  }

  if (type === "PF" && !validateCPF(value)) {
    return errorMessages.invalidCPF;
  }
}

function validatePassword(value) {
  if (!value) return errorMessages.required;
  if (value.length < 6) {
    return errorMessages.invalidPassword;
  }
}

function validateDate(value) {
  if (!value) return errorMessages.required;

  const date = new Date(value);
  const currentDate = new Date();

  if (isNaN(date.getTime()) || date > currentDate) {
    return errorMessages.invalidDate;
  }
}

function validatePhone(value) {
  if (!value) return errorMessages.required;

  const cleanedValue = value.replace(/\D/g, "");

  if (cleanedValue.length < 10 || cleanedValue.length > 11) {
    return errorMessages.invalidPhone;
  }
}

export const validationRules = {
  email: (value) => validateEmail(value),
  type: (value) => isRequired(value),
  name: (value) => isRequired(value),
  document: (value, entity) => validateDocument(value, entity.type),
  birth_date: (value) => validateDate(value),
  phone: (value) => validatePhone(value),
  password: (value) => validatePassword(value),
};

/**
 * Method that validates an entity based in a set of requiredFields
 *
 * @param {Object} entity - the entity to be validate
 * @param {Array<String>} requiredFields - all the fields to validate
 * @returns {Object} errors - an object with the errors to each field
 */
export function validateForm(entity, requiredFields) {
  const errors = {};

  requiredFields.forEach((field) => {
    const fieldValue = entity[field];
    const fieldError = validationRules[field](fieldValue, entity);

    if (fieldError) {
      errors[field] = fieldError;
    }
  });

  return errors;
}
