// import { Link, useLocation, useNavigate } from "react-router-dom";
import { Lightbulb, Menu } from "lucide-react";
import Link from "next/link";
// import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  //   const { user, logout } = useAuth();

  //   const handleLogout = () => {
  //     logout();
  //     navigate("/", { replace: true });
  //   };

  return (
    <>
      <nav className="fixed z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex flex-shrink-0 items-center">
              <Lightbulb className="h-8 w-8 text-purple-500" />
              <span className="ml-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-xl font-bold text-transparent">
                IdeaShare
              </span>
            </Link>

            <div className="hidden items-center space-x-8 md:flex">
              <Link
                href="/discover"
                className="font-bold text-white"
                // className={`${
                //   location.pathname === "/discover"
                //     ? "font-bold text-white"
                //     : "font-bold text-gray-300"
                // } transition-colors hover:text-white`}
              >
                DISCOVER
              </Link>
              <Link
                href="/share"
                className="font-bold text-white"
                // className={`${
                //   location.pathname === "/share"
                //     ? "font-bold text-white"
                //     : "font-bold text-gray-300"
                // } transition-colors hover:text-white`}
              >
                SHARE
              </Link>
            </div>

            <div className="hidden items-center space-x-4 md:flex">
              {/* {user?._id ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-all"
                  >
                    Logout
                  </button>

                  <p className="text-white text-sm border-2 rounded-full w-10 h-10 p-2 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
                    {user?.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </p>
                </>
              ) : ( */}
              <>
                <Link
                  href="/login"
                  className="rounded-lg bg-white/10 px-4 py-2 text-white transition-all hover:bg-white/20"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white transition-all hover:from-purple-600 hover:to-pink-600"
                >
                  Register
                </Link>
              </>
              {/* )}
              {user?.role === "Admin" && (
                <Link
                  href="/role-change"
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10"
                >
                  Admin
                </Link>
              )} */}
            </div>

            <div className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
