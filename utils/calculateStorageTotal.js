// utils/calculateStorageTotal.js
import { storageItems, luggageItem } from "../src/assets/data/itemsList";

export const calculateStorageDetails = (quantities = {}) => {
  let breakdown = [];
  let total = 0;

  // ✅ Normal storage items (priced per quantity)
  storageItems.forEach((item) => {
    const qty = quantities[item.name] || 0;
    if (qty > 0) {
      const cost = qty * item.price;
      breakdown.push({
        name: item.name,
        qty,
        cost,
      });
      total += cost;
    }
  });

  // ✅ Luggage (FLAT handling fee, quantity does NOT affect price)
  const luggageQty = quantities[luggageItem.name] || 0;

  if (luggageQty > 0) {
    const handlingFee = 10;

    breakdown.push({
      name: "Luggage",
      qty: luggageQty,
      cost: handlingFee,
      note: "₵10 handling fee • 25kg free • excess charged onboard",
    });

    total += handlingFee;
  }

  return {
    breakdown,
    total,
    luggageQty,
    luggageHandlingFee: luggageQty > 0 ? 10 : 0,
  };
};
