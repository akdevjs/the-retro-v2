import { SET_PRODUCT } from "../actions/actions";
let initialState = undefined;
if (typeof window !== undefined) {
  initialState = ";;";
}

const setProduct = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default setProduct;
