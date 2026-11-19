
import cartReducer from "./cartReducer";
import type { CartItem } from "./cartTypes";

const initialCart: CartItem[] = [];

const hotel: CartItem = {
  id: 1,
  type: "hotel",
  quantity: 1,
};

const flight: CartItem = {
  id: 1,
  type: "flight",
  quantity: 1,
};

// Test 1: Add item
const addResult = cartReducer(initialCart, {
  type: "ADD_ITEM",
  payload: hotel,
});

console.assert(addResult.length === 1, "Test 1 Failed: Add item");

// Test 2: Remove item
const removeResult = cartReducer(addResult, {
  type: "REMOVE_ITEM",
  payload: { id: 1, type: "hotel" },
});

console.assert(removeResult.length === 0, "Test 2 Failed: Remove item");

// Test 3: Change quantity
const quantityResult = cartReducer([hotel], {
  type: "CHANGE_QUANTITY",
  payload: { id: 1, type: "hotel", quantity: 3 },
});

console.assert(
  quantityResult[0]?.quantity === 3,
  "Test 3 Failed: Change quantity"
);

// Test 4: Clear cart
const clearResult = cartReducer([hotel, flight], {
  type: "CLEAR_CART",
});

console.assert(clearResult.length === 0, "Test 4 Failed: Clear cart");

// Test 5: Add same item twice
const firstAdd = cartReducer(initialCart, {
  type: "ADD_ITEM",
  payload: hotel,
});

const secondAdd = cartReducer(firstAdd, {
  type: "ADD_ITEM",
  payload: hotel,
});

console.assert(
  secondAdd.length === 1 && secondAdd[0].quantity === 2,
  "Test 5 Failed: Add same item twice"
);

console.log("All 5 cart reducer checks completed!");
