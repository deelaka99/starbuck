import React, { useEffect, useState } from "react";

function Footer(props) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(10);
  const [itemCount, setItemCount] = useState(0);
  const [clearAll, setClearAll] = useState(false);
  const [closeCountDown, setCloseCountDown] = useState(5);
  const [showPaymentAcceptanceModal, setShowPaymentAcceptanceModal] =
    useState(false);
  const [showPaymentNotAcceptanceModal, setShowPaymentNotAcceptanceModal] =
    useState(false);

  useEffect(() => {
    // Iterate through items and calculate total price
    let totalPrice = 0;
    let count = 0;
    items.forEach((item) => {
      totalPrice += item.qty * item.unitPrice;
      count += item.qty;
    });

    if (items.length > 0) {
      setTotal(totalPrice.toFixed(2));
      setItemCount(count);
      setDiscount((totalPrice * 0.05).toFixed(2));
    } else {
      setTotal(0);
      setItemCount(0);
      setDiscount(0);
    }

    if (clearAll) {
      props.clearAllItems();
      setItems([]);
      setTotal(0);
      setItemCount(0);
      setDiscount(0);
      setShowPaymentAcceptanceModal(false);
      setClearAll(false);
      console.log(items);
    } else {
      setItems(props.broughtItems);
    }
  }, [props.broughtItems, items, clearAll]);

  useEffect(() => {
    let countdownInterval;

    // Start countdown when modal is open
    if (showPaymentAcceptanceModal && closeCountDown > 0) {
      countdownInterval = setInterval(() => {
        setCloseCountDown((prevCount) => prevCount - 1);
      }, 1000);
    }

    // Clear interval when modal is closed or countdown reaches 0
    if (!showPaymentAcceptanceModal || closeCountDown == 0) {
      clearInterval(countdownInterval);
    }

    // Clear interval on component unmount
    return () => clearInterval(countdownInterval);
  }, [showPaymentAcceptanceModal, closeCountDown]);

  return (
    <div className="bg-green w-full tablet:h-[12vh] laptop:h-[14vh] desktop:h-[14vh]">
      <div className="flex w-full tablet:h-[9vh] laptop:h-[11vh] desktop:h-[11vh]">
        <div className="flex items-center justify-start h-full w-1/3 tablet:pl-4 laptop:pl-8">
          <p className="text-white font-inter tablet:text-[18px] laptop:text-[20px]">
            <span className="font-bold tablet:text-[16x] laptop:text-[18px]">Total:</span> Rs.{total} <br />{" "}
            <span className="font-bold tablet:text-[16x] laptop:text-[18px]">Discount:</span> Rs.{discount}
          </p>
        </div>
        <div className="flex items-center justify-start h-full w-1/3 tablet:pl-4">
          <p className="text-white font-inter tablet:text-[18px] laptop:text-[20px]">
            <span className="font-bold tablet:text-[16x] laptop:text-[18px]">Items count:</span> {itemCount} <br />{" "}
            <span className="font-bold tablet:text-[22px] laptop:text-[24px]">
              Final total:
            </span>{" "}
            Rs.{total - discount}
          </p>
        </div>
        <div className="h-full w-1/3">
          <div className="h-full w-full flex items-center justify-end tablet:pr-4 laptop:pr-8">
            <button
              onClick={() => {
                if (items.length > 0) {
                  setShowPaymentAcceptanceModal(true);
                } else {
                  setShowPaymentNotAcceptanceModal(true);
                }
              }}
              className="bg-darkGreen rounded-lg tablet:p-6 laptop:p-3 desktop:p-4 text-white font-inter font-semibold tablet:text-[20px] laptop:text-[15px] desktop:text-[20px] shadow-black shadow-md hover:shadow-black hover:shadow-lg"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[3vh] flex items-center justify-center ">
        <p className="text-white font-inter tablet:text-[12px] laptop:text-[10px] desktop:text-[13px]">
          © PDW Kariyawasam
        </p>
      </div>

      {/**Payment success modal */}
      {showPaymentAcceptanceModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-white">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-green border-2 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 rounded-t">
                  <h3 className="text-sm">Notification</h3>
                  <button
                    className="ml-auto bg-red rounded-sm border-0 text-lg font-semibold drop-shadow-md active:bg-white"
                    onClick={() => setShowPaymentAcceptanceModal(false)}
                  >
                    <span className=" drop-shadow-lg shadow-black h-6 w-6 text-white flex items-center justify-center active:text-grey">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col">
                  <h3 className="text-2xl font-semibold text-center">
                    Do you want to proceed the payment?
                  </h3>
                  <p>&nbsp;</p>
                  <div className="flex items-center justify-center gap-7">
                    <button
                      onClick={() => {
                        setClearAll(true);
                        props.clearAllItems();
                      }}
                      className="font-inter font-medium text-xl active:text-grey"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        setShowPaymentAcceptanceModal(false);
                        setCloseCountDown(5);
                      }}
                      className="font-inter font-medium text-xl text-red active:text-grey"
                    >
                      No
                      <span>
                        (
                        {closeCountDown === 0
                          ? (() => {
                              setShowPaymentAcceptanceModal(false);
                              setCloseCountDown(5);
                            })()
                          : `${closeCountDown}s`}
                        )
                      </span>
                    </button>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="rounded-lg opacity-50 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}

      {/**Payement not acceptance modal */}
      {showPaymentNotAcceptanceModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-white">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-green border-2 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 rounded-t">
                  <h3 className="text-sm">Notification</h3>
                  <button
                    className="ml-auto bg-red rounded-sm border-0 text-lg font-semibold drop-shadow-md active:bg-white"
                    onClick={() => setShowPaymentNotAcceptanceModal(false)}
                  >
                    <span className=" drop-shadow-lg shadow-black h-6 w-6 text-white flex items-center justify-center active:text-grey">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col">
                  <h3 className="text-2xl font-semibold text-center">
                    Please add items first!
                  </h3>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="rounded-lg opacity-50 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
}

export default Footer;
