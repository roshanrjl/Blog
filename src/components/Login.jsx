import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Inputs, Logo } from './index';
import { useDispatch } from 'react-redux';
import authservices from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  const login = async (data) => {
    setError(""); // Reset error state before login attempt
    try {
      const session = await authservices.login(data);
      if (session) {
        const user = await authservices.getCurrentUser();
        if (user) {
          dispatch(authLogin(user));
          navigate('/');
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Sign in to your account</h2>
        <p className="text-center text-gray-600 mb-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="space-y-4">
          <div>
            <Inputs
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                validate: {
                  matchPattern: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email format',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <Inputs
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
                validate: {
                  minLength: (value) =>
                    value.length >= 8 || 'Password must be at least 8 characters long',
                },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
