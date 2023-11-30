import { LOG_IN, LOG_OUT } from "../actions/actions";
import { auth } from "../firebase";

let initialState = null;
auth.onAuthStateChanged((user) => {
  if (user) {
    initialState = user;
  } else {
    initialState = null;
  }
});

const setUser = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
};

export default setUser;
