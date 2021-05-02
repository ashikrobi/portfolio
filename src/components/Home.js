import React from "react";
import About from "./About";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
