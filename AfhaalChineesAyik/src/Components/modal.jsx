import React from 'react';
import Modal from 'react-modal';
import './modal.css';

Modal.setAppElement('#root')

const ClosedPopup = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(true);

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Closed Message"
            className="Modal"
            overlayClassName="Overlay"
        >
            <div className="modal-content">
                <h2>Wij zijn op vakantie vanaf 22/07 tot en met 14/08</h2>
                <button className="close-button" onClick={closeModal}>sluiten</button>
            </div>
        </Modal>
    );
}

export default ClosedPopup;