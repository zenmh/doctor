import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const { signUp, updateUser, error, setError, providerLogin } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const googleProvider = new GoogleAuthProvider();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) navigate("/");

  const handleSignUp = (data) => {
    setError("");
    console.log(data);
    signUp(data.email, data.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        updateUser({ displayName: data.name })
          .then(() => {
            saveUserToDB(data?.name, data?.email);
          })
          .catch((err) => console.error("Error", err));
        toast.info("Sign Up Successfully", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        console.error("Error", err);
        setError(err.message);
      });
  };

  const saveUserToDB = (name, email) => {
    const user = { name, email };
    fetch("https://doctor-server-nu.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      })
      .catch((err) => console.error("Error", err));
  };

  const googleLogIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error("Error", err));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-96 p-6 my-16 bg-base-100 shadow-xl">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)} className="mt-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name must be required",
              })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email must be required",
              })}
              type="email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
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
                  value: 8,
                  message: "Must be longer then 8 charecter",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                  message: "Password must be strong !",
                },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="submit"
            className="btn btn-accent w-full mt-8"
            value="Sign Up"
          />
        </form>
        <p className="mt-3">
          Have an accoutn to{" "}
          <Link to="/login" className="text-secondary">
            Login
          </Link>
        </p>
        <div className="divider">Or</div>
        <button onClick={googleLogIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
