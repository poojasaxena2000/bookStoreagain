import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear auth context
      setAuthUser(undefined);

      // Remove from localStorage
      localStorage.removeItem("Users");

      toast.success("Logout Successfully");

    //    document.getElementById("my_modal_3").close();
    

        setTimeout(()=>{

              window.location.reload();
         
       
        //   localStorage.setItem("Users", JSON.stringify(res.data.user))

        },3000)

      // Reload page (optional)
    //   window.location.reload();
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(()=> {},3000)
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
