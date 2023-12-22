import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MainContainer from "../components/main_container/MainContainer";
import Footer from "../components/Footer";

function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {}, [items]);

  const updateItems = (newItem) => {
    setItems(newItem);
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <NavBar />
      <MainContainer updateItems={updateItems} />
      <Footer broughtItems={items} />
    </div>
  );
}

export default Dashboard;
