import { useState } from "react";
import InputForm from "./InputForm";
import axios from "axios";
import Button from "./Button";
import Logo from "./Logo";

const Register = () => {
  const inputs = ["Email"];
  const styles = "form-control dark";

  const [username, setUsername] = useState("");
  const [borderColor, setBorderColor] = useState("black");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleEmailValidation = async () => {
    if (username.trim() !== "") {
      try {
        const response = await axios.get(
          `http://localhost:5282/api/auth/checkEmail?email=${username}`
        );
        setBorderColor(response.data.emailExists ? "red" : "green");
        setButtonDisabled(response.data.emailExists);
      } catch (error) {
        console.error("Email validation error:", error);
      }
    } else {
      setBorderColor("dark");
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5282/api/auth/register",
        {
          email: username,
        }
      );
      const data = response.data;
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center gap-5"
      style={{ height: "70vh" }}
    >
      <Logo name="Register to SmartGarage" />
      <div
        className="d-flex flex-column justify-content-center gap-2"
        style={{ width: "30vh" }}
      >
        <InputForm
          inputs={inputs}
          styles={styles}
          color={borderColor}
          onBlur={handleEmailValidation}
          onInputChange={(_index, value) => setUsername(value)}
        />
        <Button
          onClick={handleRegister}
          name="Register"
          color="dark"
          disabled={buttonDisabled}
        />
      </div>
    </div>
  );
};

export default Register;
