import React from "react";

const AddKaryawan = ({
  handleChangeAdd,
  karyawan,
  setShowModal,
  addProfileKaryawan,
  showModal,
  showAddKaryawan,
  setShowAddKaryawan,
  handleChangeFoto,
}) => {
  return (
    <div>
      {showAddKaryawan && (
        <div id="my_modal_1" className="modal modal-open">
          <div className="modal-box">
            <div class="flex flex-col justify-center">
              {/* nama */}
              <label class="form-control flex w-full max-w-md ">
                <div class="label ">
                  <span class="label-text text-gray-100">Nama</span>
                </div>
                <input
                  onChange={handleChangeAdd}
                  name="nama"
                  value={karyawan.nama}
                  type="text"
                  placeholder="Type here"
                  class="input input-sm input-bordered input-success bg-white max-w-lg text-gray-800"
                />
              </label>
              {/* posisi */}
              <label class="form-control flex w-full max-w-md ">
                <div class="label ">
                  <span class="label-text text-gray-100">Posisi</span>
                </div>
                <select
                  id="position"
                  className="select select-bordered w-full max-w-lg bg-white"
                  name="posisi"
                  onChange={handleChangeAdd}
                >
                  <option disabled selected>
                    Pilih Posisi
                  </option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </label>
              {/* telepon */}
              <label class="form-control flex w-full max-w-md ">
                <div class="label ">
                  <span class="label-text text-gray-100">No Telp</span>
                </div>
                <input
                  onChange={handleChangeAdd}
                  name="telepon"
                  value={karyawan.telepon}
                  type="text"
                  placeholder="Type here"
                  class="input input-sm input-bordered input-success bg-white max-w-lg text-gray-800"
                />
              </label>
              {/* email */}
              <label class="form-control flex w-full max-w-md ">
                <div class="label ">
                  <span class="label-text text-gray-100">Email</span>
                </div>
                <input
                  onChange={handleChangeAdd}
                  name="email"
                  value={karyawan.email}
                  type="email"
                  placeholder="Type here"
                  class="input input-sm input-bordered input-success bg-white max-w-lg text-gray-800"
                />
              </label>
              {/* foto */}
              <label class="form-control flex w-full max-w-md ">
                <div class="label ">
                  <span class="label-text text-gray-100">Foto</span>
                </div>
                <input
                  onChange={handleChangeFoto}
                  name="foto"
                  alt={karyawan.nama}
                  type="file"
                  class="input input-sm input-bordered input-success bg-white max-w-lg text-gray-800"
                />
              </label>
            </div>
            <div className="flex justify-end gap-3 mt-1 py-2 px-4">
              <button
                onClick={() => setShowAddKaryawan(false)}
                class=" btn bg-transparent btn-sm hover:border hover:border-white text-gray-100 "
              >
                Close
              </button>
              <button
                onClick={() => addProfileKaryawan()}
                class="btn btn-success  btn-sm text-gray-100"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddKaryawan;
