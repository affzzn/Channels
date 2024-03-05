import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAUj2PBEziCw1tP6FoKcGeuiXdACEA4pIY",
//   authDomain: "chatz-36c5f.firebaseapp.com",
//   projectId: "chatz-36c5f",
//   storageBucket: "chatz-36c5f.appspot.com",
//   messagingSenderId: "520190015924",
//   appId: "1:520190015924:web:09b628857b45c992fa5ae1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
