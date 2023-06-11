import {createContext, FC, ReactNode, useContext, useState} from "react";
import {ShoesType} from "../types/ShoesType.ts";
import {CartItem} from "../types/CartItem.ts";

const ShoesContext = createContext<ShoesType[]>([]);
export const useShoes = () => useContext(ShoesContext);
export const ShoesProvider: FC<{
    children?: ReactNode | undefined
}> = props => {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);

    const addToCart = (shoesItem: ShoesType) => {
        setCartItems((prevState) => [...prevState, shoesItem]);
        setTotal(total + +shoesItem.price);
    };

    const shoesValue = {
        cartItems,
        addToCart,
        total,
    };

    return (
        <ShoesContext.Provider value={shoesValue}>
            {props.children}
        </ShoesContext.Provider>
    );
};
