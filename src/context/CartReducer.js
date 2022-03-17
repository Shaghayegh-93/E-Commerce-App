const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];

      const updatedItemIndex = updatedCart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        quantity: state.quantity + action.payload.quantity,
        cart: updatedCart,
        total: state.total + action.payload.price * action.payload.quantity,
      };
    }
    case "DECREMENT_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item._id === action.payload._id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      if (updatedItem.quantity === 1) {
        const filterdCart = updatedCart.filter(
          (item) => item._id !== action.payload._id
        );

        return {
          ...state,
          cart: filterdCart,
          total: state.total - action.payload.price,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;

        return {
          ...state,
          quantity: state.quantity--,
          cart: updatedCart,
          total: state.total - action.payload.price,
        };
      }
    }
    case "INC_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item._id === action.payload._id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };

      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
      return {
        ...state,
        quantity: state.quantity++,
        cart: updatedCart,
        total: state.total + action.payload.price,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
