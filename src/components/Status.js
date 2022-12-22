import React from 'react';

const Status = ({ status }) => {

    if (status === "Dead") {
        return (
            <p className=' position-absolute  badge bg-danger rounded m-2 fs-6' >
                {status}
            </p>
        )
    } else if (status === "Alive") {
        return (
            <p className=' position-absolute  badge bg-success rounded m-2 fs-6' >
                {status}
            </p>
        )
    } else {
        return (
            <p className=' position-absolute  badge bg-secondary rounded m-2 fs-6' >
                {status}
            </p>
        )
    }

}

export default Status;
