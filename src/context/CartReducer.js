const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      updatedCart.push(action.payload);
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.price * action.payload.quantity,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
