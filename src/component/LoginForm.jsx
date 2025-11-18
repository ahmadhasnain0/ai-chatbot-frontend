'use client';

import React, { useState } from 'react';
import InputField from './InputField';
import PrimaryButton from './PrimaryButton';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // Add your login logic here
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to continue to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          required
        />

        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Forgot password?
          </a>
        </div>

        <PrimaryButton type="submit" fullWidth>
          Sign In
        </PrimaryButton>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
