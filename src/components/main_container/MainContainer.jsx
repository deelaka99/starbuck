import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ItemContainer from "./ItemContainer";
import PricingPanel from "./PricingPanel";

function MainContainer() {
  return (
    <div className="laptop:flex w-full tablet:h-[82vh] laptop:h-[78vh] desktop:h-[78vh] text-white">
      <div className="laptop:hidden tablet:h-[25vh] tablet:w-full bg-darkGrey">
        <div className="flex items-center justify-center w-full h-1/6 p-1">
          <div className="w-1/2 h-5/6 flex">
            <div className="bg-grey border border-white w-5/6 h-full rounded-tl-md rounded-bl-md pl-2 pt-1 pb-1 pr-1 text-white font-inter">Search Item...</div>
            <div className="bg-green w-1/6 h-full border border-green rounded-tr-md rounded-br-md flex items-center justify-center text-xl p-1 active:bg-darkGreen"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          </div>
        </div>
        <div className="w-full h-5/6 bg-white"></div>
      </div>
      <div className="laptop:hidden tablet:h-[75vh] tablet:w-full bg-grey ">
        tablet calc
      </div>
      <div className="laptop:h-full laptop:w-3/4 bg-grey ">lap calc</div>
      <div className="laptop:h-full laptop:w-1/4 bg-darkGrey">lap item</div>
      {/* <ItemContainer />
      <PricingPanel /> */}
    </div>
  );
}

export default MainContainer;
