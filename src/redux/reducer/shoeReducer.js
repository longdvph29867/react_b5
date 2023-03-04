import { data_shoe } from "../../Ex_Shoe_Shop_Redux/data_shoe";
import { ADD_TO_CART, CHANE_QUANTITY, DELETE, DETAIL_ITEM_SHOE } from "../constant/shoeConstant";


let initialValue = {
    listShoe: data_shoe,
    detail: data_shoe[0],
    cart: [],
}
export const shoeReducer = (state = initialValue, action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            let cloneCart = [...state.cart]
            let index = cloneCart.findIndex((item) => item.id == action.payload.id);
            if(index == -1) {
                let newShoe = {...action.payload, soLuong: 1};
                cloneCart.push(newShoe);
            }
            else {
                cloneCart[index].soLuong++;
            }
            return {...state, cart: cloneCart}
        }
        case CHANE_QUANTITY: {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex((item) => item.id == action.payload.id)
            cloneCart[index].soLuong += action.payload.luaChon;
            if(cloneCart[index].soLuong == 0) {
                cloneCart.splice(index, 1)
            }
            return {...state, cart: cloneCart}
        }
        case DELETE: {
            let newCart = state.cart.filter((item) => item.id != action.payload) 
            return {...state, cart: newCart}
        }
        case DETAIL_ITEM_SHOE: {
            let index = state.listShoe.findIndex((item) => item.id == action.payload)
            return {...state, detail: data_shoe[index]}
        }
        default:
            return state;
    }
}

