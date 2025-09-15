import { useState, useEffect } from "react";
import { storageItems, luggageItem } from "../../assets/data/itemsList";
import { PlusCircle, MinusCircle, ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react";

const StorageSelector = ({ selectedItems, onChange, nextStep, prevStep }) => {
  const [quantities, setQuantities] = useState(selectedItems?.quantities || {});

  const updateQuantity = (name, value) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(0, value),
    }));
  };

  useEffect(() => {
    onChange({ quantities });
  }, [quantities, onChange]);

  const calculateTotal = () => {
    let total = 0;
    storageItems.forEach((item) => {
      const qty = quantities[item.name] || 0;
      total += qty * item.price;
    });
    const luggageQty = quantities[luggageItem.name] || 0;
    if (luggageQty === 1) total += 10;
    else if (luggageQty === 2) total += 20;
    else if (luggageQty === 3) total += 30;
    else if (luggageQty >= 4) total += 50;
    return total;
  };

  const totalPrice = calculateTotal();
  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  const getLuggagePriceText = (qty) => {
    if (qty === 0) return "₵10 for 1 piece";
    if (qty === 1) return "₵10";
    if (qty === 2) return "₵20";
    if (qty === 3) return "₵30";
    if (qty >= 4) return "₵50 (max)";
    return "Dynamic pricing";
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Select your luggage item</h1>
        <p className="text-gray-600 text-sm">Select the items you'd like to carry along</p>
      </div>

      {/* Items Grid: 2 items per row on mobile, 3 on md, 4 on lg */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {[...storageItems, luggageItem].map((item) => {
          const quantity = quantities[item.name] || 0;
          const isLuggage = item.name === "Luggage";

          return (
            <div
              key={item.name}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden transition-all duration-200 ${
                quantity > 0 ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full h-28 md:h-32 lg:h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-2 bg-gray-50"
                />
                {quantity > 0 && (
                  <div className="absolute top-1 right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {quantity}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-2 md:p-3">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">{item.name}</h3>

                <div className="mb-2">
                  {isLuggage ? (
                    <p className="text-sm font-bold text-blue-600">{getLuggagePriceText(quantity)}</p>
                  ) : (
                    <p className="text-sm font-bold text-blue-600">₵{item.price} <span className="text-xs text-gray-500 font-normal">each</span></p>
                  )}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateQuantity(item.name, quantity - 1)}
                      disabled={quantity === 0}
                      className="p-0.5 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MinusCircle className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="w-6 text-center font-bold text-sm md:text-base text-gray-900">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, quantity + 1)}
                      className="p-0.5 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <PlusCircle className="w-4 h-4 text-green-600" />
                    </button>
                  </div>

                  {quantity > 0 && (
                    <p className="text-xs md:text-sm font-semibold text-gray-700">
                      ₵{isLuggage ? (quantity === 1 ? 10 : quantity === 2 ? 20 : quantity === 3 ? 30 : 50) : quantity * item.price}
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
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingCart className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm font-semibold text-gray-900">Order Summary</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">{totalItems} item{totalItems !== 1 ? "s" : ""} selected</p>
            <p className="text-base font-bold text-blue-600">₵{totalPrice}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
        <button
          onClick={prevStep}
          className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-xs sm:text-sm"
        >
          <ArrowLeft className="w-3 h-3" /> Back
        </button>

        {totalItems === 0 && <p className="text-gray-500 text-xs sm:text-sm">Select items to continue</p>}

        <button
          onClick={nextStep}
          className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs sm:text-sm"
        >
          Continue <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default StorageSelector;
