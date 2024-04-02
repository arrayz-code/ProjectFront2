import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

function ProtectedRoute(params) {
    const { loading, isAuthenticated, userRole } = useAuth();

    if (loading) return <h1>Cargando</h1>;
    if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;
    if (isAuthenticated && userRole !== "admin") return <Navigate to="/" replace />; // Redirige a la página principal si el usuario no es administrador
    return <Outlet />;
}

export default ProtectedRoute;