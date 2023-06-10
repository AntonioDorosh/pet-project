import React from "react";
import {ShoesPropsType} from "../../types/ShoesType.ts";
import AddIcon from '@mui/icons-material/Add';
import {filterSearch} from "../../utils/filterSearch.ts";
import {useShoes} from "../../context/ShoesContext.tsx";

const ShoesList = ({shoes, text}: ShoesPropsType) => {
    const filteredShoes = filterSearch(shoes, text);
    const {addToCart} = useShoes();
    return (
        <>
            {filteredShoes.map((shoes) => (
                <div key={shoes.id}
                    className='border max-w-cardContainer p-8 rounded-cardRadius'>
                    <p className='max-w-textContainerCard text-cardTextSize leading-4 mb-3.5 text-center'>{shoes.title}</p>
                    <img className='mb-3.5' src={shoes.imgSrc}
                         alt="green nike"/>
                    <div>
                        <div className='flex'>
                            <div className='flex-1'>
                        <span
                            className='text-priceColor text-cardPriceSize uppercase leading-5'>Цена:</span>
                                <p>${shoes.price}</p>
                            </div>
                            <button onClick={() => addToCart(shoes)}><AddIcon/></button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ShoesList;