
export interface CartItem {
  id: number;
  type: "hotel" | "flight";
  quantity: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | {
      type: "REMOVE_ITEM";
      payload: { id: number; type: "hotel" | "flight" };
    }
  | {
      type: "CHANGE_QUANTITY";
      payload: {
        id: number;
        type: "hotel" | "flight";
        quantity: number;
      };
    }
  | { type: "CLEAR_CART" };
