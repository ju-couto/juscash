const validateEmail = (email) => {
  return email?.toString().includes("@") && email?.toString().includes(".");
};

const validatePassword = (password) => {
  const specialCharsRegex = /[@#$%^&+=]/;
  const numberRegex = /[0-9]/;
  const alphanumericCharacterRegex = /[a-zA-Z]/;

  return (
    password?.toString().length >= 8 &&
    specialCharsRegex.test(password) &&
    numberRegex.test(password) &&
    alphanumericCharacterRegex.test(password)
  );
};

const validateName = (name) => {
  return name?.toString().length >= 3;
};

const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

const validatePhone = (phone) => {
  return phone?.toString().length >= 15;
};

const formatPhone = (value) => {
  const cleanedValue = value.replace(/\D/g, "");

  let unmaskedValue = cleanedValue.replace(/-/g, "");

  let formattedValue = "";
  if (unmaskedValue.length > 0) {
    formattedValue = `(${unmaskedValue.slice(0, 3)}`;
  }
  if (unmaskedValue.length > 3) {
    formattedValue += `) ${unmaskedValue.slice(3, 7)}`;
  }
  if (unmaskedValue.length > 7) {
    formattedValue += `-${unmaskedValue.slice(7, 11)}`;
  }

  return formattedValue;
};

export {
  validateEmail,
  validatePassword,
  validateName,
  validatePhone,
  validateConfirmPassword,
  formatPhone
};
