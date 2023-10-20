// Navbar.js

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop !== isScrolled) {
        setIsScrolled(isTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  function goHome() {
    const home = document.getElementById("root"); // Change 'targetElement' to the actual ID of your target element

    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false); // Close the menu on click
    }
  }

  function goRegister() {
    const register = document.getElementById("snapRegister"); // Change 'targetElement' to the actual ID of your target element

    if (register) {
      register.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false); // Close the menu on click
    }
  }

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full flex items-center justify-around h-0 fixed top-60 bg-black z-100 navbarnew"
      >
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      
        <motion.div variants={reveal} className={styles.logo}>
          <img
            src="https://i.ibb.co/51r60WH/logo.png"
            alt="logo"
            className={styles.logoImage}
          />
        </motion.div>
        <div className={styles.hamburger} onClick={handleMenuClick}>
        {showMenu ? "" : "☰"}
        {/* ☰ */}
        </div>
        <ul
          className={`${styles.navItems} ${showMenu ? styles.active : ""}`}
        > 
        <div className={styles.hamburger} onClick={handleMenuClick}>
        ✕
        </div>
          <li className={`${styles.navItem} ${isScrolled ? styles.none : ""}`} onClick={goHome}>
            Home
          </li>
          <li className={styles.navItem} onClick={goRegister}>
            Register
          </li>
          <li className={`${styles.navItem} ${isScrolled ? styles.none : ""}`}>
            <a
              href="https://www.wcewlug.org/"
              target="_blank"
              rel="noreferrer"
            >

              About Us
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>
    </motion.div>
  );
};

export default Navbar;
