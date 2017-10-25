import {createStore} from "redux";

import cartReducer from "./cart/Reducer";

let store = createStore(cartReducer);

export default store;