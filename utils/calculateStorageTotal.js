// utils/calculateStorageTotal.js
import { storageItems,luggageItem } from "../src/assets/data/itemsList";

export const calculateStorageDetails = (quantities) => {
  if (!quantities) return { breakdown: [], total: 0 };

  let breakdown = [];
  let total = 0;

  // normal items
  storageItems.forEach((item) => {
    const qty = quantities[item.name] || 0;
    if (qty > 0) {
      const cost = qty * item.price;
      breakdown.push({ name: item.name, qty, cost });
      total += cost;
    }
  });

  // luggage
  const luggageQty = quantities[luggageItem.name] || 0;
  if (luggageQty > 0) {
    let cost = 0;
    if (luggageQty === 1) cost = 10;
    else if (luggageQty === 2) cost = 20;
    else if (luggageQty === 3) cost = 30;
    else if (luggageQty >= 4) cost = 50;

    breakdown.push({ name: "Luggage", qty: luggageQty, cost });
    total += cost;
  }

  return { breakdown, total };
};
