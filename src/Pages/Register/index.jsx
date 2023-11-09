import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Form, ContainerNav } from "./style";
import { registerUser } from "../../Services/UserService";
import logo from "../../assets/logo.svg";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../Utils/validators";
import { useNavigate } from "react-router-dom";
import { isUserAuthenticated } from "../../Services/UserService";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (response === true) {
        toast.success("Usuário registrado com sucesso!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao tentar se candastrar", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validateInput = () => {
    return (
      validateEmail(form.email) &&
      validatePassword(form.password) &&
      validateConfirmPassword(form.password, form.passwordConfirmation)
    );
  };

  return (
    <Container>
      <Form>
        <img src={logo} alt="Logo" height={40} />

        <Input
          label="Seu nome completo: "
          name="name"
          type="text"
          onChange={handleChange}
          required
        />
        <Input
          label="E-mail: "
          name="email"
          type="email"
          onChange={handleChange}
          required
        />
        <Input
          label="Senha: "
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
        <Input
          label="Confirme sua senha: "
          name="passwordConfirmation"
          type="password"
          onChange={handleChange}
          required
        />
        <ContainerNav>
          <p>Já possui conta?</p> <a href="/login">Fazer o login</a>
        </ContainerNav>
        <Button
          type="submit"
          color="#60c31e"
          text="Criar conta"
          onClick={handleSubmit}
          disabled={loading === true || !validateInput()}
        />
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default Register;
