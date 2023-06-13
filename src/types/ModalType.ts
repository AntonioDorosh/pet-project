export type ModalType = {
    show: boolean;
    handleClose?: (show: boolean) => void;
    handleShow?: (show: boolean) => void;
    handleModalClose?: () => void;
}