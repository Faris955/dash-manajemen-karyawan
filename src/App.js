import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import AddKaryawan from "./components/AddKaryawan";
import Dashboard from "./components/Dashboard";
import UpdateKaryawan from "./components/UpdateKaryawan";
import { addDataKaryawan } from "./config/addDataKaryawan";
import { deleteDataKaryawan } from "./config/deleteData";
import { db } from "./config/firebase";

function App() {
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "karyawan-profile"),
      (snapshot) => {
        const karyawanList = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setListKaryawan(karyawanList);
      },
      (error) => {
        console.error("Error fetching karyawan: ", error);
        setError(error);
      }
    );

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  const [karyawan, setKaryawan] = useState({
    id: "",
    nama: "",
    posisi: "",
    telepon: "",
    email: "",
    foto: "",
  });
  const [listKaryawan, setListKaryawan] = useState([]);
  const [newKaryawan, setNewKaryawan] = useState({
    id: "",
    nama: "",
    posisi: "",
    telepon: "",
    email: "",
    foto: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showAddKaryawan, setShowAddKaryawan] = useState(false);
  const [update, setUpdate] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [selectedPosisi, setSelectedPosisi] = useState("All");
  const [Posisi] = useState(["All", "HR", "IT", "Marketing"]);
  const [isAdding, setIsAdding] = useState(false);

  // handle input foto
  const handleChangeFoto = (e) => {
    console.log("add");
    const file = e.target.files[0]; // Ambil file yang diunggah
    const reader = new FileReader(); // Gunakan FileReader untuk membaca file
    reader.onloadend = () => {
      setKaryawan({ ...karyawan, foto: reader.result }); // Simpan base64 URL di state
    };
    // Periksa apakah kita dalam mode add atau update
    if (file) {
      reader.readAsDataURL(file); // Konversi file ke URL base64
    }
  };
  const handleUpdateFoto = (e) => {
    console.log("update");
    const file = e.target.files[0]; // Ambil file yang diunggah
    const reader = new FileReader(); // Gunakan FileReader untuk membaca file
    reader.onloadend = () => {
      setNewKaryawan({ ...newKaryawan, foto: reader.result }); // Simpan base64 URL di state
    };
    // Periksa apakah kita dalam mode add atau update
    if (file) {
      reader.readAsDataURL(file); // Konversi file ke URL base64
    }
  };

  // ambil inputan user
  const handleChangeAdd = (e) => {
    const data = { ...karyawan };
    data[e.target.name] = e.target.value;
    setKaryawan(data);
    setIsAdding(true);
  };
  // add
  const addProfileKaryawan = async () => {
    const data = { ...karyawan, status: false };
    if (
      karyawan.nama === "" ||
      karyawan.posisi === "" ||
      karyawan.telepon === "" ||
      karyawan.email === "" ||
      karyawan.foto === ""
    ) {
      console.log("error");
      toast.error("Tidak boleh kosong", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    try {
      // tambahkan ke firestore
      const newId = await addDataKaryawan(data);

      // tambah id ke data karyawan
      const dataWithId = { ...data, id: newId };

      setListKaryawan([dataWithId, ...listKaryawan]);
      setKaryawan({ nama: "", posisi: "", telepon: "", foto: "", email: "" });
      setIsLogin(true);
      setShowAddKaryawan(false);
      toast.success("Success Add Data", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error adding karyawan: ", error);
      toast.error("Failed Add Data", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  // delete
  const deleteProfileKaryawan = (index) => {
    const idToDelete = listKaryawan[index].id; // Ambil ID dari karyawan berdasarkan index
    deleteDataKaryawan(idToDelete); // Panggil fungsi penghapusan
  };

  const handleChangeUpdate = (e) => {
    const data = { ...newKaryawan };
    data[e.target.name] = e.target.value;
    setNewKaryawan(data);
    setIsAdding(false);
    console.log(data);
  };
  const editProfileKaryawan = (index) => {
    // simpan index mana yg akan diedit
    setUpdate(index);
    const data = listKaryawan[index];
    setNewKaryawan({ ...data });
    setShowModal(true);
  };
  const saveUpdateKaryawan = async () => {
    try {
      const updatedKaryawan = {
        ...newKaryawan,
        nama: newKaryawan.nama,
        posisi: newKaryawan.posisi,
        telepon: newKaryawan.telepon,
        email: newKaryawan.email,
        foto: newKaryawan.foto, // Pastikan foto tidak null
      };

      const karyawanRef = doc(db, "karyawan-profile", updatedKaryawan.id); // Pastikan ID benar
      await updateDoc(karyawanRef, updatedKaryawan); // Update di Firestore

      const data = listKaryawan.map((karyawan) =>
        karyawan.id === updatedKaryawan.id ? updatedKaryawan : karyawan
      );
      setListKaryawan(data);
      setNewKaryawan({
        nama: "",
        posisi: "All",
        telepon: "",
        email: "",
        foto: "",
      });
      setUpdate(null);
      setShowModal(false);
      toast.success("Data berhasil diperbarui", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error memperbarui karyawan: ", error);
      toast.error("Gagal memperbarui karyawan", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  // filter berdasarkan posisi
  const filteredPosisi =
    selectedPosisi === "All"
      ? listKaryawan
      : listKaryawan.filter((karyawan) => karyawan.posisi === selectedPosisi);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="App font-poppins">
      <ToastContainer />
      <Dashboard
        listKaryawan={listKaryawan}
        deleteProfileKaryawan={deleteProfileKaryawan}
        editProfileKaryawan={editProfileKaryawan}
        // ke dashboard kemudian ke navbar
        karyawan={karyawan}
        isLogin={isLogin}
        addProfileKaryawan={addProfileKaryawan}
        handleChangeAdd={handleChangeAdd}
        showAddKaryawan={showAddKaryawan}
        setShowAddKaryawan={setShowAddKaryawan}
        showModal={showModal}
        setShowModal={setShowModal}
        Posisi={Posisi}
        filteredPosisi={filteredPosisi}
        setSelectedPosisi={setSelectedPosisi}
      />
      {/* <ListKaryawan
        listKaryawan={listKaryawan}
        deleteProfileKaryawan={deleteProfileKaryawan}
        editProfileKaryawan={editProfileKaryawan}
        // ke dashboard kemudian ke navbar
        karyawan={karyawan}
        isLogin={isLogin}
      /> */}

      <AddKaryawan
        addProfileKaryawan={addProfileKaryawan}
        handleChangeAdd={handleChangeAdd}
        karyawan={karyawan}
        showAddKaryawan={showAddKaryawan}
        setShowAddKaryawan={setShowAddKaryawan}
        handleChangeFoto={handleChangeFoto}
      />

      <UpdateKaryawan
        handleChangeUpdate={handleChangeUpdate}
        newKaryawan={newKaryawan}
        showModal={showModal}
        setShowModal={setShowModal}
        saveUpdateKaryawan={saveUpdateKaryawan}
        handleChangeFoto={handleChangeFoto}
        karyawan={karyawan}
        handleUpdateFoto={handleUpdateFoto}
      />
    </div>
  );
}

export default App;
