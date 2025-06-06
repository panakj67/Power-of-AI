import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin, setUser } from "../store/actions/userSlice";

const AuthForm = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData);
    } else {
      console.log("Registering with:", formData);
    }
    dispatch(setUser(true))
    dispatch(setLogin(false))
  };

  return (
    <div onClick={() => dispatch(setLogin(false))}
     className="h-screen inset-0  drop-shadow-2xl backdrop-blur-xs fixed z-20 flex items-center justify-center p-4">
      <div onClick={(e) => e.stopPropagation()}
       className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-950">
          {isLogin ? "Login to InterviewAI" : "Register to InterviewAI"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-xl"
                required
              />
            </div>
          )}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-950 cursor-pointer hover:bg-gray-text-gray-950 text-white py-2 px-4 rounded-xl transition-all duration-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="mt-5 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={handleToggle}
              className="text-gray-950 cursor-pointer hover:underline font-medium"
            >
              {isLogin ? "Register here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
