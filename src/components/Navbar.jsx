import React from "react";
import { FiLogOut } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const Navbar = ({ karyawan, isLogin }) => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <h1 className="text-3xl text-start font-bold">Wellcome !!</h1>
        </div>
        <div className="flex-none gap-3">
          <div className="form-control flex flex-row items-center px-2 bg-white rounded-xl ">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none input border-none input-sm input-bordered w-24 md:w-auto bg-white hover:border-none hover:ring-0"
            />
            <IoSearch className="text-2xl" />
          </div>
          <div className="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
