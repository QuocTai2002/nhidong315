import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from "./Componens/Headers/Headers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Headers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
