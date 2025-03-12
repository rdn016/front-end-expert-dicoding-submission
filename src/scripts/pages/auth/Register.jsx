// pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * RegisterPage - Halaman registrasi.
 * Proses registrasi disimulasikan, setelah registrasi langsung arahkan ke login.
 */
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password) {
      toast.success("Registrasi berhasil! Silahkan login.");
      navigate("/login");
    } else {
      toast.error("Username dan password wajib diisi!");
    }
  };

  return (
    <main className="auth-page">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default RegisterPage;
