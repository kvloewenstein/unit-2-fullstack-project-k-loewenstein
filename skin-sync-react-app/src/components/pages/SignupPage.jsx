import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignupPage.css"

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.error) {
        setMessage(data.error);
      } else if (data.message === "Signup successful") {
        setMessage(data.message);
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setMessage("Signup failed, please try again");
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSignup}>
        <h2>Create Account</h2>

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
        <button type="submit">Sign Up</button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default SignupPage;