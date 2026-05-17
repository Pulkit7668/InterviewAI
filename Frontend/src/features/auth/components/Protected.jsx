import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import Navbar from "./Navbar";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Protected = ({children}) => {
    const { loading, user } = useAuth();
  
    if(loading) {
      return <LoadingSpinner fullScreen message="Authenticating..." />
    }

    if(!user) {
        return <Navigate to="/login" />
    }
  
    return (
      <>
        <Navbar />
        {children}
      </>
    )
}

export default Protected