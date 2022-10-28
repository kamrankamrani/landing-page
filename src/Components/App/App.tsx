import { BrowserRouter } from "react-router-dom";
import Header from "../_Home/Header/Header";
import Footer from "../_Home/Footer/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}
