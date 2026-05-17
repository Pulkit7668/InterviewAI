// import "../auth.form.scss"
// import { useNavigate, Link } from 'react-router';
// import { useState } from "react";
// import { useAuth } from "../hooks/useAuth";
// import LoadingSpinner from "../../../components/LoadingSpinner";

// const Register = () => {

//     const navigate = useNavigate();
//     const [ username, setUsername ] = useState('')
//     const [ email, setEmail ] = useState('')
//     const [ password, setPassword ] = useState('')

//     const { loading, handleRegister} = useAuth();

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             await handleRegister({username, email, password})
//             navigate('/')
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     if(loading) {
//         return <LoadingSpinner fullScreen message="Creating your account..." />
//     }

//     return (
//         <main>
//             <div className="form-container">

//                 <div className="brand-mark">
//                     <div className="brand-logo">
//                        <span>AI</span>
//                     </div>
//                     <span className="brand-dot" />
//                     <span className="brand-name">InterviewAI</span>
//                 </div>

//                 <h1>Create account</h1>
//                 <p className="subtitle">Join us — it only takes a minute</p>

//                 <form onSubmit={handleSubmit}>
//                     <div className="input-group">
//                         <label htmlFor="username">Username</label>
//                         <div className="input-wrapper">
//                             <span className="input-icon">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
//                             </span>
//                             <input
//                                 onChange={(e) => {setUsername(e.target.value)}}
//                                 type="text"
//                                 name="username"
//                                 id="username"
//                                 placeholder="Choose a username"
//                                 autoComplete="username"
//                                 required
//                             />
//                         </div>
//                     </div>
                    
//                     <div className="input-group">
//                         <label htmlFor="email">Email</label>
//                         <div className="input-wrapper">
//                             <span className="input-icon">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
//                             </span>
//                             <input
//                                 onChange={(e) => {setEmail(e.target.value)}}
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 placeholder="you@example.com"
//                                 autoComplete="email"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <div className="input-wrapper">
//                             <span className="input-icon">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
//                             </span>
//                             <input
//                                 onChange={(e) => {setPassword(e.target.value)}}
//                                 type="password"
//                                 name="password"
//                                 id="password"
//                                 placeholder="Min. 8 characters"
//                                 autoComplete="new-password"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <button type="submit" className="button primary-button" disabled={loading}>
//                         {loading ? (
//                             <>
//                                 <div className="spinner-button"></div>
//                                 Creating account...
//                             </>
//                         ) : (
//                             <>Create account</>
//                         )}
//                     </button>
//                 </form>

//                 <p>Already have an account? <Link to="/login">Sign in</Link></p>
//             </div>
//         </main>
//     )
// }

// export default Register

import "../auth.form.scss"
import { useNavigate, Link } from 'react-router';
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Register = () => {

    const navigate = useNavigate();

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)

    const { loading, handleRegister} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await handleRegister({username, email, password})
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    if(loading) {
        return <LoadingSpinner fullScreen message="Creating your account..." />
    }

    return (
        <main>
            <div className="form-container">

                <div className="brand-mark">
                    <div className="brand-logo">
                       <span>AI</span>
                    </div>
                    <span className="brand-dot" />
                    <span className="brand-name">InterviewAI</span>
                </div>

                <h1>Create account</h1>
                <p className="subtitle">Join us — it only takes a minute</p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>

                        <div className="input-wrapper">
                            <span className="input-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="5"/>
                                    <path d="M20 21a8 8 0 1 0-16 0"/>
                                </svg>
                            </span>

                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Choose a username"
                                autoComplete="username"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        <div className="input-wrapper">
                            <span className="input-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                            </span>

                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>

                        <div className="input-wrapper">
                            <span className="input-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                            </span>

                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Min. 8 characters"
                                autoComplete="new-password"
                                required
                            />

                            <button
                                type="button"
                                className="eye-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="button primary-button" disabled={loading}>
                        {loading ? (
                            <>
                                <div className="spinner-button"></div>
                                Creating account...
                            </>
                        ) : (
                            <>Create account</>
                        )}
                    </button>
                </form>

                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </main>
    )
}

export default Register