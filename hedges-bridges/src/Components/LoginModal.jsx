import React, {useState} from 'react'

const LoginModal = ({setIsLoggedIn}) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = () => {
      const correctPassword = "admin123"; 
      if (password === correctPassword) {
        setIsLoggedIn(true);
      } else {
        setError("Incorrect password");
      }
    };
  
    const handleForgotPassword = () => {
      alert("Password reset instructions have been sent to admin@example.com");
    };
    return (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Admin Login</h2>
            {error && <p className="error-message">{error}</p>}
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <p className="forgot-password" onClick={handleForgotPassword}>
              Forgot Password?
            </p>
          </div>
        </div>
      );
    };
export default LoginModal


