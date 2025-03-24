// pages/Login.jsx
import { useState } from "react";
import { loginUser } from "../../../api/restaurantApi"; // Import the loginUser function
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * LoginPage - Halaman login.
 * Proses login disimulasikan, token disimpan di localStorage.
 */
const LoginPage = () => {
  const validateForm = () => {
    if (!username) {
      toast.error("Username is required!");
      return false;
    }
    if (!password) {
      toast.error("Password is required!");
      return false;
    }
    return true;
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const token = await loginUser(username, password); // Call the loginUser function
        localStorage.setItem("token", token);
        toast.success("Login berhasil!");
        navigate("/");
      } catch (error) {
        toast.error("Login gagal! " + error.message); // Handle error
      }
    } else {
      toast.error("Username dan password wajib diisi!");
    }
  };

  return (
    <main className="auth-page">
      <div className="user-form">
        <div className="auth-header">
          <h1>Login</h1>
          <p>log in ke akun anda</p>
        </div>

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
          <p>
            Dont have an account? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
