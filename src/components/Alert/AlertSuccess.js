import React from 'react'
import Swal from 'sweetalert2'

const AlertSuccess = (message) => {
    return (
        <>
             {
    Swal.fire({
        icon: 'success',
        title: `${message}`,
        showConfirmButton: false,
        timer: 1500
    })
}
        </>
    )
}

export default AlertSuccess
