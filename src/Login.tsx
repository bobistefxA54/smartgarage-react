import axios from "axios";
import Button from "./Button";
import InputForm from "./InputForm";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const inputs = ["Email", "Password"];
  const styles = "form-control m-2 border-dark";
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
    <div className="container" style={{ width: "30vh" }}>
      <InputForm
        inputs={inputs}
        styles={styles}
        onInputChange={(index, value) =>
          index === 0 ? setUsername(value) : setPassword(value)
        }
      />

      <div
        className="d-flex justify-content-center gap-3"
        style={{ width: "100%" }}
      >
        <Button name="Log in" onClick={handleLogin} color="dark" />
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}

        <Link to="/register">
          <Button name="Register" color="dark" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
