import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetails = ({ items, onUpdate, onDelete }) => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const item = items.find((i) => i.id.toString() === itemId);
  const [editMode, setEditMode] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(item || {});

  if (!item) {
    return <p className="text-center text-gray-500 mt-6">Item not found 😢</p>;
  }

  const handleSave = () => {
    onUpdate(updatedItem); // ✅ correct function name
    setEditMode(false);
  };

  const handleDelete = () => {
    onDelete(item.id); // ✅ correct function name
    navigate(-1); // go back to previous page
  };

  return (
    <div className="p-4 md:p-6 max-w-xl mx-auto bg-white mt-40 shadow-md rounded-2xl">
      <h1 className="text-5xl font-bold text-center mb-6">{item.name}</h1>

      {editMode ? (
        <div className="space-y-3">
          <input
            type="text"
            value={updatedItem.name}
            onChange={(e) =>
              setUpdatedItem({ ...updatedItem, name: e.target.value })
            }
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="number"
            value={updatedItem.quantity}
            onChange={(e) =>
              setUpdatedItem({
                ...updatedItem,
                quantity: Number(e.target.value),
              })
            }
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Unit (kg, g, pcs)"
            value={updatedItem.unit || ""}
            onChange={(e) =>
              setUpdatedItem({ ...updatedItem, unit: e.target.value })
            }
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="date"
            value={updatedItem.expiryDate || ""}
            onChange={(e) =>
              setUpdatedItem({
                ...updatedItem,
                expiryDate: e.target.value,
              })
            }
            className="w-full border p-2 rounded-lg"
          />

          <div className="flex gap-4 justify-between">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              ✅ Save
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="mb-2">
            <strong>Quantity:</strong> {item.quantity} {item.unit || ""}
          </p>
          {item.expiryDate && (
            <p className="mb-2">
              <strong>Expiry:</strong> {item.expiryDate}
            </p>
          )}
          <p className="mb-6">
            <strong>Category:</strong> {item.category}
          </p>

          <div className="flex gap-4 justify-between">
            <button
              onClick={() => setEditMode(true)}
              className="bg-green-500 text-white text-2xl px-15 py-1 rounded-lg hover:bg-green-600"
            >
               Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
               Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetails;
