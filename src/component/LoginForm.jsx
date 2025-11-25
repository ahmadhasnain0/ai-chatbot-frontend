'use client';
import React from 'react';
import { useFormik } from 'formik';
import InputField from './InputField';
import PrimaryButton from './PrimaryButton';
import {Header} from './home/Header';
import { loginUser,logoutUser } from '../services/authService';
import { useRouter } from 'next/navigation';
import { loginSchema } from '../validation/index';
import { useAuth } from '@/src/context/AuthContext';
import { useEffect } from "react";

export default function LoginForm() {
  const router = useRouter();
  const { checkAuth,  user, loading, logout: contextLogout  } = useAuth(); // ✅ Get checkAuth from context

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        setStatus('');
        const response = await loginUser(values.email, values.password);

        if (response.success) {
          // ✅ Refresh user context after successful login
          await checkAuth();
          router.push('/student-portal');
        }

      } catch (err) {
        setStatus(err.message || "Login failed. Please try again.");
      } finally {
        setSubmitting(false);
      }
    }
  });

   const handleLogout = async () => {
      try {
        const response = await logoutUser();
        
        if (response.success) {
          contextLogout(); // Clear context
          localStorage.removeItem("token");
          router.push("/");
        }
      } catch (error) {
        console.error("Logout error:", error);
        // Force logout even if API call fails
        contextLogout();
        localStorage.removeItem("token");
        router.push("/");
      }
    };

    // useEffect(() => {
    //       handleLogout();
    
    //     }, []);

  return (
    <>
      
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to continue to your account</p>
      </div>

      {formik.status && (
        <div className="mb-4 p-3 text-sm text-red-600 bg-red-100 rounded">
          {formik.status}
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <InputField
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Email Address"
          error={formik.touched.email && formik.errors.email}
        />

        <InputField
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Password"
          error={formik.touched.password && formik.errors.password}
        />

        <PrimaryButton 
          type="submit" 
          fullWidth 
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Signing In..." : "Sign In"}
        </PrimaryButton>
      </form>
    </div>
    </>

  );
}