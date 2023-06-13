import React, {createContext, FC, ReactNode, useContext, useState} from "react";
import {ShoesType} from "../types/ShoesType.ts";
import {CartItem} from "../types/CartItem.ts";
import {ShoesContextType} from "../types/ShoesContextType.ts";

const ShoesContext = createContext<ShoesContextType>({
    cartItems: [],
    addToCart: () => {},
    total: 0,
    deleteItem: () => {},
    handleAddToCart: () => {},
    addedItems: [],
});
export const useShoes = () => useContext(ShoesContext);
export const ShoesProvider: FC<{
    children?: ReactNode | undefined
}> = props => {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);
    const [addedItems, setAddedItems] = useState<string[]>([]);

    const addToCart = (shoesItem: ShoesType) => {
        setCartItems((prevState) => [...prevState, shoesItem]);
        setTotal(prevState => prevState + +shoesItem.price);
    };

    const deleteItem = (id: number, price: number) => {
        const updateCart = cartItems.filter((shoes) => shoes.id !== id);
        setCartItems(updateCart);
        setTotal(prevState => prevState - price);
    };

    const handleAddToCart = (shoes: ShoesType) => {
        addToCart(shoes);
        setAddedItems((prevState) => [...prevState, shoes.id.toString()]);
    };

    const shoesValue: ShoesContextType = {
        cartItems,
        addToCart,
        total,
        deleteItem,
        handleAddToCart,
        addedItems
    };

    return (
        <ShoesContext.Provider value={shoesValue}>
            {props.children}
        </ShoesContext.Provider>
    );
};
