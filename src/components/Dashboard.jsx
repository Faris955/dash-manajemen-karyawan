import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaRegCalendarCheck, FaRegClock } from "react-icons/fa6";
import { IoPeopleOutline, IoPersonAddOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";
import ListKaryawan from "./ListKaryawan";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Dashboard = ({
  listKaryawan,
  deleteProfileKaryawan,
  editProfileKaryawan,
  karyawan,
  isLogin,
  setShowAddKaryawan,
  Posisi,
  filteredPosisi,
  setSelectedPosisi,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white text-inherit transform ${
          isOpen ? "translate-x-0 z-10" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <div className="py-5">
            <h2 className="text-4xl font-bold">Dash</h2>
          </div>
          <nav className="mt-4">
            <ul>
              <li className="mt-6">
                <a
                  href="#"
                  className="flex justify-start items-center gap-2 py-2 px-4 rounded-xl hover:bg-base-100 hover:text-gray-200 transition-all"
                >
                  <LuLayoutDashboard />
                  Dashboard
                </a>
              </li>
              <li className="mt-6">
                <a
                  href="#"
                  className="flex justify-start items-center gap-2 py-2 px-4 rounded-xl bg-base-100 text-gray-200 transition-all"
                >
                  <IoPeopleOutline />
                  Karyawan
                </a>
              </li>
              <li className="mt-6">
                <a
                  href="#"
                  className="flex justify-start items-center gap-2 py-2 px-4 rounded-xl hover:bg-base-100 hover:text-gray-200 transition-all"
                >
                  <FaRegClock />
                  Absensi
                </a>
              </li>
              <li className="mt-6">
                <a
                  href="#"
                  className="flex justify-start align-middle items-center py-1 gap-2 py-2 px-4 rounded-xl hover:bg-base-100 hover:text-gray-200 transition-all"
                >
                  <FaRegCalendarCheck />
                  Cuti/Izin
                </a>
              </li>
              <li className="mt-6">
                <a
                  href="#"
                  className="flex justify-start items-center gap-2 py-2 px-4 rounded-xl hover:bg-base-100 hover:text-gray-200 transition-all"
                >
                  <MdOutlineLogout />
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:ml-64">
        <div className="md:hidden flex justify-between items-center bg-gray-800 text-white p-4 rounded-xl">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-2">
          <Navbar karyawan={karyawan} isLogin={isLogin} />
          <div className="flex justify-between text-sm bg-white p-3 rounded-2xl items-center">
            <div>
              <h3 className="text-lg">32 Karyawan</h3>
            </div>
            <div className="flex gap-5 items-center">
              <div className="form-control flex items-center">
                <select
                  onChange={(e) => setSelectedPosisi(e.target.value)}
                  className="select select-sm rounded-xl select-ghost bg-inherit w-full max-w-xs hover:bg-base-100 hover:text-gray-300 transition-all "
                >
                  <option disabled selected>
                    <CiFilter className="inline-block text-2xl" />
                    Filter
                  </option>
                  {Posisi.map((posisis, index) => {
                    return (
                      <option key={index} value={posisis}>
                        {posisis}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <button
                  className="btn btn-sm rounded-xl bg-inherit text-gray-800 hover:text-gray-200"
                  onClick={() => setShowAddKaryawan(true)}
                >
                  <IoPersonAddOutline />
                  Add
                </button>
              </div>
            </div>
          </div>
          <ListKaryawan
            listKaryawan={listKaryawan}
            deleteProfileKaryawan={deleteProfileKaryawan}
            editProfileKaryawan={editProfileKaryawan}
            // ke dashboard kemudian ke navbar
            karyawan={karyawan}
            isLogin={isLogin}
            filteredPosisi={filteredPosisi}
          />
          <p className="text-2xl font-medium mt-20">Maintenance</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
