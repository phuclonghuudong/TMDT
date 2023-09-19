/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import "../assets/css/Home.css";
import Content from "./content/Content";
import Footer from "./layout/Footer";

const Home = () => {
     return (
          <>
               <Header />
               <Navbar />
               <Content />
               <Footer />
          </>
     );
};

export default Home;
