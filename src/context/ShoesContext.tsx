import React, {createContext, FC, ReactNode, useContext, useState} from "react";
import {ShoesType} from "../types/ShoesType.ts";
import {CartItem} from "../types/CartItem.ts";
import {ShoesContextType} from "../types/ShoesContextType.ts";

const ShoesContext = createContext({} as ShoesContextType);
export const useShoes = () => useContext(ShoesContext);
export const ShoesProvider: FC<{
    children?: ReactNode | undefined
}> = ({children}) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);
    const [addedItems, setAddedItems] = useState<string[]>([]);

    const addToCart = (shoesItem: ShoesType) => {
        const exist = cartItems.find((cartItem) => cartItem.id === shoesItem.id);
        if (exist) {
            const newItems = cartItems.map((x) => x.id ? {
                ...exist,
                quantity: x.quantity + 1
            } : x);
            setCartItems(newItems)
        } else {
            const newCartItems = [...cartItems, {...shoesItem, quantity: 1}];
            setCartItems(newCartItems)
            setTotal((prevState) => prevState + +shoesItem.price)
        }
    };

    const deleteItem = (id: number, price: number) => {
        const exist = cartItems.find((x) => x.id === id);
        const quantity = exist?.quantity ?? 0;
        if (quantity === 1) {
            const newCartItems = cartItems.filter((x) => x.id !== id);
            setCartItems(newCartItems)
            setTotal((prevState) => prevState - price)
        } else {
            const newCartItems = cartItems.map((x) =>
                x.id === id ? { ...x, quantity: x.quantity - 1 } : x
            );
            setCartItems(newCartItems)
            if (total <= 0) {
                setTotal((prevState) => prevState - price)
            }
        }
    };

    const handleAddToCart = (shoes: ShoesType) => {
        addToCart(shoes);
        setAddedItems((prevState) => [...prevState, shoes.id.toString()]);
    };

    const increaseQuantity = (id: number) => {
        setCartItems((prevState) => {
            return prevState.map((shoesItem) => {
                if (shoesItem.id === id) {
                    return {
                        ...shoesItem,
                        quantity: shoesItem.quantity + 1
                    }
                }
                return shoesItem;
            })
        })
    }

    const decreaseQuantity = (id: number) => {
        setCartItems((prevState) => {
            return prevState.map((shoesItem) => {
                if (shoesItem.id === id && shoesItem.quantity > 0) {
                    return {
                        ...shoesItem,
                        quantity: shoesItem.quantity - 1
                    }
                }
                return shoesItem;
            })
        })
    }

    const shoesValue: ShoesContextType = {
        cartItems,
        addToCart,
        total,
        deleteItem,
        handleAddToCart,
        addedItems,
        increaseQuantity,
        decreaseQuantity
    };

    return (
        <ShoesContext.Provider value={shoesValue}>
            {children}
        </ShoesContext.Provider>
    );
};
