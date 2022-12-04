import React from "react";
import "./home.scss";
import Application from "../Componensts/applications/Application";
import Header from "../Componensts/Header/Header";
import Navbar from "../Componensts/Navbar/Navbar";
import Sidebar from "../Componensts/sidebar/Sidebar";
import Chat from "../Componensts/chat/Chat";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="main_container">
        <Sidebar />
        <Application />
      </div>
      <Chat />
    </>
  );
};

export default Home;
