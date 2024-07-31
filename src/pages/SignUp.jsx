import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

export default function SignUp() {
  const { handleChangeSignUp, handleSignUp, inputValue } =
    useContext(UserContext);

  return (
    <div className="sign-in-container">
      <div className="sign-column s1">
        <div className="sign-column-face s2">
          <div className="s3">
            <div className="sign-header-section">
              <div className="sign-in-title">הרשמה</div>
              <div className="sign-in-title-alt">ברוכים הבאים לשיפוצים</div>
            </div>
            <div className="sign-buttons">
              <a href="#" className="login-w-button">
                <img
                  width={18}
                  height={18}
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="לוגו גוגל"
                />
                <span>התחבר עם גוגל</span>
              </a>
              <a href="#" className="login-w-button">
                <img
                  width={18}
                  height={18}
                  src="https://img.icons8.com/ios-filled/50/mac-os.png"
                  alt="לוגו אפל"
                />
                <span>התחבר עם אפל</span>
              </a>
            </div>
            <div className="slice-container">
              <div className="slice-text-c">
                <div className="slicer" />
                <div className="slice-text">או עם דוא"ל</div>
              </div>
            </div>
            <form className="input-container" onSubmit={handleSignUp}>
              <input
                type="text"
                required
                placeholder="שם"
                name="name"
                value={inputValue.name}
                onChange={handleChangeSignUp}
              />
              <input
                type="email"
                required
                placeholder={`דואל`}
                name="email"
                value={inputValue.email}
                onChange={handleChangeSignUp}
              />
              <input
                type="password"
                required
                placeholder="סיסמא"
                name="password"
                value={inputValue.password}
                onChange={handleChangeSignUp}
              />
              <button type="submit">הרשמה</button>
              <div className="alt-f-full">
                לא חבר עדיין?
                <Link to="/signIn" className="alt-f">
                  התחבר
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
