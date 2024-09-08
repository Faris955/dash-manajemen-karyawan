import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";

const ListKaryawan = ({
  deleteProfileKaryawan,
  editProfileKaryawan,
  filteredPosisi,
}) => {
  return (
    <div className="flex mt-2 bg-white rounded-2xl p-3">
      {/* kanan */}
      <div className="flex text-md flex-col py-2 justify-center w-full">
        <div className="flex justify-center flex-1 gap-3">
          {filteredPosisi.map((karyawans, index) => {
            return (
              <>
                <div className="flex text-sm justify-center rounded-lg w-44 shadow-xl px-1 py-2  bg-slate-300">
                  <figure className="flex flex-col gap-2 justify-start">
                    <div class="avatar flex justify-center">
                      <div class="w-24 rounded-full">
                        <img src={karyawans.foto} />
                      </div>
                    </div>
                    <div className="bg-slate-100 rounded-lg py-1 px-2">
                      <div className=" text-start bg-slate-100">
                        <h2>
                          <strong>{karyawans.nama} </strong>
                        </h2>
                        <h2 className="text-gray-400">{karyawans.posisi}</h2>
                        <h2>{karyawans.telepon}</h2>
                        <h2>{karyawans.email}</h2>
                      </div>
                      <div className="mt-2 justify-end flex gap-1 w-full">
                        <button
                          onClick={() => deleteProfileKaryawan(index)}
                          class="btn-sm hover:bg-red-600 text-red-600 hover:text-gray-200 rounded-lg transition-all"
                        >
                          <MdDelete className="text-xl" />
                        </button>

                        <button
                          onClick={() => editProfileKaryawan(index)}
                          class="btn-sm text-gray-800 hover:bg-base-100 hover:text-gray-200 rounded-lg transition-all"
                        >
                          <FaEdit />
                        </button>
                      </div>
                    </div>
                  </figure>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListKaryawan;
