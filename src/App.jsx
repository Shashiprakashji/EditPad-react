import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { createBrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        Title="textUtils1"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm
          heading="Enter your Text"
          mode={mode}
          showAlert={showAlert}
        ></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
