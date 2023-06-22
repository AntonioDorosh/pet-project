import React, {
    createContext,
    useCallback,
    useContext, useEffect,
    useMemo,
    useState
} from "react";

import {ShoesType} from "../types/ShoesType.ts";
import {CartItem} from "../types/CartItem.ts";
import {ShoesContextType} from "../types/ShoesContextType.ts";
import {
    addToLocalStorage,
    removeFromLocalStorage
} from "../utils/storageData.ts";

interface ShoesProviderProps {
    children: React.ReactNode;
}

const ShoesContext = createContext({} as ShoesContextType);
export const useShoes = () => useContext(ShoesContext);
export const ShoesProvider = ({children}: ShoesProviderProps) => {

        const [cartItems, setCartItems] = useState<CartItem[]>([]);
        const [total, setTotal] = useState(0);
        const [addedItems, setAddedItems] = useState<string[]>([]);

        const addToCart = useCallback((shoesItem: ShoesType) => {
            const exist = cartItems.find((cartItem) => cartItem.id === shoesItem.id);

            if (exist) {
                const newItems = cartItems.map((itemShoes) => itemShoes.id ? {
                    ...exist,
                    quantity: itemShoes.quantity + 1
                } : itemShoes);
                setCartItems(newItems);
            } else {
                const newCartItems = [...cartItems, {...shoesItem, quantity: 1}];
                setCartItems(newCartItems);
            }

            const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setTotal(totalPrice);

            addToLocalStorage(cartItems, totalPrice)
        }, [cartItems]);


        const deleteItem = useCallback((id: number, price: number) => {
            const exist = cartItems.find((x) => x.id === id);
            const quantity = exist?.quantity ?? 0;

            if (quantity === 1) {
                const newCartItems = cartItems.filter((x) => x.id !== id);
                setCartItems(newCartItems);
                const itemPrice = exist?.price ?? 0;
                const newTotal = total - itemPrice;
                setTotal(newTotal < 0 ? 0 : newTotal);
            } else {
                const newCartItems = cartItems.map((x) =>
                    x.id === id ? {...x, quantity: x.quantity - 1} : x
                );

                setCartItems(newCartItems);
                const newTotal = total - price;
                setTotal(newTotal < 0 ? 0 : newTotal);
            }
            removeFromLocalStorage()
        }, [cartItems, total]);



    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        const storedTotal = localStorage.getItem('total');

        if (storedCartItems && storedTotal) {
            setCartItems(JSON.parse(storedCartItems));
            setTotal(parseFloat(storedTotal));
        }
    }, [setCartItems, setTotal]);


        const handleAddToCart = useCallback((shoes: ShoesType) => {
            addToCart(shoes);
            setAddedItems((prevState) => [...prevState, shoes.id.toString()]);
        }, [addToCart]);

        const increaseQuantity = (id: number) => {
            setCartItems((prevState) => {
                return prevState.map((shoesItem) => {

                    if (shoesItem.id === id) {
                        return {
                            ...shoesItem,
                            quantity: shoesItem.quantity + 1
                        };
                    }
                    return shoesItem;
                });
            });
        };

        const decreaseQuantity = (id: number) => {
            setCartItems((prevState) => {
                return prevState.map((shoesItem) => {

                    if (shoesItem.id === id && shoesItem.quantity > 0) {
                        return {
                            ...shoesItem,
                            quantity: shoesItem.quantity - 1
                        };
                    }
                    return shoesItem;
                });
            });
        };

        const shoesProviderValues = useMemo(() => {
            return {
                cartItems,
                addToCart,
                total,
                deleteItem,
                handleAddToCart,
                addedItems,
                increaseQuantity,
                decreaseQuantity,
            };
        }, [cartItems, addToCart, addedItems, deleteItem, handleAddToCart, total]);


        return (
            <ShoesContext.Provider value={shoesProviderValues}>
                {children}
            </ShoesContext.Provider>
        );
    }
;
