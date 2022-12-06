import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const ErrorPage = () => {
  const error = useRouteError();
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">
        Something went Wrong !!!!
      </h2>
      <h2 className="text-2xl font-bold text-center">
        {error.statusText || error.message}
      </h2>
      <p className="text-xl font-bold text-center">
        Please{" "}
        <Link to="/login" onClick={logout}>
          Logout
        </Link>{" "}
        and Log back in
      </p>
    </div>
  );
};

export default ErrorPage;
