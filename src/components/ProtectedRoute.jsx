import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../models/firebase";  
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUserLocal] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUserLocal(currentUser);
        
        // Update Redux state dengan user minimal saja
        dispatch(setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName || "",
          photoURL: currentUser.photoURL || "",
        }));
      } else {
        setUserLocal(null);
        dispatch(setUser(null)); // Clear Redux user state saat logout
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
