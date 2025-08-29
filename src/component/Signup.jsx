import React from 'react';
import axios from "axios"
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const Signup = () => {
  
  const location=useLocation();
  const navigate=useNavigate()
  const from =location.state?.from?.pathname || "/"
   
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }

    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        // alert("Signup Sccessfull")

           toast.success("Signup Sccessfull");

          navigate(from,{replace:true});
      }
      //  set the data in local storage

      localStorage.setItem("Users", JSON.stringify(res.data.user))


    }).catch((err)=>{

      // console.log(err)
      if(err.response){
        console.log(err);
        // alert ("Error :" +err.response.data.message)
           toast.error("Error :" +err.response.data.message);
        
      }
    })
    // console.log(data)
   
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="relative border shadow-md p-5 rounded-md w-[450px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name Field */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('fullname', { required: true })}
              />
              {errors.fullname && <span className="text-sm text-red-500">Name is required</span>}
            </div>

            {/* Email Field */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">Email is required</span>}
            </div>

            {/* Password Field */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('password', { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">Password is required</span>}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>

              <button type="button">
                Have account?{' '}
                <span
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => {
                    const modal = document.getElementById('my_modal_3');
                    if (modal) modal.showModal();
                  }}
                >
                  Login
                </span>
              </button>
            </div>
          </form>

          {/* Login Modal */}
          <Login />
        </div>
      </div>
    </>
  );
};

export default Signup;
