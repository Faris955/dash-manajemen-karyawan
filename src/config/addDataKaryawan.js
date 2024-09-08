import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Pastikan path import sesuai

export const addDataKaryawan = async (karyawan) => {
  try {
    // Mendapatkan referensi koleksi 'karyawan-profile'
    const karyawanCol = collection(db, "karyawan-profile");

    // Menambahkan dokumen ke koleksi dan mendapatkan referensi dokumen
    const docRef = await addDoc(karyawanCol, karyawan);

    // Mendapatkan ID dari dokumen yang baru ditambahkan
    console.log("Karyawan berhasil ditambahkan dengan ID: ", docRef.id);

    // Mengembalikan ID dokumen
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
