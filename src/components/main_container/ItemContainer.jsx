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
    <div className="bg-lightGrey p-2 h-[220px] w-[180px] rounded-md shadow-md mr-[6px]">
      <div className="h-[110px] w-[160px] bg-white rounded-md">
        <img
          className="h-full w-full rounded-md transition-opacity duration-500"
          src={images[currentImage]}
          alt="img"
          style={{ opacity: 1 }}
        />
      </div>
      <div className="h-[110px] w-[160px] p-2">
        <p className="font-inter text-center text-xs text-grey overflow-hidden whitespace-nowrap">
          {props.id}
        </p>
        <p className="font-inter text-center text-xl text-green font-semibold overflow-hidden whitespace-nowrap">
          {props.name}
        </p>
        <p className="font-inter text-center font-semibold text-darkGreen overflow-hidden whitespace-nowrap">
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
