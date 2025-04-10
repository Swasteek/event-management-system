import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonAdd, Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            await axios.post("http://localhost:8000/api/register/", {
                email: formData.email,
                password: formData.password
            });
            navigate("/login");
        } catch (error) {
            setErrors({ api: error.response?.data?.message || "Registration failed" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
            <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${errors.api ? "border border-red-500" : ""}`}>
                <div className="text-center mb-6">
                    <PersonAdd className="mx-auto text-4xl mb-2 text-blue-500" />
                    <h2 className="text-2xl font-bold">Create Account</h2>
                    <p className="text-gray-500">Join us to manage your events</p>
                </div>

                {errors.api && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                        {errors.api}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            placeholder="your@email.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"}`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </button>
                        </div>
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block mb-1 font-medium">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                            placeholder="••••••••"
                        />
                        {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition flex justify-center items-center"
                    >
                        {isSubmitting ? "Creating Account..." : "Register"}
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">Sign in</a>
                </p>
            </div>
        </div>
    );
};

export default Register;