import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../API/Api";

const UserDetails = () => {
  const addNewUsers = ()=>{}
  return (
    <div className="w-full md:w-[80%] lg:w-[50%]  mx-auto">
      {/* Admin table */}
      <div>
        <div className="flex items-center justify-between my-5">
          <div className="text-gray-500 font-semibold font-serif text-2xl">
            List of User Details 
          </div>
          <button onClick={()=>addNewUsers(fakeUserData())} className="px-5 py-2 rounded-[12px] text-white bg-linear-to-t from-sky-500 to-indigo-500">
            Add New Users
          </button>
        </div>
        <br />
        <ul>
          {/* <li>Hii</li>
        <li>Hyyyy</li> */}
        </ul>

        <hr className="text-gray-400" />
        <DeleteAllUser />
      </div>
    </div>
  );
};

export default UserDetails;
