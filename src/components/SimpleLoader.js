import React from 'react'

const SimpleLoader = () => {
    return (
        <div className="d-flex justify-content-center align-item-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}

export default SimpleLoader