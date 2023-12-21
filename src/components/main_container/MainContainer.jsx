import React, { useEffect, useState } from "react";
import itemData from "../../data/itemData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ItemContainer from "./ItemContainer";
import PricingPanel from "./PricingPanel";

function MainContainer() {
  const [data, setData] = useState(itemData);
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  useEffect(() => {
    setData(itemData);
  }, []);

  const itemShowInPricingPanel = (id, name, qty) => {
    setID(id);
    setName(name);
    setQty(qty);
  };

  return (
    <div className="laptop:flex w-full tablet:h-[82vh] laptop:h-[78vh] desktop:h-[78vh] text-white">
      {/* for Tablet Item container*/}
      <div className="laptop:hidden tablet:h-[25vh] tablet:w-full bg-darkGrey">
        <div className="flex items-center justify-center w-full h-1/6 p-1">
          <div className="w-1/2 h-5/6 flex">
            <div className="h-full w-full flex items-center justify-center">
              <input
                type="text"
                className="rounded-tl-md rounded-bl-md pt-1 pb-1 pr-1 pl-3 bg-lightGrey border text-grey focus:outline-none focus:ring-2 focus:border-white"
                placeholder="Search..."
              />
              <button className="bg-blue rounded-tr-md rounded-br-md pt-1 pb-1 pl-2 pr-3 border border-blue active:bg-darkGrey active:border-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 w-full h-5/6 flex items-center justify-start overflow-y-hidden">
          {data.map((item) => (
            <ItemContainer
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              qty={item.quantity}
              img1={item.image1}
              img2={item.image2}
              img3={item.image3}
              onClick={() =>
                itemShowInPricingPanel(item.id, item.name, item.quantity)
              }
            />
          ))}
        </div>
      </div>
      {/* Tablet pricing panel */}
      <div className="laptop:hidden tablet:h-[75vh] tablet:w-full bg-grey ">
        {/* Item Entry */}
        <div className="w-full h-[23vh] flex items-center justify-center p-5">
          <PricingPanel pricingId={id} pricingName={name} pricingQty={qty} />
        </div>
        {/* Item Table */}
        <div className="bg-blue w-full h-[52vh]"></div>
      </div>
      {/* Laptop pricing panel */}
      <div className="laptop:h-full laptop:w-3/4 bg-grey ">
        {/* Item Entry */}
        <div className="w-full h-1/3 flex items-center justify-center p-5">
          <PricingPanel pricingId={id} pricingName={name} pricingQty={qty} />
        </div>
        {/* Item Table */}
        <div className="bg-blue w-full h-2/3"></div>
      </div>
      {/* Laptop Item container */}
      <div className="laptop:h-full laptop:w-1/4 bg-darkGrey ">
        <div className="w-full h-1/6 flex items-center justify-center">
          <div className="h-full w-full flex items-center justify-center">
            <input
              type="text"
              className="rounded-tl-full rounded-bl-full pt-1 pb-1 pr-1 pl-3 bg-lightGrey border text-grey focus:outline-none focus:ring-4 focus:border-white"
              placeholder="Search..."
            />
            <button className="bg-blue rounded-tr-full rounded-br-full pt-1 pb-1 pl-2 pr-3 border border-blue active:bg-darkGrey active:border-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className=" w-full h-5/6 p-2 flex flex-wrap justify-center items-center overflow-x-hidden">
          {data.map((item) => (
            <ItemContainer
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              qty={item.quantity}
              img1={item.image1}
              img2={item.image2}
              img3={item.image3}
              onClick={() =>
                itemShowInPricingPanel(item.id, item.name, item.quantity)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
