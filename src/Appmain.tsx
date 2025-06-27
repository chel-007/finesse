import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import About from "./pages/About";

function Appmain() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/admin" element={<FireCMSApp />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Appmain;