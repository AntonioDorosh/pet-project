import {CartItem} from "./CartItem.ts";
import {ShoesType} from "./ShoesType.ts";

export type ShoesContextType = {
    cartItems: CartItem[];
    addToCart: (shoesItem: ShoesType) => void;
    total: number;
    deleteItem: (id: number, price: number) => void;
    handleAddToCart: (shoes: ShoesType) => void;
    addedItems: string[];
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
};