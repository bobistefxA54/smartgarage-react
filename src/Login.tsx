import axios from "axios";
import Button from "./Button";
import InputForm from "./InputForm";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Login = () => {
  const inputs = ["Email", "Password"];
  const styles = "form-control border-dark";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const { saveToken } = useAuth();

  const handleLogin = async () => {
    setLoginError("");
    try {
      const credentials = `${username}:${password}`;
      const response = await axios.post(
        "http://localhost:5282/api/auth/login",
        null, // No request body
        {
          headers: {
            "Content-Type": "application/json",
            credentials: `${credentials}`, // Set Authorization header with credentials
          },
        }
      );

      const data = response.data;
      console.log("Login successful:", data);
      const { token } = response.data;
      saveToken(token);
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center gap-5"
      style={{ height: "70vh" }}
    >
      <Logo name="Log in to SmartGarage" />
      <div
        className="container d-flex flex-column gap-4"
        style={{ width: "40vh" }}
      >
        <InputForm
          inputs={inputs}
          styles={styles}
          onInputChange={(index, value) =>
            index === 0 ? setUsername(value) : setPassword(value)
          }
        />

        <div
          className="d-flex flex-column justify-content-center"
          style={{ width: "100%" }}
        >
          <Button name="Log in" onClick={handleLogin} color="dark" />
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          <Link to="/reset">
            <Button name="Reset password" color="" />
          </Link>

          <Link to="/register">
            <Button name="No account? Register" color="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
