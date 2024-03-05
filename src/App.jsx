import "./App.css";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect } from "react";

// redux

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./store/slices/userSlice";

// firebase
import { auth, onAuthStateChanged } from "./firebase/firebase";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

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
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth, dispatch]);

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
