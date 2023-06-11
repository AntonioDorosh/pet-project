import Modal from "react-bootstrap/Modal";
import {useModal} from "../../context/ModalContext.tsx";
import {useShoes} from "../../context/ShoesContext.tsx";
import {ShoesType} from "../../types/ShoesType.ts";

function ModalBar() {
    const {show, handleClose} = useModal();
    const {cartItems} = useShoes();

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className={'font-bold text-2xl'}>Корзина</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.length === 0
                    ? <div className='grid place-items-center'>
                        <img className='mb-5 max-w-fit' src="src/assets/emptyBox.jpg" alt="box"/>
                        <h2 className='text-customSizeText font-bold mb-2'>Корзина пустая</h2>
                        <p>Добавьте хотя бы один товар в список</p>
                    </div>
                    : cartItems.map((shoes: ShoesType) => (
                        <div className={'flex items-center p-6 border rounded-3xl'}>
                            <img className={'mr-5'} src={shoes.imgSrc} alt={shoes.title}/>
                            <div className={'flex-1'}>
                                <p className={'mb-2 max-w-[150px]'}>{shoes.title}</p>
                                <p className={'font-bold'}>${shoes.price}</p>
                            </div>
                            <button className='border p-3 rounded-arrowBorder hover:bg-lime-500'>
                                <img src="src/assets/delete.svg"
                                     alt="deleteIcon"/>
                            </button>
                        </div>
                    ))}
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