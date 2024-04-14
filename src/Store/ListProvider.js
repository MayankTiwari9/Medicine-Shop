import React, { useReducer } from "react";
import ListContext from "./list-context";

const defaultListState = {
  items: [],
};

const listReducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_LIST") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.name === action.item.name
    );

    if (existingItemIndex !== -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      return {
        items: updatedItems,
      };
    } else {
      const allItems = [...state.items, { ...action.item, quantity: 1 }];

      return {
        items: allItems,
      };
    }
  }

  if (action.type === "DECREASE_ITEM_QUANTITY") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];

    if (!existingItem || existingItem.quantity === 0) {
      return state;
    }

    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity - 1,
    };

    const updatedItems = [...state.items];
    updatedItems[existingItemIndex] = updatedItem;

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
};

const ListProvider = (props) => {
  const [listState, dispatchListAction] = useReducer(
    listReducer,
    defaultListState
  );

  const addToListHandler = (item) => {
    dispatchListAction({ type: "ADD_ITEM_TO_LIST", item: item });
  };

  const decreaseItemQuantityHandler = (id, size) => {
    dispatchListAction({ type: "DECREASE_ITEM_QUANTITY", id: id });
  };

  const listContext = {
    items: listState.items,
    addListItem: addToListHandler,
    decreaseItemQuantity: decreaseItemQuantityHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
