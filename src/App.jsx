import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forsikringer from "./pages/Forsikringer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forsikringer" element={<Forsikringer />} />
      </Routes>
    </BrowserRouter>
  );
}
