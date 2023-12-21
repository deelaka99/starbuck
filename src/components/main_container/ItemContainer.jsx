import React, { useEffect, useState } from "react";

function ItemContainer(props) {
  const [currentImage, setCurrentImage] = useState(0);

  //Image list
  const images = [props.img1, props.img2, props.img3];

  useEffect(() => {
    //Image changing function in every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    //clear the interval
    return () => clearInterval(interval);
  });
  return (
    <div
      onClick={props.onClick}
      className="bg-lightGrey p-2 tablet:h-[220px] tablet:w-[180px] laptop:h-[200px] laptop:w-[146px] rounded-md shadow-md tablet:mr-[6px] laptop:mr-[4px] laptop:mt-[4px] hover:bg-lightGrey1 active:bg-white"
    >
      <div className="tablet:h-[110px] tablet:w-[160px] laptop:h-[100px] laptop:w-[130px] bg-white rounded-md">
        <img
          className="h-full w-full rounded-md transition-opacity duration-500 border shadow-lg"
          src={images[currentImage]}
          alt="img"
          style={{ opacity: 1 }}
        />
      </div>
      <div className="tablet:h-[110px] tablet:w-[160px] laptop:h-[100px] laptop:w-[130px] p-2">
        <p className="font-inter text-center text-xs text-grey overflow-hidden whitespace-nowrap">
          {props.id}
        </p>
        <p className="font-inter text-center text-md text-darkGreen font-semibold overflow-hidden whitespace-nowrap">
          {props.name}
        </p>
        <p className="font-inter text-center font-semibold text-green overflow-hidden whitespace-nowrap">
          Rs.{props.price}
        </p>
        <p className="font-inter text-center overflow-hidden whitespace-nowrap font-semibold text-xs text-red">
          Qty: {props.qty}
        </p>
      </div>
    </div>
  );
}

export default ItemContainer;
