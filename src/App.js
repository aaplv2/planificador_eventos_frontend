//módulos
import React from "react";
import { Route, Routes } from "react-router-dom";

//estilos
import "./App.css";

//componentes
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popout from "./components/Popout/Popout";
import { Button } from "./components/Button/Button";
import Preloader from "./components/Preloader/Preloader";
import Event from "./components/Event/Event";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/event" element={<Event />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <Popout />
      <Button />
      <Preloader />
    </div>
  );
}

export default App;
