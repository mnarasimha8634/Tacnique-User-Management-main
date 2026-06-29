import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "Admin" && password === "admin@123") {
      sessionStorage.setItem("isAuthenticated", "true");

      const destination = location.state?.from?.pathname || "/";
      navigate(destination, {
        replace: true,
        state: { loginSuccessful: true },
      });
      return;
    }

    setError("Invalid username or password.");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const inputClass =
    "rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 transition duration-200 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-100";

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-8">
      <section className="grid w-full max-w-[900px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl md:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col justify-between bg-slate-950 p-8 text-white max-md:gap-10">
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-teal-300">Admin Console</p>
            <h1 className="text-[34px] font-bold leading-tight max-[576px]:text-[28px]">
              User Management Dashboard
            </h1>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Sign in to manage users, departments, filters, and local dashboard records.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
            <p className="mb-2 font-semibold text-white">Demo credentials</p>
            <p>Username: Admin</p>
            <p>Password: admin@123</p>
          </div>
        </div>

        <div className="p-8 max-[576px]:p-6">
          <h2 className="mb-2 text-2xl font-bold text-slate-950">Welcome back</h2>
          <p className="mb-7 text-sm text-slate-500">Enter your admin credentials to continue.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-5 flex flex-col">
              <label
                className="mb-2 text-sm font-semibold text-slate-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                className={inputClass}
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter username"
                autoComplete="username"
                autoFocus
              />
            </div>

            <div className="mb-5 flex flex-col">
              <label
                className="mb-2 text-sm font-semibold text-slate-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className={inputClass}
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p
                className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                role="alert"
              >
                {error}
              </p>
            )}

            <button
              className="w-full cursor-pointer rounded-lg border border-teal-700 bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-teal-800 active:scale-[.98]"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
