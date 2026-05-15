import "../auth.form.scss"
import { useNavigate, Link } from 'react-router';
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate();
    const { loading, handleLogin} = useAuth();
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        handleLogin({email, password})
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

                <h1>Welcome back</h1>
                <p className="subtitle">Sign in to continue to your account</p>

                <form onSubmit={handleSubmit}>
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
                                placeholder="Enter your password"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>

                    <button type="submit" className="button primary-button">
                        Sign in →
                    </button>
                </form>

                <p>Don't have an account? <Link to="/register">Create one</Link></p>
            </div>
        </main>
    )
}

export default Login