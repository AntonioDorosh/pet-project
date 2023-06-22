import {ShoesType} from "../types/ShoesType.ts";

export const removeFromLocalStorage = () => {
    localStorage.removeItem('cartItems');
    localStorage.removeItem('total');
};

export const addToLocalStorage = (arr: ShoesType[], price: number) => {
    localStorage.setItem('cartItems', JSON.stringify(arr));
    localStorage.setItem('total', price.toString())
}