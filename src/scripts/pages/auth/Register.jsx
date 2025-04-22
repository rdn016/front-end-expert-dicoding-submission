// pages/Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../../api/restaurantApi";

/**
 * RegisterPage - Halaman registrasi.
 * Proses registrasi disimulasikan, setelah registrasi langsung arahkan ke login.
 */
const RegisterPage = () => {
  const validateForm = () => {
    if (!username) {
      toast.error("Username wajib di isi!");
      return false;
    }
    if (!password) {
      toast.error("Password wajib di isi!");
      return false;
    }
    return true;
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await register(username, password);
      toast.success("berhasil membuat akun");
      navigate("/login");
    }
  };

  return (
    <main className="auth-page">
      <div className="user-form">
        <div className="auth-header">
          <h1>Register</h1>
          <p>Register akun anda </p>
        </div>
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
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
