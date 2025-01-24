const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cart";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
