import {createContext, FC, ReactNode, useContext, useState} from "react";

const ModalContext = createContext(false);
export const useModal = () => useContext(ModalContext);
export const ModalProvider: FC<{
    children?: ReactNode | undefined
}> = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const modalValue = {
        show,
        handleClose,
        handleShow
    };

    return (
        <ModalContext.Provider value={modalValue}>
            {props.children}
        </ModalContext.Provider>
    );
};
