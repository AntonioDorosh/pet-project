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
        const cartItem: CartItem = {
            id: shoesItem.id,
            title: shoesItem.title,
            price: shoesItem.price,
            quantity: 1,
            imgSrc: shoesItem.imgSrc
        };
        setCartItems((prevState) => [...prevState, cartItem]);
        setTotal((prevState) => prevState + +shoesItem.price);
    };

    const deleteItem = (id: number, price: number) => {
        setCartItems((prevState) => {
            return prevState.filter((shoes) => shoes.id !== id);
        });
        setTotal((prevState) => prevState - price);
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
