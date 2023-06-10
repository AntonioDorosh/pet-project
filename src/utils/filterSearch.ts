import {ShoesType} from "../types/ShoesType.ts";

export const filterSearch = (arr: ShoesType [], text: string) => {
    return arr.filter((shoesItem) => shoesItem.title.toLowerCase().includes(text.toLowerCase()))
}