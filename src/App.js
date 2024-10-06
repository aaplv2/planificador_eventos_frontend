//módulos
import React from "react";
import { Route, Routes } from "react-router-dom";

//estilos
import "./App.css";

//componentes
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Event from "./components/Event/Event";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/event" element={<Event />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
