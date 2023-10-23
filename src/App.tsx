import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Home from './Home';
import Navbar2 from './Navbar2';
import Info from './Info';
import Footer from './Footer';
import Mid from './Mid';
import Register from './Register';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }
    // , []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      {/* <Loader loading={loading} /> */}

      {/* {(!loading) && ( */}
      {1 && (
        <>
          <Navbar2 />
          <Home />
          <Mid />
          <Info />
          <Register />
          <Footer />
        </>
      )}

    </>
  );
}

export default App;
