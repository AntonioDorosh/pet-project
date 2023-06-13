import Modal from "react-bootstrap/Modal";
import {useModal} from "../../context/ModalContext.tsx";
import CartItems from "../../components/CartItems/CartItems.tsx";
import React from "react";
import {useShoes} from "../../context/ShoesContext.tsx";

function ModalBar() {
    const {show, handleModalClose} = useModal();
    const {total} = useShoes();


    return (
        <Modal show={show} onHide={handleModalClose}>
            <div className={'flex flex-col p-8'}>
                <Modal.Header closeButton>
                    <Modal.Title
                        className={'font-bold text-2xl'}>Корзина</Modal.Title>
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
                    <p>Итого: <span className={'font-bold'}>${total}</span></p>
                </div>
            </div>
        </Modal>
    );
}

export default ModalBar;