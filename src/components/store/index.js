import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartslice";
import uiReducer from "./uislice"

const store=configureStore({
    reducer:{cart:cartReducer,ui:uiReducer}
})
export default store