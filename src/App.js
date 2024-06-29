import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";
import SingleCourse from "./pages/SingleCourse";
import Register from "./components/auth/Register";
import Login from "./components/auth/login";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import MyCourses from "./components/MyCourses/MyCourses";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const [scrolled, setScrolled] = useState(false);
  const [infoScroll, setInfoScroll] = useState(false);

  useEffect(() => {
    // console.log(token);
  //  document.addEventListener("contextmenu", (event) => event.preventDefault());

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      handleInfoScroll();
    };

    const handleInfoScroll = () => {
      if (window.scrollY > 300) {
        setInfoScroll(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Check if the current route is "Register" or "Login"
  const isAuthRoute = pathname === "/register" || pathname === "/login";

  return (
    <div className="rtl">
      {!isAuthRoute && <Navbar scroll={scrolled} />}
      <Routes>
        <Route path="/" element={<Home infoScroll={infoScroll} />} />
        <Route path="/course/:id" element={<SingleCourse />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mycourses" element={<MyCourses />} />
        {/* Add other routes */}
      </Routes>
      {!isAuthRoute && <Footer />}
    </div>
  );
}

export default App;
