import React, { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiUrl } from "../config/apiConfig";
import { UserContext } from "../context/User";

export default function SignUp() {
  const { handleChangeSignUp, handleSignUp, inputValue } =
    useContext(UserContext);

  useEffect(() => {}, []);
  return (
    <div className="sign-in-container">
      <div className="sign-column s1">
        <div className="sign-column-face s2">
          <div className="s3">
            <div className="sign-header-section">
              <div className="sign-in-title">Sign up</div>
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
                <span>Sign in with Google</span>
              </a>
              <a href="#" className="login-w-button">
                <img
                  width={18}
                  height={18}
                  src="https://img.icons8.com/ios-filled/50/mac-os.png"
                  alt="mac-os"
                />
                <span>Sign in with Apple</span>
              </a>
            </div>
            <div className="slice-container">
              <div className="slice-text-c">
                <div className="slicer" />
                <div className="slice-text">Or with email</div>
              </div>
            </div>
            <form className="input-container" onSubmit={handleSignUp}>
              <input
                type="text"
                required
                placeholder="name"
                name="name"
                value={inputValue.name}
                onChange={handleChangeSignUp}
              />
              <input
                type="email"
                required
                placeholder="Email"
                name="email"
                value={inputValue.email}
                onChange={handleChangeSignUp}
              />
              <input
                type="password"
                required
                placeholder="Passowrd"
                name="password"
                value={inputValue.password}
                onChange={handleChangeSignUp}
              />
              <button>Sign up</button>
              <div href="#" className="alt-f-full">
                Not a Member yet ?
                <Link to="/signIn" className="alt-f">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
