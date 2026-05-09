"use client";
import { useState } from "react";
import { Mail, Lock, ArrowLeft, Divide } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { Button, Card, CardHeader, Input } from "@heroui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form"; 
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { GrGoogle } from "react-icons/gr";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
 const hendelGoogle = async () =>{
  try {
        console.log("Google Login Initiated...");
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", 
        });
    } catch (error) {
        console.error("Google Signin Error:", error);
        toast.error("Google sign-in failed!");
    }
}
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    control, // Added control for Controller
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = async (data) => {
    setIsLoading(true);
    const { email, password } = data;

    try {
      const { data: session, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        
        const errorMessage = error.status === 401 
          ? "Invalid email or password" 
          : (error.message || "Something went wrong");

        toast.error('Login Failed', {
          description: errorMessage,
        });
        console.error("Login Error:", error);
      } else {
        toast.success('Login Successful', {
          description: 'You have successfully signed in to your account.',
        });
        router.push("/"); 
      }
    } catch (err) {
      toast.error('Error', { description: 'An unexpected error occurred.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50/50 px-6 py-12 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="w-full max-w-md relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>

        <Card className="border-none shadow-2xl shadow-indigo-100/50 rounded-[2rem] p-4 bg-gray-200">
          <CardHeader className="flex flex-col gap-2 items-center pb-0 pt-8">
            <div className="w-16 h-16 relative mb-2">
              <Image
                src={logo}
                alt="LuminaBooks"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-black text-slate-800">Welcome Back</h1>
            <p className="text-slate-500 text-sm">
              Please enter your details to sign in
            </p>
          </CardHeader>

          <div className="py-8 px-8">
            <form className="space-y-6" onSubmit={handleSubmit(onLogin)}>
              {/* Email Input using Controller */}
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    labelPlacement="outside"
                    variant="bordered"
                    className="w-full"
                    radius="lg"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                    startContent={<Mail className="text-slate-400 w-5 h-5 flex-shrink-0" />}
                  />
                )}
              />

              {/* Password Input using Controller */}
              <Controller
                name="password"
                control={control}
                rules={{ 
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters" }
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Password"
                    className="w-full"
                    placeholder="Enter your password"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="lg"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password?.message}
                    type={isVisible ? "text" : "password"}
                    startContent={<Lock className="text-slate-400 w-5 h-5 flex-shrink-0" />}
                    endContent={
                      <button
                        className="focus:outline-none flex items-center justify-center text-slate-400"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    }
                  />
                )}
              />

              <Button
                type="submit"
                fullWidth
                size="lg"
                isLoading={isLoading}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-200 h-14 rounded-2xl transition-all active:scale-[0.98]"
              >
                Sign In
              </Button>
              
              <p className="text-center  border-2 border-t-gray-300 border-b-gray-200">or</p>

                 <Button
               onClick={hendelGoogle}
                fullWidth
                size="lg"
                variant="outline"
                isLoading={isLoading}
                className=" text-black font-bold shadow-lg shadow-indigo-200  rounded-2xl transition-all active:scale-[0.98]"
              > <GrGoogle></GrGoogle>
                Log In with Google
              </Button>


              <p className="text-center text-sm font-medium text-slate-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-indigo-600 font-bold hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </Card>

        <p className="text-center mt-10 text-slate-400 text-xs font-medium uppercase tracking-widest">
          &copy; 2026 LuminaBooks Platform
        </p>
      </div>
    </div>
  );
};

export default LoginPage;