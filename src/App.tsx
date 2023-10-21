import Home from "./Home";
import Navbar2 from "./Navbar2";
import Info from "./Info";
import Footer from "./Footer";
import Mid from "./Mid";
import Register from "./Register";
import { useEffect } from "react";
function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar2 />
      <Home />
      <Mid />
      <Info />
      <Register />
      <Footer />
    </>
  );
}

export default App;
