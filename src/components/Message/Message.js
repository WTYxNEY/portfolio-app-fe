import React from 'react'
import { Alert } from 'reactstrap';

const Message = ({ message, status }) => {
    return (
        <Alert color={status ? "success" : "danger"} style={{marginTop: '1rem', marginBottom: '-8px'}}>
            {message}
        </Alert>
    )
}

export default Message
