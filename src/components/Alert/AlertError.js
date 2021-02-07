import React from 'react'
import Swal from 'sweetalert2'

const AlertError = (message) => {
    return (
        <>
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${message}`,
                })
            }
        </>
    )
}

export default AlertError
