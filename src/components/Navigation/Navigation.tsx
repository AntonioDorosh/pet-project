import React from 'react';
import {useModal} from "../../context/ModalContext.tsx";

const Navigation = () => {
    const {handleShow} = useModal();

    return (
        <nav>
            <ul className='flex'>
                <li className='mr-4 cursor-pointer'><img src="src/assets/cart.svg" alt="cart" onClick={handleShow}/></li>
                <li className='mr-4 cursor-pointer'><img src="src/assets/heart.svg" alt="heart"/></li>
                <li className='cursor-pointer'><img src="src/assets/user.svg" alt="user"/></li>
            </ul>
        </nav>
    );
};

export default Navigation;