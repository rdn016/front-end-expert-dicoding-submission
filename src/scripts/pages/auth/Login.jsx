// pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * LoginPage - Halaman login.
 * Proses login disimulasikan, token disimpan di localStorage.
 */
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      // Simulasi login, ganti dengan API call asli kalo perlu
      const token = "dummy-token";
      localStorage.setItem("token", token);
      toast.success("Login berhasil!");
      navigate("/");
    } else {
      toast.error("Username dan password wajib diisi!");
    }
  };

  return (
    <main className="auth-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default LoginPage;
