import React from "react";
import "./App.css";

//components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="body">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
