import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { user, login, error, setError, providerLogin } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const googleProvider = new GoogleAuthProvider();
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
  const [token] = useToken(loggedInUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log("login component render");
  if (token) navigate(from, { replace: true });
  const handleLogin = (data) => {
    setError("");
    console.log(data);
    login(data.email, data.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        setLoggedInUserEmail(data?.email);
      })
      .catch((err) => {
        console.error("Error", err);
        setError(err.message);
      });
  };

  const googleLogIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error("Error", err));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-96 p-6 my-16 bg-base-100 shadow-xl">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} className="mt-9">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email must be required" })}
              type="email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <span role="alert" className="text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="form-control w-full mt-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password must be required",
                minLength: {
                  value: 6,
                  message: "Password must be longet then 6 charecter",
                },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text-alt">Lost Password ?</span>
            </label>
            {errors.password && (
              <span role="alert" className="text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="submit"
            className="btn btn-accent w-full mt-8"
            value="Login"
          />
        </form>
        <p className="mt-3">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-secondary">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={googleLogIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
