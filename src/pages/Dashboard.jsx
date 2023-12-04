import React from "react";
import NavBar from "../components/NavBar";
import MainContainer from "../components/main_container/MainContainer";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default Dashboard;
