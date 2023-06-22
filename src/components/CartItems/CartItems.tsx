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
                : (cartItems.map((shoes: ShoesType) => (
                    <div className={'flex items-center'}>
                        <img className={'mr-[21px]'} src={shoes.imgSrc}
                             alt={shoes.title}/>
                        <div>
                            <p className={'mr-[21px] font-medium'}>{shoes.title}</p>
                        </div>
                        <div>
                            <p className={'font-bold'}>{formatCurrency(shoes.price)}</p>
                            <button className={'text-red-500 hover:underline'}
                                    onClick={() => deleteItem(shoes.id, shoes.price)}>Remove
                            </button>
                            <p>total: {shoes.quantity}</p>
                        </div>
                    </div>
                )))}
        </>
    );
};

export default CartItems;

