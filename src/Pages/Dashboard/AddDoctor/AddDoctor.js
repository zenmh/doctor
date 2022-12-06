import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["treatmentsSpecialties"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-server-nu.vercel.app/treatmentsSpecialties"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formdata = new FormData();
    formdata.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB_Key}`,
      {
        method: "POST",
        body: formdata,
      }
    )
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageData.data.url,
          };
          fetch("https://doctor-server-nu.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((dt) => {
              if (dt.acknowledged) {
                toast.success(`${data.name} is Sign as a Doctor`, {
                  position: "top-center",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
                navigate("/dashboard/manage-doctors");
              }
            })
            .catch((err) => console.error("Error", err));
        }
      });
  };

  if (isLoading) {
    return "loading...";
  }

  return (
    <div className="w-96 p-6">
      <h2 className="text-2xl font-bold">Add Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)} className="mt-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: "Name must be required",
            })}
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
            placeholder="Enter Yout E-mail"
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id}>{specialty.name}</option>
            ))}
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            {...register("image", {
              required: "Image must be required",
            })}
            type="file"
            className="input input-bordered w-full"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        <input
          type="submit"
          className="btn btn-accent w-full mt-8"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
