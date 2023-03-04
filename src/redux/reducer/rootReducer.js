import { combineReducers } from "redux";
import { shoeReducer } from "./shoeReducer";

export const rootReducer_Ex_Shoe_Shop_Redux = combineReducers({
    shoeReducer: shoeReducer,
})