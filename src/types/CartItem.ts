import {ShoesType} from "./ShoesType.ts";

export interface CartItem extends ShoesType{
    id: number;
    title: string;
    imgSrc: string;
    price: number;
}

