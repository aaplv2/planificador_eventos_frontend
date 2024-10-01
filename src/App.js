//módulos
import React from "react";

//estilos
import "./App.css";

//components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popout from "./components/Popout/Popout";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import EventCard from "./components/EventCard/EventCard";
import Spreadsheet from "./components/Spreadsheet/Spreadsheet";
import Calendar from "./components/Calendar/Calendar";
import Map from "./components/Map/Map";
import Form from "./components/Form/Form";
import Preloader from "./components/Preloader/Preloader";

function App() {
  return (
    <div className="body">
      <Header></Header>
      <Main>
        <EventCard></EventCard>
        <Spreadsheet></Spreadsheet>
        <Calendar></Calendar>
        <Map></Map>
      </Main>
      <Footer></Footer>
      <Popout></Popout>
      <Input></Input>
      <Button></Button>
      <Form></Form>
      <Preloader></Preloader>
    </div>
  );
}

export default App;
