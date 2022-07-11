import { useState } from 'react';
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import closeImg from '../../assets/vector.svg'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {


    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName='react-modal-overlay' className='react-modal-content'>
            <Container>

                <button type='button' onClick={onRequestClose} className="react-modal-close">
                    <img src={closeImg} alt="" />
                </button>

                <h2>Cadastrar Transação</h2>

                <input placeholder='Título' />

                <input type='number' placeholder='Valor' />

                <TransactionTypeContainer>
                    <button type='button'>
                        <img src={entradasImg} alt="Entradas" />
                        <span>Entrada</span>
                    </button>

                    <button type='button'>
                        <img src={saidasImg} alt="Saidas" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input placeholder='Categoria' />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}