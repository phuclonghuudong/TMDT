import addDesk from "./addItems";
import addProduct from "./addProducts";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
     addDesk,
     addProduct,
});

export default rootReducers;
