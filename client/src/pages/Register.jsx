import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src="https://media.es.wired.com/photos/647f54f7e1c13787dd8e3361/2:3/w_1200,h_1800,c_limit/Apple-Vision-Pro-Hands-On-Gear-Featured-GettyImages-1496190487.jpg" alt="Placeholder Image" className="object-cover w-full h-full"/>
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
                <form onSubmit={onSubmit}>
                    {registerErrors && registerErrors.length > 0 && (
                        registerErrors.map((error, i) => (
                            <div className="bg-red-500 p-2 text-white rounded-m my-2" key={i}>
                                {error}
                            </div>
                        ))
                    )}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input type="text" id="username" {...register("username", { required: true })} className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${errors.username ? 'border-red-500' : ''}`} placeholder="Username" />
                        {errors.username && (
                            <p className="text-red-500">Nombre de usuario es requerido</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" {...register("email", { required: true })} className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`} placeholder="Email" />
                        {errors.email && (
                            <p className="text-red-500">Email es requerido</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" {...register("password", { required: true })} className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${errors.password ? 'border-red-500' : ''}`} placeholder="Password" />
                        {errors.password && (
                            <p className="text-red-500">Contraseña es requerido</p>
                        )}
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-200">Register</button>
                </form>
                <div className="mt-6 text-blue-500 text-center">
                    <Link to="/login" className="hover:underline">¿Ya tienes una cuenta? Login</Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;