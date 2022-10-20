import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style/style.css";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
