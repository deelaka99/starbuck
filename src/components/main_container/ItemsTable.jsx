import React, { useEffect, useState } from "react";

function ItemsTable(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    props.updateItems(updatedItems);
  };

  return (
    <div className="flex items-center justify-center p-5 tablet:h-[33vh] tablet:w-full laptop:h-full laptop:w-full">
      <div className="h-full w-full rounded shadow-lg overflow-auto">
        <table className="w-full">
          <thead className="bg-green sticky top-0 border-l border-r border-green">
            <tr className="h-[4vh] text-white font-semibold">
              <th className="w-1/6 py-4">No</th>
              <th className="w-1/6 py-4">Item</th>
              <th className="w-1/6 py-4">Quantity</th>
              <th className="w-1/6 py-4">Unit Price</th>
              <th className="w-1/6 py-4">Total Price</th>
              <th className="w-1/6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {items.map((item, index) => (
              <tr
                key={index}
                className="bg-grey h-[40px] border-b border-l border-r border-green"
              >
                <td className="py-4 px-3 border-r border-green text-center">
                  {index + 1}
                </td>
                <td className="py-4 px-3 border-r border-green text-center">
                  {item.name}
                </td>
                <td className="py-4 px-3 border-r border-green text-center">
                  {item.qty}
                </td>
                <td className="py-4 px-3 border-r border-green text-center">
                  Rs.{`${item.unitPrice.toFixed(2)}`}
                </td>
                <td className="py-4 px-3 border-r border-green text-center">
                  Rs.{`${(item.qty * item.unitPrice).toFixed(2)}`}
                </td>
                <td className="py-4 px-3 flex items-center justify-center">
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="bg-red text-white px-2 py-1 rounded shadow hover:shadow-lg hover:opacity-90"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsTable;
