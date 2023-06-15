import {ShoesType} from "../types/ShoesType.ts";

export const filterSearch = (shoesArray: ShoesType [], text: string) => {
    return shoesArray.filter((shoesItem) => shoesItem.title.toLowerCase().includes(text.toLowerCase()))
}