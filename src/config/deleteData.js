import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export const deleteDataKaryawan = async (id) => {
  try {
    const karyawanDoc = doc(db, "karyawan-profile", id);
    await deleteDoc(karyawanDoc);
    console.log("Karyawan berhasil dihapus");
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};
