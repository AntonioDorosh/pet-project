import React from 'react';
import {ShoesType} from "../../types/ShoesType.ts";
import {useShoes} from "../../context/ShoesContext.tsx";
import {formatCurrency} from "../../utils/formatCurrency.ts";

const CartItems = () => {
    const {cartItems, deleteItem} = useShoes();

    return (
        <>
            {cartItems.length === 0
                ? <div className='grid place-items-center'>
                    <img className='mb-5 max-w-fit'
                         src="src/assets/emptyBox.jpg" alt="box"/>
                    <h2 className='text-customSizeText font-bold mb-2'>Корзина
                        пустая</h2>
                    <p>Добавьте хотя бы один товар в список</p>
                </div>
                : cartItems.map(({title, imgSrc, price, id, quantity}: ShoesType) => (
                    <div className={'flex items-center p-6 border rounded-3xl'}>
                        <img className={'mr-5'} src={imgSrc}
                             alt={title}/>
                        <div className={'flex-1'}>
                            <p className={'mb-2 max-w-[150px]'}>{title}</p>
                            <p className={'font-bold'}>{formatCurrency(price)}</p>
                        </div>
                        <button
                            className='border p-3 rounded-arrowBorder hover:bg-lime-500'
                            onClick={() => deleteItem(id, price)}>
                            <img src="src/assets/delete.svg"
                                 alt="deleteIcon"/>
                        </button>
                        <div>{quantity}</div>
                    </div>
                ))}
        </>
    );
};

export default CartItems;

