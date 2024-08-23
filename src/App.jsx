import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import FicheCard from "./Components/FicheCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<FicheCard />} />{" "}
      </Routes>
    </>
  );
}

export default App;
