import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Game from "./pages/game/game";
import Header from "./components/asset/header";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:name" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
