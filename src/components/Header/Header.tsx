import React from 'react';
import Navigation from "../Navigation/Navigation.tsx";
import ModalBar from "../../UI/Modal/ModalBar.tsx";
import {ModalProvider} from "../../context/ModalContext.tsx";

const Header = () => {
    return (
        <header>
            <div className='flex items-center mb-marginHeaderBottom'>
                <img className='mr-4' src="src/assets/logo.svg" alt="logo"/>
                <div className='flex-1'>
                    <h2 className='uppercase font-bold text-customSizeText'>REACT
                        SNEAKERS</h2>
                    <p className='text-textGray'>Магазин лучших кроссовок</p>
                </div>
                <ModalProvider>
                        <Navigation/>
                        <ModalBar/>
                </ModalProvider>
            </div>
            <div className='border-b mb-marginHeaderBottom'></div>
        </header>
    );
};

export default Header;