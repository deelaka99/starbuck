import React, { useEffect, useState } from "react";
import itemData from "../../data/itemData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ItemContainer from "./ItemContainer";
import PricingPanel from "./PricingPanel";
import ItemsTable from "./ItemsTable";

function MainContainer(props) {
  const [data, setData] = useState(itemData);
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  //user brought items
  const [items, setItems] = useState([]);

  useEffect(() => {
    setData(itemData);
    props.updateDashboardItems(items);
  }, [items, props.updateDashboardItems]);

  const updateItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    props.updateDashboardItems([...items, newItem]);
  };

  const updateAfterItemsRemoval = (newItem) => {
    setItems(newItem);
  };

  const itemShowInPricingPanel = (id, name, qty, uPrice) => {
    setID(id);
    setName(name);
    setQty(qty);
    setUnitPrice(uPrice);
  };

  // Filter items based on the first two letters of the name
  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().startsWith(searchTerm.toLowerCase().slice(0, 2))
  );

  return (
    <div className="laptop:flex w-full tablet:h-[82vh] laptop:h-[78vh] desktop:h-[78vh] text-white">
      {/* for Tablet Item container*/}
      <div className="laptop:hidden tablet:h-[25vh] tablet:w-full bg-darkGrey">
        <div className="flex items-center justify-center w-full h-1/6 p-1">
          <div className="w-1/2 h-5/6 flex">
            <div className="h-full w-full flex items-center justify-center">
              <input
                type="text"
                className="rounded-md w-2/3 pt-1 pb-1 pr-1 pl-3 bg-lightGrey border text-grey focus:outline-none focus:ring-4 focus:border-white placeholder:text-center"
                placeholder="⌕ Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="p-2 w-full h-5/6 flex items-center justify-start overflow-y-hidden">
          {filteredItems.map((item) => (
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
                itemShowInPricingPanel(
                  item.id,
                  item.name,
                  item.quantity,
                  item.price
                )
              }
            />
          ))}
        </div>
      </div>
      {/* Tablet pricing panel */}
      <div className="laptop:hidden tablet:h-[75vh] tablet:w-full bg-grey ">
        {/* Item Entry */}
        <div className="w-full h-[23vh] flex items-center justify-center p-5">
          <PricingPanel
            pricingId={id}
            pricingName={name}
            pricingQty={qty}
            pricingUPrice={unitPrice}
            updateItems={updateItems}
          />
        </div>
        {/* Item Table */}
        <div className="w-full h-[52vh]">
          <ItemsTable
            items={items}
            updateTableItems={updateAfterItemsRemoval}
          />
        </div>
      </div>
      {/* Laptop pricing panel */}
      <div className="laptop:h-full laptop:w-3/4 bg-grey ">
        {/* Item Entry */}
        <div className="w-full h-1/3 flex items-center justify-center p-5">
          <PricingPanel
            pricingId={id}
            pricingName={name}
            pricingQty={qty}
            pricingUPrice={unitPrice}
            updateItems={updateItems}
          />
        </div>
        {/* Item Table */}
        <div className="w-full h-2/3">
          <ItemsTable
            items={items}
            updateTableItems={updateAfterItemsRemoval}
          />
        </div>
      </div>
      {/* Laptop Item container */}
      <div className="laptop:h-full laptop:w-1/4 bg-darkGrey ">
        <div className="w-full h-1/6 flex items-center justify-center">
          <div className="h-full w-full flex items-center justify-center">
            <input
              type="text"
              className="w-2/3 rounded-full pt-1 pb-1 pr-1 pl-3 bg-lightGrey border text-grey focus:outline-none focus:ring-4 focus:border-white placeholder:text-center"
              placeholder="⌕ Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className=" w-full h-5/6 p-2 flex flex-wrap justify-center items-center overflow-x-hidden">
          {filteredItems.map((item) => (
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
                itemShowInPricingPanel(
                  item.id,
                  item.name,
                  item.quantity,
                  item.price
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
