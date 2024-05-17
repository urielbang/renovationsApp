import axios from "axios";
import { createContext, useState, useEffect, React } from "react";
import { apiUrl } from "../config/apiConfig";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [logedUser, setLogedUser] = useState(null); // Changed initial state to null
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/users/init-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;

      setLogedUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const signUpUser = await axios.post(`${apiUrl}/users/singIn`, userData);

    localStorage.setItem("token", signUpUser.data.token);
    setToken(signUpUser.data.token);

    setInputValue({ name: "", email: "", password: "" });
  };
  const handleChangeSignUp = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getUser();
  }, [token]);
  return (
    <UserContext.Provider
      value={{
        logedUser,
        setLogedUser,
        setToken,
        handleSignUp,
        handleChangeSignUp,
        inputValue,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
