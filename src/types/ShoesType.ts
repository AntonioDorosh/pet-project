export interface ShoesType {
    id: number;
    title: string;
    imgSrc: string;
    price: number;
}

export interface ShoesPropsType {
    shoes: ShoesType[]
    text: string;
}

