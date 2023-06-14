import React from 'react';
import {useModal} from "../../context/ModalContext.tsx";
import {Link} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon
    from '@mui/icons-material/AccountCircleOutlined';
import {useShoes} from "../../context/ShoesContext.tsx";

const Navigation = () => {
    const {handleShow} = useModal();
    const {total} = useShoes();

    return (
        <nav>
            <ul className='flex items-center'>
                <Link to={'/purchaseList'}>
                    <li className='mr-4 hover:underline hover:text-lime-500'>
                        <span
                            className={'font-bold leading-title'}>${total}</span>
                    </li>
                </Link>
                <li className='mr-4 cursor-pointer'>
                    <ShoppingCartOutlinedIcon className='hover:fill-lime-500'
                                              onClick={handleShow}/>
                </li>
                <li className='mr-4 cursor-pointer'>
                    <FavoriteBorderIcon className='hover:fill-lime-500'/>
                </li>
                <li className='cursor-pointer'><AccountCircleOutlinedIcon
                    className='hover:fill-lime-500'/></li>
            </ul>
        </nav>
    );
};

export default Navigation;