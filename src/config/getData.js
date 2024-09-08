import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Pastikan path import sesuai

export async function getKaryawan() {
  try {
    // Ambil referensi koleksi 'karyawan'
    const karyawanCol = collection(db, "karyawan-profile");
    // Ambil snapshot dari koleksi tersebut
    const karyawanSnapshot = await getDocs(karyawanCol);
    // Peta data snapshot ke dalam format yang diinginkan
    const karyawanList = karyawanSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id, // Tambahkan ID dokumen ke data
    }));
    console.log(karyawanList); // Log data untuk debugging
    console.log("database berhasil");
    return karyawanList;
  } catch (error) {
    console.error("Error getting documents: ", error);
    // Tangani error sesuai kebutuhan
    // Misalnya, tampilkan pesan error kepada pengguna
    throw error;
  }
}
