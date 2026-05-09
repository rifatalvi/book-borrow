"use client";
import { authClient, signOut } from '@/lib/auth-client';
import { Button } from '@heroui/react';

import { redirect } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const hendelGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    const onSubmit = async (data) => {
        const { email, password, name, image } = data;

        const { data: users, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image
        })
        if (users) {

            toast.success('Registration Successful', {
                actionProps: {
                    children: 'Welcome Back',
                    className: 'bg-success text-success-foreground text-white',
                },
                description: 'You have successfully registered to your account.',
                timeout: 3000,
            });
            signOut();
            redirect('/signin');

        }
        if (error) {
            toast.danger('Registration Failed', {
                actionProps: {
                    children: 'Try Again',
                    className: 'bg-danger text-danger-foreground text-white',
                },
                description:
                    error.message ||
                    'Something went wrong. Please check your details and try again.',
                timeout: 3000,
            });
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-gray-500">Please fill in the details to sign up</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Enter your Full Name"
                        />
                        {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image Url</label>
                        <input
                            type="text"
                            {...register("image", { required: "Url is required" })}
                            className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Enter your image Url"
                        />
                        {errors.image && <span className="text-red-500 text-xs">{errors.image.message}</span>}
                    </div>



                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="example@mail.com"
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Minimum 6 characters required" }
                            })}
                            className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="••••••••"
                        />
                        {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                {...register("terms", { required: "You must accept terms" })}
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="text-gray-600">I agree to the Terms and Conditions</label>
                            {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                        Sign Up
                    </button>

                </form>
                <p className='text-center'>or</p>

                <Button
                    type="button"
                    onPress={() => hendelGoogle()}
                    fullWidth
                    size="lg"
                    variant="bordered"
                    className="text-black font-bold shadow-lg rounded-2xl"
                >
                    <GrGoogle /> Log In with Google
                </Button>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account? <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;