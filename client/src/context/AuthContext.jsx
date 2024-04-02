import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, verityTokenRequet } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    // Obtener el rol de usuario almacenado en el localStorage
    const userRole = localStorage.getItem('role') || 'user';

    return { ...context, userRole };
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userRoles, setUserRoles] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);



    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
            setUserRoles(res.data.roles);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticated(true);
            setUser(res.data);
            setUserRoles(res.data.roles);

            let role = res.data.roles && res.data.roles.length > 0 ? res.data.roles[0] : 'user';

            localStorage.setItem('role', role);
            console.log(role);
            console.log(res);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            } else {
                setErrors([error.response.data]);
            }
        }
    };
    
    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('role');
        localStorage.removeItem('isAdmin');
    };
    

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                setUser(null);
                return;
            }

            try {
                const res = await verityTokenRequet(cookies.token);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        }

        checkLogin();
    }, []);


    // Eliminar errores después de cierto tiempo
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            loading,
            user,
            userRoles,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
