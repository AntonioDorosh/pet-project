import Modal from 'react-bootstrap/Modal';
import {useModal} from "../../context/ModalContext.tsx";
import {useShoes} from "../../context/ShoesContext.tsx";

function ModalBar() {
    const {handleClose, show} = useModal();
    const {cartItems} = useShoes();
    console.log(cartItems)

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.length === 0
                    ? <h2>list is empty</h2>
                    : cartItems.map((shoes) => console.log(shoes))}
            </Modal.Body>
            <Modal.Footer>
                <button
                    className='w-full text-white transition ease-in-out delay-150 bg-lime-500 p-2.5 rounded-2xl hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300'>Оформить
                    заказ
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalBar;