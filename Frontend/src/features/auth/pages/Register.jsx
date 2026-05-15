import "../auth.form.scss"
import { useNavigate, Link } from 'react-router';
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

    const navigate = useNavigate();
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const { loading, handleRegister} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username, email, password})
        navigate('/')
    }

    if(loading) {
        return <main><h1>Loading......</h1></main>
    }

    return (
        <main>
            <div className="form-container">

                <div className="brand-mark">
                    <div className="brand-logo">
                       <span>YA</span>  {/* "YourApp" ke initials */}
                    </div>
                    <span className="brand-dot" />
                    <span className="brand-name">YourApp</span>
                </div>

                <h1>Create account</h1>
                <p className="subtitle">Join us — it only takes a minute</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <div className="input-wrapper">
                            <span className="input-icon">👤</span>
                            <input
                                onChange={(e) => {setUsername(e.target.value)}}
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Choose a username"
                                autoComplete="username"
                            />
                        </div>
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-wrapper">
                            <span className="input-icon">✉</span>
                            <input
                                onChange={(e) => {setEmail(e.target.value)}}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <span className="input-icon">🔒</span>
                            <input
                                onChange={(e) => {setPassword(e.target.value)}}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Min. 8 characters"
                                autoComplete="new-password"
                            />
                        </div>
                    </div>

                    <button type="submit" className="button primary-button">
                        Create account →
                    </button>
                </form>

                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </main>
    )
}

export default Register