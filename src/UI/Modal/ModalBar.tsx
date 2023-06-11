import Modal from "react-bootstrap/Modal";
import {useModal} from "../../context/ModalContext.tsx";
import {useShoes} from "../../context/ShoesContext.tsx";
import {ShoesType} from "../../types/ShoesType.ts";
import CartItems from "../../components/CartItems/CartItems.tsx";

function ModalBar() {
    const {show, handleClose} = useModal();

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className={'font-bold text-2xl'}>Корзина</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CartItems/>
            </Modal.Body>
            <Modal.Footer>
                <button
                    className="w-full text-white transition ease-in-out delay-150 bg-lime-500 p-2.5 rounded-2xl hover:-translate-y-1 hover:scale-100 hover:bg-lime-700 duration-300">Оформить
                    заказ
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalBar;