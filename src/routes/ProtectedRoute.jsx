import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Loader from "../components/Loader"


function ProtectedRoute({ children }) {

    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className="grid h-screen place-content-center"><Loader /></div>
    } else if (!user) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />
    } else {
        return children
    }

}
export default ProtectedRoute