import React, { useState } from 'react';
import "./AuthForm.css";
function AuthForm() {
    // State to toggle between signup and login
    const [isSignup, setIsSignup] = useState(true);

    // Form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSignup) {
            console.log('Signup data:', { name, email, password });
            // Perform signup actions here
        } else {
            console.log('Login data:', { email, password });
            // Perform login actions here
        }
    };

    // Toggle between signup and login mode
    const toggleMode = () => {
        setIsSignup((prevMode) => !prevMode);
    };

    return (
        <div className="auth-container">
            <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                {isSignup && (
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
                <button type="button" onClick={toggleMode} className="toggle-button">
                    {isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
                </button>
            </form>
        </div>
    );
}

export default AuthForm;
