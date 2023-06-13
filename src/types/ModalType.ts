export type ModalType = {
    show: boolean;
    handleClose?: () => void;
    handleShow?: () => void;
    handleModalClose?: () => void;
}