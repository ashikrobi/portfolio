import React from "react";
import About from "./About";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
