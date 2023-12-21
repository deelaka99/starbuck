import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function PricingPanel(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  useEffect(() => {
    setId(props.pricingId);
    setName(props.pricingName);
    setQty(props.pricingQty);
    setUnitPrice(props.pricingUPrice);
  }, [
    props.pricingId,
    props.pricingName,
    props.pricingQty,
    props.pricingUPrice,
  ]);

  const addItemToArray = () => {
    // Checking for if any field is empty before adding to the array
    if (id && name && qty && unitPrice) {
      const newItem = {
        id: id,
        name: name,
        qty: qty,
        unitPrice: unitPrice,
      };

      // Calling the function passed from MainContainer to update items array
      props.updateItems(newItem);

      // Clear the input fields
      clear();
    } else {
      console.error("Incomplete item data. Cannot add to the array.");
    }
  };

  const clear = () => {
    setId("");
    setName("");
    setQty("");
    setUnitPrice("");
  };

  return (
    <div className="w-full h-full bg-grey border border-lightGrey rounded shadow">
      {/* row1 */}
      <div className="w-full h-1/2 flex">
        <div className="flex h-full w-1/2">
          <div className="h-full w-1/3 p-3 flex items-center">
            <p className="font-inter text-lg text-lightGrey">Item ID</p>
          </div>
          <div className="h-full w-2/3 flex items-center justify-center">
            <input
              placeholder="Enter item ID"
              type="text"
              value={id}
              className="p-3 bg-lightGrey1 font-inter placeholder:text-white tablet:h-[40px] tablet:w-[220px] laptop:h-[38px] laptop:w-[280px] rounded border-2 focus:outline-none focus:ring-4 focus:border-2 focus:border-lightGrey"
            />
          </div>
        </div>
        <div className="flex h-full w-1/2">
          <div className="h-full w-1/3 p-3 flex items-center">
            <p className="font-inter text-lg text-lightGrey">Name</p>
          </div>
          <div className="h-full w-2/3 p-3 flex items-center justify-center">
            <input
              placeholder="Enter item name"
              type="text"
              value={name}
              className="p-3 bg-lightGrey1 font-inter placeholder:text-white tablet:h-[40px] tablet:w-[220px] laptop:h-[38px] laptop:w-[280px] rounded border-2 focus:outline-none focus:ring-4 focus:border-2 focus:border-lightGrey"
            />
          </div>
        </div>
      </div>
      {/* row2 */}
      <div className="w-full h-1/2 flex">
        <div className="flex h-full w-1/2">
          <div className="h-full w-1/3 p-3 flex items-start">
            <p className="font-inter text-lg text-lightGrey">Quantity</p>
          </div>
          <div className="h-full w-2/3 p-3 flex items-start justify-center">
            <input
              placeholder="Enter item Quantity"
              type="text"
              value={qty}
              onChange={(event) => setQty(event.target.value)}
              className="p-3 bg-lightGrey1 font-inter placeholder:text-white tablet:h-[40px] tablet:w-[220px] laptop:h-[38px] laptop:w-[280px] rounded border-2 focus:outline-none focus:ring-4 focus:border-2 focus:border-lightGrey"
            />
          </div>
        </div>
        <div className="flex h-full w-1/2">
          <div className="flex items-start justify-end h-full w-1/2 pr-1">
            <button
              onClick={addItemToArray}
              className="bg-blue tablet:w-11/12 tablet:h-3/5 laptop:w-5/6 font-inter text-lg font-semibold rounded-md shadow shadow-black hover:shadow-md hover:shadow-black hover:opacity-90 active:opacity-95"
            >
              <FontAwesomeIcon className="text-xl" icon={faCirclePlus} />
              &nbsp; Add
            </button>
          </div>
          <div className="flex items-start justify-start h-full w-1/2 pl-1">
            <button
              onClick={clear}
              className="bg-red tablet:w-11/12 tablet:h-3/5 laptop:w-5/6 font-inter text-lg font-semibold rounded-md shadow shadow-black hover:shadow-md hover:shadow-black hover:opacity-90 active:opacity-95"
            >
              <FontAwesomeIcon className="text-xl" icon={faTrash} />
              &nbsp;&nbsp;Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPanel;
