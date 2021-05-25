import React from "react";
import About from "./About";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <section id="home">
        <Header></Header>
      </section>
      <Navbar></Navbar>
      <section id="about">
        <About></About>
      </section>
      <section id="projects">
        <Projects></Projects>
      </section>
      <section id="contact">
        <ContactMe></ContactMe>
      </section>
      <section id="footer">
        <Footer></Footer>
      </section>
    </>
  );
};

export default Home;
