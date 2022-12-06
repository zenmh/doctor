import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://doctor-server-nu.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const makeHost = (id) => {
    fetch(`https://doctor-server-nu.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.info("Role Host Permitted", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          refetch();
        }
      })
      .catch((err) => console.error("Error", err));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "Host" ? (
                    "Host"
                  ) : (
                    <button
                      onClick={() => makeHost(user?._id)}
                      className="btn btn-xs btn-accent"
                    >
                      Make Host
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-accent">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
