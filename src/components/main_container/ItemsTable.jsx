import React from "react";

function ItemsTable() {
  return (
    <div className="flex items-center justify-center p-5 tablet:h-[33vh] tablet:w-full">
      <div className="h-full w-full rounded shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-green h-[4vh] text-white font-semibold">
              <th className="w-1/6 py-4">No</th>
              <th className="w-1/6 py-4">Item</th>
              <th className="w-1/6 py-4">Quantity</th>
              <th className="w-1/6 py-4">Unit Price</th>
              <th className="w-1/6 py-4">Total Price</th>
              <th className="w-1/6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="bg-grey h-[50px] border-b border-l border-r border-green">
              <td className="py-4 px-3 border-r border-green text-center">1</td>
              <td className="py-4 px-3 border-r border-green text-center">
                Item Name 1
              </td>
              <td className="py-4 px-3 border-r border-green text-center">
                10
              </td>
              <td className="py-4 px-3 border-r border-green text-center">
                $20.00
              </td>
              <td className="py-4 px-3 border-r border-green text-center">
                $200.00
              </td>
              <td className="py-4 px-3 flex items-center justify-center">
                <button className="bg-red text-white px-4 py-2 rounded shadow">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsTable;
