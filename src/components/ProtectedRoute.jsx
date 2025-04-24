import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../models/firebase";  // Pastikan path sesuai dengan lokasi file Firebase kamu

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Jika pengguna ada, set user
      } else {
        setUser(null); // Jika tidak ada pengguna, set null
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Membersihkan listener saat komponen di-unmount
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Menampilkan loading jika status autentikasi sedang diperiksa
  }

  if (!user) {
    return <Navigate to="/login" replace />;  // Redirect ke login jika tidak ada user
  }

  return children;
}
