import React, { useContext, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../config/apiConfig";
import { UserContext } from "../../context/User";

export default function SignIn() {
  const { setToken } = useContext(UserContext);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleChangeLogin = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const logInUser = await axios.post(`${apiUrl}/users/login`, inputValue);

    localStorage.setItem("token", logInUser.data.token);
    setToken(logInUser.data.token);

    setInputValue({ email: "", password: "" });
  };
  return (
    <div className="sign-in-container">
      <div className="sign-column s1">
        <div className="sign-column-face s2">
          <div className="s3">
            <div className="sign-header-section">
              <div className="sign-in-title">Login Page</div>
              <div className="sign-in-title-alt">Welcome to renovations</div>
            </div>
            <div className="sign-buttons">
              <a href="#" className="login-w-button">
                <img
                  width={18}
                  height={18}
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />
                <span>Login with Google</span>
              </a>
              <a href="#" className="login-w-button">
                <img
                  width={18}
                  height={18}
                  src="https://img.icons8.com/ios-filled/50/mac-os.png"
                  alt="mac-os"
                />
                <span>Login with Apple</span>
              </a>
            </div>
            <div className="slice-container">
              <div className="slice-text-c">
                <div className="slicer" />
                <div className="slice-text">Or with email</div>
              </div>
            </div>
            <form className="input-container" onSubmit={handleSubmitLogin}>
              <input
                type="email"
                required
                placeholder="Email"
                name="email"
                value={inputValue.email}
                onChange={handleChangeLogin}
              />
              <input
                type="password"
                required
                placeholder="Passowrd"
                name="password"
                value={inputValue.password}
                onChange={handleChangeLogin}
              />

              <button type="submit">Log in</button>
              <div href="#" className="alt-f-full">
                Not a Member yet ?
                <Link className="alt-f" to="/signUp">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
