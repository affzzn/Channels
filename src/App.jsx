import React, { useEffect, useState } from "react";
// Other imports remain unchanged
import "./App.css";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
// import { useEffect } from "react";

// // redux

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./store/slices/userSlice";

// // firebase
import { auth, onAuthStateChanged } from "./firebase/firebase";

//mui
import CircularProgress from "@mui/material/CircularProgress";
import { CenterFocusStrong } from "@mui/icons-material";
//
//
//
function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  // Loading state to track the auth state check
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);
      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // The user is logged out
        dispatch(logout());
      }
      // Set loading to false once we have our user state
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  // Render a loading message or spinner while checking user auth state
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    ); // Or any loading spinner component
  }

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar /> <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
