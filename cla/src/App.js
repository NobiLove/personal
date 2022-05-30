import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import MainHeader from "./Components/MainHeader";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Computer from "./Pages/Computer";
import Contact from "./Pages/Contact";
import Laptop from "./Pages/Laptop";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <div className="main-layout inner_posituong computer_page">
        <Loader />
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Computer" element={<Computer />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Laptop" element={<Laptop />} />
          <Route path="/Product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
