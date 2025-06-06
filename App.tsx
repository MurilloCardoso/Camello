import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Game from "./pages/game/game";
import Layout from "./components/layouts/layout-home";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:name" element={<Game />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
