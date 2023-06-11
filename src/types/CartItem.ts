import {ShoesType} from "./ShoesType.ts";

export interface CartItem {
    id: number;
}

export interface ShoesContextType {
    shoes: ShoesType[],
    setShoes: (shoes: ShoesType[]) => void;
    cartItems: CartItem[];
    addToCart: (shoesItem: ShoesType) => void;
    total: 0,
    removeItem: (id: number, price: number) => void;
}