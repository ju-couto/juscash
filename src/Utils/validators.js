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
  return phone?.toString().length >= 11;
}

export {
  validateEmail,
  validatePassword,
  validateName,
  validatePhone,
  validateConfirmPassword,
};
