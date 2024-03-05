import React from "react";
import "./Login.css";

import { Button } from "@mui/material";

// Import Firebase
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function Login() {
  const signIn = async () => {
    try {
      // Configure the provider as GoogleAuthProvider
      const googleProvider = new GoogleAuthProvider();

      // Use signInWithPopup method with the configured provider
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <h1>Login ?</h1>

      <Button variant="contained" onClick={signIn}>
        Login
      </Button>
    </div>
  );
}

export default Login;
