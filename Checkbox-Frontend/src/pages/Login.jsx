import { Box, styled, Typography } from "@mui/material";
import PrimaryBtn from "../components/PrimaryBtn";
import InputBox from "../components/InputBox";
import { useState } from "react";

const LoginPage = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  background: "linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)",
});
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleClick = () => {
    setUsername("");
    setPassword("");
  };
  return (
    <LoginPage>
      <Typography variant="h4">Login</Typography>
      <InputBox
        label={"Username"}
        name="username"
        value={username}
        onChange={handleChange}
      />
      <InputBox
        label={"Password"}
        name="password"
        value={password}
        onChange={handleChange}
      />
      <PrimaryBtn buttonText="Login" value="login" onClick={handleClick} />
    </LoginPage>
  );
};

export default Login;
