import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../Shared/Modals/ConfirmationModal";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("https://doctor-server-nu.vercel.app/doctors", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (err) {
        console.error("Error", err);
      }
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(`https://doctor-server-nu.vercel.app/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.info(`Doctor ${doctor?.name} deleted !`, {
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
      });
  };

  if (isLoading) {
    return <progress className="progress w-full mt-20"></progress>;
  }

  return (
    <div>
      <h3 className="text-3xl">Manage Doctors</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, idx) => (
              <tr key={doctor._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={doctor?.image} alt="doctor" />
                    </div>
                  </div>
                </td>
                <td>{doctor?.name}</td>
                <td>{doctor?.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeleteDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmationModal
          title={`Are you want to delete ${deleteDoctor?.name}`}
          info="If deleted once then you can't recover never and ever ! So, Think again."
          actionBtnName="Delete"
          action={handleDeleteDoctor}
          modalData={deleteDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
