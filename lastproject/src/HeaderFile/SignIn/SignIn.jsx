import React, { useState } from "react";
import HeaderProps from "../HeaderProps";
import "./SignIn.css";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !phone || !email || !password) {
      setMessage("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === email)) {
      setMessage("Email đã tồn tại!");
      return;
    }

    const newUser = { name, phone, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Đăng ký thành công! Hãy đăng nhập.");
    setIsRegister(false);
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setMessage(`Chào mừng, ${user.name}!`);
      setTimeout(() => navigate("/home"), 500);
    } else {
      setMessage("❌ Sai email hoặc mật khẩu!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setEmail("");
    setPassword("");
    setMessage("Bạn đã đăng xuất.");
  };

  return (
    <div className="signin-container">
      <HeaderProps />
      <div className="auth-box">
        <div className="auth-form">
          <h2>{isRegister ? "Register" : "Login"}</h2>
          {isRegister && (
            <>
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </>
          )}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {isRegister ? (
            <button onClick={handleRegister} className="btn-primary">Create My Account</button>
          ) : (
            <button onClick={handleLogin} className="btn-primary">Login</button>
          )}
          <p className={`message ${message.includes("❌") ? "error" : "success"}`}>{message}</p>
          <p className="toggle-link" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Already have an account? Login here" : "Don't have an account? Register now"}
          </p>
        </div>
        <div className="auth-info">
          <div className="logo">AUTOHUNT</div>
          <h2>{isRegister ? "Register" : "Login"}</h2>
          <p>Welcome to Autohunt</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;