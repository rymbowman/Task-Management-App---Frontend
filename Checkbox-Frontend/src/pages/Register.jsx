import { Box, styled, Typography } from "@mui/material";
import InputBox from "../components/InputBox";
import PrimaryBtn from "../components/PrimaryBtn";

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
  return (
    <RegisterPage>
      <Typography variant="h4">Register</Typography>
      <InputBox
        label={"First Name"}
        name="firstName"
        value={firstName}
        onChange={handleChange}
        isValid={isFirstNameValid}
      />
      <InputBox
        label={"Last Name"}
        name="lastName"
        value={lastName}
        onChange={handleChange}
        isValid={isLastNameValid}
      />
      <InputBox
        label={"Email"}
        name="email"
        value={email}
        onChange={handleChange}
        isValid={isEmailValid}
      />
      <InputBox
        label={"Username"}
        name="username"
        value={username}
        onChange={handleChange}
        isValid={isUserValid}
      />
      <InputBox
        label={"Password"}
        name="password"
        value={password}
        onChange={handleChange}
        isValid={isPasswordValid}
      />
      <PrimaryBtn buttonText="Login" value="login" onClick={handleClick} />
    </RegisterPage>
  );
};

export default Register;
