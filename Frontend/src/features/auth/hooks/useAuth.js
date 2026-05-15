import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe} from "../services/auth.api";

export const useAuth = () => {
  
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading, error, setError } = context

    const handleLogin = async ({email, password}) => {
        setLoading(true)
        setError(null)
        try {
            const data = await login({email, password})
            setUser(data.user)
            setError(null)
        } catch (error) {
            console.error('Login failed:', error);
            const errMsg = error.response?.data?.message || 'Login failed'
            setError(errMsg)
            throw error
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({username, email, password}) => {
        setLoading(true)
        setError(null)
        try {
            const data = await register({ username, email, password })
            setUser(data.user)
            setError(null)
        } catch (error) {
            console.error('Register failed:', error);
            const errMsg = error.response?.data?.message || 'Registration failed'
            setError(errMsg)
            throw error
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        setError(null)
        try {
            await logout()
            setUser(null)
            setError(null)
        } catch (error) {
            console.error('Logout failed:', error);
            setError(error.response?.data?.message || 'Logout failed')
            throw error
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {

        const getAndSetUser = async() => {
            try {
                const data = await getMe()
                if(data?.user) {
                    setUser(data.user)
                } else {
                    setUser(null)
                }
            } catch (error) {
                console.error('Failed to fetch user:', error);
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()
        
    }, [setUser, setLoading])

    return { user, loading, handleLogin, handleRegister, handleLogout, error }
}