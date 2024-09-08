import { toast } from "react-toastify";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase"; // Pastikan path import sesuai

export const saveUpdateKaryawan = async ({
  listKaryawan,
  update,
  newKaryawan,
  setListKaryawan,
  setNewKaryawan,
  setUpdate,
  setShowModal,
}) => {
  try {
    // Update data di Firestore
    const karyawanRef = doc(db, "karyawan-profile", listKaryawan[update].id);
    await updateDoc(karyawanRef, {
      nama: newKaryawan.nama,
      posisi: newKaryawan.posisi,
      telepon: newKaryawan.telepon,
      foto: newKaryawan.foto,
    });

    // Update list karyawan di state
    const data = [...listKaryawan];
    const updatedKaryawan = {
      ...data[update],
      nama: newKaryawan.nama,
      posisi: newKaryawan.posisi,
      telepon: newKaryawan.telepon,
      foto: newKaryawan.foto,
    };
    if (!updatedKaryawan.foto) {
      console.log("Foto tidak boleh null!"); // Tambahkan pengecekan untuk debugging
      return;
    }
    data[update] = updatedKaryawan;
    setListKaryawan(data);

    // Reset state
    setNewKaryawan({ nama: "", posisi: "All", telepon: "", foto: "" });
    setUpdate(null);
    setShowModal(false);

    // Tampilkan pesan sukses
    toast.success("Berhasil memperbarui data karyawan", {
      position: "top-center",
      autoClose: 2000,
    });
  } catch (error) {
    console.error("Error updating karyawan: ", error);
    toast.error("Gagal memperbarui data karyawan", {
      position: "top-center",
      autoClose: 2000,
    });
  }
};
