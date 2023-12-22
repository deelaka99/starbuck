import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MainContainer from "../components/main_container/MainContainer";
import Footer from "../components/Footer";

function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {}, [items]);

  const updateDashboardItems = (newItem) => {
    setItems(newItem);
  };

  const clearBroughtItemsToFooter = () =>{
    setItems([]);
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <NavBar />
      <MainContainer updateDashboardItems={updateDashboardItems} />
      <Footer broughtItems={items} clearAllItems = {clearBroughtItemsToFooter}/>
    </div>
  );
}

export default Dashboard;
