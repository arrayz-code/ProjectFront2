import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, isAuthenticated, errors: signinErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src="./src/assets/vision.jpg" alt="Placeholder Image" className="object-cover w-full h-full"/>
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={onSubmit}>

                    {signinErrors && signinErrors.length > 0 && (
                        signinErrors.map((error, i) => (
                            <div className="bg-red-500 p-2 text-white rounded-m my-2" key={i}>
                                {error.message} {/* Renderiza el mensaje de error */}
                            </div>
                        ))
                    )}

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

                    <button type="submit" className="bg-black hover:bg-gray-700 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>

                <div className="mt-6 text-blue-500 text-center">
                    <Link to="/register" className="hover:underline">Sign up Here</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
