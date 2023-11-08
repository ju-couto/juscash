import React, { useState, useEffect } from "react";
import { Container, Form, ContainerNav } from "./style";
import { loginUser } from "../../Services/UserService";
import logo from "../../assets/logo.svg";
import Input from "../../Components/Input";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { isUserAuthenticated } from "../../Services/UserService";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await loginUser(form);

      if (response === true) {
        alert("Usuário Logado!");
        navigate("/");
      } else {
        alert("Usuário ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário!", error);
      alert("Erro ao enviar formulário!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const validateInput = () => {
    // You can add your validation logic here, e.g., use a library like Yup for form validation.
    return form.email && form.password;
  };

  return (
    <Container>
      <Form>
        <img src={logo} alt="Logo" height={40} />

        <Input
          label="E-mail"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <Input
          label="Senha"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <ContainerNav>
          <p>Não possui conta?</p>
          <NavLink to="/register">Cadastre-se</NavLink>
        </ContainerNav>
        <Button
          type="submit"
          color="#60c31e"
          text="Entrar"
          onClick={handleSubmit}
          disabled={loading || !validateInput()}
        />
      </Form>
    </Container>
  );
};

export default Login;
