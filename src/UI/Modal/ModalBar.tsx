import Modal from "react-bootstrap/Modal";
import {useModal} from "../../context/ModalContext.tsx";
import CartItems from "../../components/CartItems/CartItems.tsx";
import React from "react";
import {useShoes} from "../../context/ShoesContext.tsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

function ModalBar() {
    const {show, handleClose} = useModal();
    const {total, cartItems} = useShoes();

    return (
        (cartItems?.length === 0)
            ? (
                <Modal show={show} onHide={handleClose}>
                    <div className={'flex flex-col p-8'}>
                        <Modal.Header closeButton>
                            <Modal.Title
                                className={'font-bold text-2xl flex-1'}>Корзина</Modal.Title>
                            <button onClick={handleClose}>
                                <CloseIcon/>
                            </button>
                        </Modal.Header>
                        <Modal.Body className={'flex flex-col gap-5'}>
                            <CartItems/>
                        </Modal.Body>
                        <Modal.Footer className={'position-relative'}>
                            <ArrowBackIcon
                                className={'position-absolute top-[1.75rem] left-[7.5rem] text-white'}/>
                            <button className={'bg-lime-500 text-white w-full p-3'}
                                    onClick={handleClose}>Вернутся назад
                            </button>
                        </Modal.Footer>
                    </div>
                </Modal>
            )
            : (
                <Modal show={show} onHide={handleClose}>
                    <div className={'flex flex-col p-8'}>
                        <Modal.Header closeButton>
                            <Modal.Title
                                className={'font-bold text-2xl flex-1'}>Корзина</Modal.Title>
                            <button onClick={handleClose}>
                                <CloseIcon/>
                            </button>
                        </Modal.Header>
                        <Modal.Body className={'flex flex-col gap-5'}>
                            <CartItems/>
                        </Modal.Body>
                        <Modal.Footer>
                            <button
                                className="w-full text-white transition ease-in-out delay-150 bg-lime-500 p-2.5 rounded-2xl hover:-translate-y-1 hover:scale-100 hover:bg-lime-700 duration-300">Оформить
                                заказ
                            </button>
                        </Modal.Footer>
                        <div>
                            <p>Итого: <span className={'font-bold'}>${total}</span>
                            </p>
                        </div>
                    </div>
                </Modal>
            )
    );
}

export default ModalBar;