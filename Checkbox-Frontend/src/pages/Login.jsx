import { Box, styled, Typography } from "@mui/material";
import PrimaryBtn from "../components/PrimaryBtn";
import InputBox from "../components/InputBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUserValid, setIsUserValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
      setIsUserValid(value.length > 0);
    } else if (name === "password") {
      setPassword(value);
      setIsPasswordValid(value.length > 0);
    }
  };

  const handleClick = () => {
    if (username.length < 1) {
      setIsUserValid(false);
    }
    if (password.length < 1) {
      setIsPasswordValid(false);
    }
    if (username.length > 0 && password.length > 0) {
      navigate("/dashboard");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <LoginPage>
      <Typography variant="h4">Login</Typography>
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
    </LoginPage>
  );
};

export default Login;
