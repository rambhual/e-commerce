import { ProductTypes } from "./product.types";
const INITIAL_STATE = {
  products: [{ name: "Samsung", price: 5550 }]
};
const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    default:
      return state;
  }
};

export default productReducer;
