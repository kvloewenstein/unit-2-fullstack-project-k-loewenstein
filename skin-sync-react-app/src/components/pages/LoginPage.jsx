import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

   const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.text();

      
      if (data === "Login successful") {
        setMessage("Welcome back!");
        navigate("/"); // redirect to Home
      } else {
        setMessage(data); // show error message
      }
    } catch (err) {
      console.error(err);
      setMessage("Login failed, please try again");
    }
  };


  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}

      <div className="signup-prompt">
        <p>Not a user?</p>
        <a href="/signup">Create an account for free today!</a>
      </div>
    </div>
  );
}

export default LoginPage;
