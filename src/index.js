import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/Login"
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/general.css"

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBar color="white"/>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Footer color="white"/>
    </BrowserRouter>
  </React.StrictMode>
);