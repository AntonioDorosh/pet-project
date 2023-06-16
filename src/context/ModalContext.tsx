import React, {createContext, FC, ReactNode, useContext, useState} from "react";
import {ModalType} from "../types/ModalType.ts";

const ModalContext = createContext<ModalType>({} as ModalType);
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
        handleShow,
    };

    return (
        <ModalContext.Provider value={modalValue}>
            {props.children}
        </ModalContext.Provider>
    );
};
