import React from "react";

const UpdateKaryawan = ({
  saveUpdateKaryawan,
  handleChangeUpdate,
  newKaryawan,
  showModal,
  setShowModal,
  handleChangeFoto,
  karyawan,
  handleUpdateFoto,
}) => {
  return (
    <div>
      {showModal && (
        <div id="my_modal_1" className="modal modal-open">
          <div className="modal-box">
            <div class="flex flex-col justify-center">
              {/* nama */}
              <label class="form-control flex w-full max-w-md ">
                <div class="label ">
                  <span class="label-text text-gray-100">Nama</span>
                </div>
                <input
                  onChange={handleChangeUpdate}
                  name="nama"
                  value={newKaryawan.nama}
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
                  onChange={handleChangeUpdate}
                >
                  <option disabled selected>
                    Pilih Posisi
                  </option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </label>
              {/* no telepon */}
              <label class="form-control flex w-full max-w-md ">
                <div class="label ">
                  <span class="label-text text-gray-100">No Telp</span>
                </div>
                <input
                  onChange={handleChangeUpdate}
                  name="telepon"
                  value={newKaryawan.telepon}
                  type="text"
                  placeholder="Type here"
                  class="input input-sm input-bordered input-success bg-white max-w-lg text-gray-800"
                />
              </label>
              {/* email */}
              <label class="form-control flex w-full max-w-md ">
                <div class="label ">
                  <span class="label-text text-gray-100">No Telp</span>
                </div>
                <input
                  onChange={handleChangeUpdate}
                  name="email"
                  value={newKaryawan.email}
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
                  onChange={handleUpdateFoto}
                  name="foto"
                  alt={newKaryawan.nama}
                  type="file"
                  class="input input-sm input-bordered input-success bg-white max-w-lg text-gray-800"
                />
              </label>
            </div>
            <div className="flex justify-end gap-3 mt-1 p-2">
              <button
                class=" btn bg-transparent btn-sm hover:border hover:border-white text-gray-100 "
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                class="btn btn-success  btn-sm text-gray-100"
                onClick={() => saveUpdateKaryawan()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateKaryawan;
