import React from 'react';

import {useShoes} from "../../context/ShoesContext.tsx";
import {Link} from "react-router-dom";

import Header from "../../components/Header/Header.tsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const FavoritesPage = () => {
    const {cartItems} = useShoes();
    return (
        <>
            {cartItems?.length === 0
                ? (<div>
                    <h2>Закладок нет</h2>
                    <p>Добавьте хотя бы один товар в закладки</p>
                </div>)
                : (
                    <div
                        className={'max-w-widthContainer mx-auto bg-white my-marginContainer p-8 rounded-3xl'}>
                        <Header/>
                        <div className={'flex items-center'}>
                            <Link to='/'>
                                <button
                                    className='mr-3 border rounded-arrowBorder p-2 opacity-70 hover:bg-lime-500 hover:text-white'>
                                    <ArrowBackIcon
                                        className='opacity-70 hover:translate-x-buttonTranslate'/>
                                </button>
                            </Link>
                            <h2 className={'font-bold leading-title text-[32px]'}>Мои
                                закладки</h2>
                        </div>
                    </div>
                )}
        </>
    );
};

export default FavoritesPage;