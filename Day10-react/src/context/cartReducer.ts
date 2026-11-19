import type { CartItem, CartAction } from "./cartTypes";

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }

      return [...state, action.payload];
    }

    case "REMOVE_ITEM":
      return state.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.type !== action.payload.type
      );

    case "CHANGE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return state.filter(
          (item) =>
            item.id !== action.payload.id ||
            item.type !== action.payload.type
        );
      }

      return state.map((item) =>
        item.id === action.payload.id &&
        item.type === action.payload.type
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

export default cartReducer;