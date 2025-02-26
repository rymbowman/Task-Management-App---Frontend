import { Box, styled, Typography } from "@mui/material";
import InputBox from "../components/InputBox";
import PrimaryBtn from "../components/PrimaryBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
});

const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
    username: true,
    password: true,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setFormValidity((prevValidity) => ({
      ...prevValidity,
      [name]: value.length > 0,
    }));
  };

  const handleClick = () => {
    const isValid = Object.values(formValues).every(
      (value) => value.length > 0
    );
    if (isValid) {
      // handle form submission
      console.log("form submitted:", formValues);
      alert("Registration successful");
      navigate("/login");
      // clear form
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
      });
    } else {
      setFormValidity({
        firstName: formValues.firstName.length > 0,
        lastName: formValues.lastName.length > 0,
        email: formValues.email.length > 0,
        username: formValues.username.length > 0,
        password: formValues.password.length > 0,
      });
    }
  };
  return (
    <RegisterPage>
      <Typography variant="h4">Register</Typography>
      <InputBox
        label={"First Name"}
        name="firstName"
        value={formValues.firstName}
        onChange={handleChange}
        isValid={formValidity.firstName}
      />
      <InputBox
        label={"Last Name"}
        name="lastName"
        value={formValues.lastName}
        onChange={handleChange}
        isValid={formValidity.lastName}
      />
      <InputBox
        label={"Email"}
        name="email"
        value={formValues.email}
        onChange={handleChange}
        isValid={formValidity.email}
      />
      <InputBox
        label={"Username"}
        name="username"
        value={formValues.username}
        onChange={handleChange}
        isValid={formValidity.username}
      />
      <InputBox
        label={"Password"}
        name="password"
        value={formValues.password}
        onChange={handleChange}
        isValid={formValidity.password}
      />
      <PrimaryBtn buttonText="Login" value="login" onClick={handleClick} />
    </RegisterPage>
  );
};

export default Register;
