import React from "react";

function Footer() {
  return (
    <div className="bg-green w-full tablet:h-[12vh] laptop:h-[14vh] desktop:h-[14vh]">
      <div className="flex w-full tablet:h-[9vh] laptop:h-[11vh] desktop:h-[11vh]">
        <div className="flex items-center justify-start h-full w-1/3 tablet:pl-4 laptop:pl-8">
          <p className="text-white font-inter tablet:text-[18px] laptop:text-[20px]">
            <span className="font-bold">Total:</span> Rs. 3,500.50 <br />{" "}
            <span className="font-bold">Discount:</span> Rs.50.50
          </p>
        </div>
        <div className="flex items-center justify-start h-full w-1/3 tablet:pl-4">
          <p className="text-white font-inter tablet:text-[18px] laptop:text-[20px]">
            <span className="font-bold">Items count:</span> 10 <br />{" "}
            <span className="font-bold tablet:text-[20px] laptop:text-[24px]">Final total:</span>{" "}
            Rs.3450.00
          </p>
        </div>
        <div className="h-full w-1/3">
          <div className="h-full w-full flex items-center justify-end tablet:pr-4 laptop:pr-8">
            <button className="bg-darkGreen rounded-lg tablet:p-6 laptop:p-8 desktop:p-4 text-white font-inter font-semibold tablet:text-[20px] laptop:text-[24px] desktop:text-[20px] shadow-black shadow-md hover:shadow-black hover:shadow-lg">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[3vh] flex items-center justify-center ">
        <p className="text-white font-inter tablet:text-[12px] laptop:text-[16px] desktop:text-[13px]">
          © PDW Kariyawasam
        </p>
      </div>
    </div>
  );
}

export default Footer;
