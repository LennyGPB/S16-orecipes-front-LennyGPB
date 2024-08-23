//import { useState } from "react";
import Navbar from "./header/Navigation";
import Login from "./header/Login";
import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Card />
    </>
  );
}

export default App;
