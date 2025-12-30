import { useState, useEffect } from "react";
import { storageItems, luggageItem } from "../../assets/data/itemsList";
import {
  PlusCircle,
  MinusCircle,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const StorageSelector = ({ selectedItems, onChange, nextStep, prevStep }) => {
  const [quantities, setQuantities] = useState(
    selectedItems?.quantities || {}
  );

  const updateQuantity = (name, value) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(0, value),
    }));
  };

  useEffect(() => {
    onChange({ quantities });
  }, [quantities, onChange]);

  // ✅ TOTAL CALCULATION
  const calculateTotal = () => {
    let total = 0;

    storageItems.forEach((item) => {
      const qty = quantities[item.name] || 0;
      total += qty * item.price;
    });

    // ✅ Flat luggage handling fee (once)
    const luggageQty = quantities[luggageItem.name] || 0;
    if (luggageQty > 0) {
      total += 10;
    }

    return total;
  };

  const totalPrice = calculateTotal();
  const totalItems = Object.values(quantities).reduce(
    (sum, qty) => sum + qty,
    0
  );

  // ✅ Luggage first
  const allItems = [luggageItem, ...storageItems];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Select your luggage & storage items
        </h1>
        <p className="text-gray-600 text-sm">
          Free 40KG for luggage. Extra weight is charged during onboarding.
        </p>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {allItems.map((item) => {
          const quantity = quantities[item.name] || 0;
          const isLuggage = item.name === "Luggage";

          return (
            <div
              key={item.name}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ${
                quantity > 0 ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-28 md:h-32 lg:h-36 bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-2"
                />

                {quantity > 0 && (
                  <div className="absolute top-1 right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {quantity}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-2 md:p-3">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">
                  {item.name}
                </h3>

                {/* Price / Info */}
                <div className="mb-2">
                  {isLuggage ? (
                    <p className="text-xs md:text-sm font-medium text-blue-600">
                      Free 40GK for luggage handling.
                      <br />
                      Extra luggage cost charged during onboarding.
                    </p>
                  ) : (
                    <p className="text-sm font-bold text-blue-600">
                      ₵{item.price}{" "}
                      <span className="text-xs text-gray-500 font-normal">
                        each
                      </span>
                    </p>
                  )}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.name, quantity - 1)
                      }
                      disabled={quantity === 0}
                      className="p-0.5 rounded-full hover:bg-gray-100 disabled:opacity-50"
                    >
                      <MinusCircle className="w-4 h-4 text-gray-600" />
                    </button>

                    <span className="w-6 text-center font-bold text-sm">
                      {quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(item.name, quantity + 1)
                      }
                      className="p-0.5 rounded-full hover:bg-gray-100"
                    >
                      <PlusCircle className="w-4 h-4 text-green-600" />
                    </button>
                  </div>

                  {/* Subtotal (NO luggage price shown) */}
                  {quantity > 0 && !isLuggage && (
                    <p className="text-xs md:text-sm font-semibold text-gray-700">
                      ₵{quantity * item.price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      {totalItems > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingCart className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm font-semibold">Order Summary</h3>
          </div>

          <div className="space-y-1 text-sm">
            {Object.entries(quantities).map(([name, qty]) =>
              qty > 0 ? (
                <div
                  key={name}
                  className="flex justify-between text-gray-700"
                >
                  <span>
                    {name} × {qty}
                  </span>
                  {name !== "Luggage" && (
                    <span>
                      ₵
                      {storageItems.find((i) => i.name === name)?.price *
                        qty}
                    </span>
                  )}
                </div>
              ) : null
            )}

            {quantities[luggageItem.name] > 0 && (
              <div className="flex justify-between text-blue-600 font-medium">
                <span>Luggage handling</span>
                <span>₵10</span>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-3 font-bold text-blue-600">
            <span>Total</span>
            <span>₵{totalPrice}</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-3 border-t">
        <button
          onClick={prevStep}
          className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 rounded-lg text-sm"
        >
          <ArrowLeft className="w-3 h-3" /> Back
        </button>

        <button
          onClick={nextStep}
          className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm"
        >
          Continue <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default StorageSelector;
