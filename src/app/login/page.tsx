"use client";
import { useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { Mail, Lock, LogIn } from "lucide-react";
// import { useAuth } from "../../hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { login } = useAuth();

  // const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // try {
    // await login(email, password);
    // navigate(from, { replace: true });
    // } catch (err) {
    //   setError(`Invalid email or password, ${err}`);
    // }
  };

  return (
    <div
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center pb-12 pt-24"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue to IdeaShare</p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-500">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 font-medium text-white transition-all hover:from-purple-600 hover:to-pink-600"
          >
            <LogIn className="h-5 w-5" />
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Do not have an account?
          <a href="/register" className="text-purple-400 hover:text-purple-300">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

// import { GalleryVerticalEnd } from "lucide-react";
// import { LoginForm } from "@/components/ui/loginForm";

// export default function LoginPage() {
//   return (
//     <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
//       <div className="flex w-full max-w-sm flex-col gap-6">
//         <a href="#" className="flex items-center gap-2 self-center font-medium">
//           <div className="text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md bg-primary">
//             <GalleryVerticalEnd className="size-4" />
//           </div>
//           Acme Inc.
//         </a>
//         <LoginForm />
//       </div>
//     </div>
//   );
// }

// const Login = () => {
//   return (
//     <section className="login-section container relative py-10">
//       <h1 className="mb-5 mt-14 text-2xl font-semibold">Login Page</h1>
//       {/* Add your login form here */}
//     </section>
//   );
// };

// export default Login;
