import React, { useState } from "react";
import "./register-page.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { AiFillEye } from "react-icons/ai";

import { BACKEND_URL } from "../../config";
import { ReactComponent as WorklySygnet } from "../../assets/images/workly-sygnet-yellow.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { passwordValidation, emailValidation } from "../../config";
import { ThemeProvider } from "../../theme/theme";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const registerSubmit = async (e) => {
    e.preventDefault();

    setIsSubmit(true);

    let isFormValid = true;

    if (!email.match(emailValidation)) {
      toast.error("Email is invalid");
      setIsSubmit(false);
      isFormValid = false;
    }

    if (!password.match(passwordValidation)) {
      toast.error("Password doesn't meet the requirements");
      setIsSubmit(false);
      isFormValid = false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      setIsSubmit(false);
      isFormValid = false;
    }

    if (isFormValid) {
      const response = await axios.post(BACKEND_URL + "/api/auth/register", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
      });
      if (response.status === 200) {
        toast.success("Your account has been created successfully");
        setIsSubmit(false);
      } else {
        toast.error("An unexpected error has occurred. Try again later.");
      }
    }
  };

  return (
    <ThemeProvider>
      <main className="relative grid grid-cols-12 items-center py-10 min-h-screen bg-secondary">
        <DarkModeToggle className="absolute right-0 top-0" />
        <ToastContainer />
        <div className="col-span-4 col-start-5">
          <div className="px-5 py-10 dark:bg-gray-700 bg-primary rounded shadow-2xl">
            <WorklySygnet className="block mb-10 mx-auto" />
            <div className="relative flex justify-center mb-10 mt-4">
              <Link to="/register" className="mr-10 text-purple-main text-xl">
                Register
              </Link>
              <span className="absolute left-1/2 top-2/4 w-px h-6 bg-gray-400 transform -translate-y-2/4" />
              <Link to="/login" className="ml-10 text-secondary text-xl">
                Login
              </Link>
            </div>
            <form onSubmit={registerSubmit}>
              <div className="grid gap-4 grid-cols-2 w-full">
                <div>
                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    label="First name"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required="required"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    label="Last name"
                    placeholder="Kowalsky"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required="required"
                  />
                </div>
              </div>
              <Input
                type="email"
                name="email"
                id="email"
                label="E-mail"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              />
              <Input
                type={`${showPassword === true ? "text" : "password"}`}
                name="password"
                id="password"
                label="Password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required="required"
              >
                <button
                  type="button"
                  onClick={(e) => setShowPassword(!showPassword)}
                  className={`show-password absolute top-2/4 right-3 ${
                    showPassword === true ? "active" : ""
                  }`}
                >
                  <AiFillEye size="1.6em" style={{ color: "gray" }} />
                </button>
              </Input>
              <p className="-mt-5 mb-5 text-secondary text-xs">
                Password must be between 8 to 64 characters which contain at
                least one number, one uppercase and one lowercase letter. Also
                can't contain spaces.
              </p>
              <Input
                type={`${showPassword === true ? "text" : "password"}`}
                name="confirm-password"
                id="confirm-password"
                label="Confirm password"
                placeholder="*********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required="required"
              />

              <Button type="submit" size="sm" color="green">
                {isSubmit === false ? "Register" : "Submiting..."}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default RegisterPage;
