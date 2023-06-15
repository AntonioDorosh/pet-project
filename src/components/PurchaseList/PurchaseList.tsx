import React from 'react';
import Header from "../Header/Header.tsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";

const PurchaseList = () => {
    return (
        <div
            className='max-w-widthContainer mx-auto bg-white my-marginContainer p-8 rounded-3xl'>
            <Header/>
            <div className='flex items-center mb-[40px]'>
                <Link to={'/'}>
                    <button
                        className='mr-3 border rounded-arrowBorder p-2 opacity-70 hover:bg-lime-500 hover:text-white'>
                        <ArrowBackIcon
                            className='opacity-70 hover:translate-x-buttonTranslate'/>
                    </button>
                </Link>
                <h2 className='text-title leading-title font-bold'>Мои
                    покупки</h2>
            </div>
            <div className={'grid place-items-center'}>
                <img className={'mb-[24px]'} src="src/assets/emoji.jpg" alt="sadEmoji"/>
                <h3>У вас нет заказов</h3>
                <span>Добавьте хотя бы один товар в корзину</span>
            </div>
        </div>
    );
};

export default PurchaseList;