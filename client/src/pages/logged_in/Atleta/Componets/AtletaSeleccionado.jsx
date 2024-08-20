import React, { useState } from 'react';
import Modal from './Modal'; 

export const AtletaSeleccionado = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={openModal}
                >
                    Abrir
                </button>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2 className="text-xl font-semibold">¡Felicidades!, has sido seleccionado.</h2>
                    <p className="mt-4">Al parecer tu rendimiento es excelente, tu entrenador decidió agregarte a una selección, ¡eres genial!</p>
                    <button 
                        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick={closeModal}
                    >
                        Cerrar
                    </button>
                </Modal>
            </div>
        </>
    );
};
