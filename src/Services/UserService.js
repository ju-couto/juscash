// Função para gerar um token aleatório
const generateAuthToken = () => {
  const tokenLength = 64;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  const currentDate = new Date();
  const timestamp = currentDate.getTime().toString();

  return timestamp + token;
};

// Função para gerar o hash da senha
const generateHashPassword = async (email, password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(email + password);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hash;
};

// Função para verificar a autenticação do usuário
const isUserAuthenticated = () => {
  const users = JSON.parse(localStorage.getItem('users'));

  if (users) {
    for (const email in users) {
      if (users[email].authToken) {
        return true;
      }
    }
  }

  return false;
};

// Função para fazer o login
const loginUser = async (data) => {
  const hashToken = await generateHashPassword(data.email, data.password);
  const authToken = generateAuthToken();
  
  const users = JSON.parse(localStorage.getItem('users'));

  if (users) {
    for (const email in users) {
      if (users[email].hashToken === hashToken) {
        users[email].authToken = authToken;
        localStorage.setItem('users', JSON.stringify(users));
        return true;
      }
    }
  }

  return false;
};
// Função para fazer o registro de um usuário
const registerUser = async (data) => {
  const users = JSON.parse(localStorage.getItem('users')) || {};

  // Verifique se o email já existe na lista de usuários
  if (users[data.email]) {
    // Email já existe, retorne falso ou lide com o erro de alguma forma
    return false;
  }

  const hashToken = await generateHashPassword(data.email, data.password);
  const authToken = generateAuthToken();

  const user = {
    name: data.name,
    email: data.email,
    hashToken: hashToken,
    authToken: authToken,
  };

  users[data.email] = user;
  localStorage.setItem('users', JSON.stringify(users));
  return true;
};

// Função para fazer o logout
const logoutUser = () => {
  const users = JSON.parse(localStorage.getItem('users'));

  if (users) {
    for (const email in users) {
      if (users[email].authToken) {
         delete users[email].authToken 
        localStorage.setItem('users', JSON.stringify(users));
        return true;
      }
    }
  }

  return false;
};

export { loginUser, registerUser, isUserAuthenticated, logoutUser };
