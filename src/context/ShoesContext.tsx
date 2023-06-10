import {createContext, FC, ReactNode, useContext, useState} from "react";
import {ShoesType} from "../types/ShoesType.ts";
import {CartItem} from "../types/CartItem.ts";

const ShoesContext = createContext<ShoesType[]>([]);
export const useShoes = () => useContext(ShoesContext);
export const ShoesProvider: FC<{
    children?: ReactNode | undefined
}> = props => {
    const [shoes, setShoes] = useState<ShoesType[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (shoesItem: ShoesType) => {
        setCartItems((prevState) => [...prevState, shoesItem])
    }

    const shoesValue = {
        shoes,
        setShoes,
        cartItems,
        addToCart
    };

    return (
        <ShoesContext.Provider value={shoesValue}>
            {props.children}
        </ShoesContext.Provider>
    );
};
