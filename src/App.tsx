import Home from "./Home";
import Navbar2 from "./Navbar2";
import Info from "./Info";
import Footer from "./Footer";
import Mid from "./Mid";
import Register from "./Register";
import { useEffect } from "react";
import "./index.css"
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="cards">
      <div className="card">
        <Navbar2 />
        <Home />
        <Mid />
        <Info />
        <Register />
        <Footer />
      </div>
    </div>
  );
}

export default App;
