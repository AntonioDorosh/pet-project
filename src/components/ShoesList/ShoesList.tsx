import React from "react";

import {ShoesPropsType, ShoesType} from "../../types/ShoesType.ts";
import {filterSearch} from "../../utils/filterSearch.ts";
import {useShoes} from "../../context/ShoesContext.tsx";
import {formatCurrency} from "../../utils/formatCurrency.ts";

const ShoesList = ({shoes, text}: ShoesPropsType) => {
    const filteredShoes = filterSearch(shoes, text);
    const {handleAddToCart} = useShoes();

    return (
        <>
            {filteredShoes.map((shoes: ShoesType) => (
                <div key={shoes.id}
                     className='border max-w-cardContainer p-8 rounded-cardRadius'>
                    <p className='max-w-textContainerCard text-cardTextSize leading-4 mb-3.5 text-center cursor-pointer hover:underline'>{shoes.title}</p>
                    <img className='mb-3.5' src={shoes.imgSrc}
                         alt="green nike"/>
                    <div>
                        <div className='flex items-center mb-3.5'>
                        <span
                            className='text-priceColor text-cardPriceSize uppercase leading-5'>Цена:</span>
                            <p>{formatCurrency(shoes.price)}</p>
                        </div>
                        <button
                            className={'bg-lime-500 w-full text-white p-2 mb-3.5'}
                            onClick={() => handleAddToCart(shoes)}>+ Add To
                            Cart</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ShoesList;