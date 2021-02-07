import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch } from 'react-redux'

import { deletePortfolio } from '../../actions/portfolio'
import AlertSuccess from '../Alert/AlertSuccess'

const ModalComponent = ({ label, portfolio_id, portfolio_title }) => {
    let timerID = useRef(null);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const handleDelete = (e) => {
        e.preventDefault();
        timerID = setTimeout(() => {
            AlertSuccess("Delete successfully")
            dispatch(deletePortfolio(portfolio_id));
        }, 2000)
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>{label}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Confermation</ModalHeader>

                <ModalBody>
                    <p>{`Are you sure to deleting ${portfolio_title} portfolio?`}</p>
                </ModalBody>

                <ModalFooter>
                    <Button color="danger" onClick={handleDelete}>Delete</Button>{' '}
                    <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>

            </Modal>
        </div>
    );
}

export default ModalComponent
