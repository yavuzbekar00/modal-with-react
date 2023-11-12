import React, { useState } from 'react'
import "./View.css"

function View() {
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }

    return (
        <div className='container'>
            <div className='contain'>
                <div>
                    <button onClick={handleModal} className='btn'>Open Modal</button>
                </div>

                {
                    modal &&
                    <div className='modal'>
                        <div className='modal-card'>
                            <div className='modal-btn'>
                                <button onClick={handleModal} className='btn'>Close Modal</button>
                            </div>
                            <div>
                                <h2 className='modal-head'>Modal</h2>
                                <p className='modal-paragraph'>
                                    Eu amet fugiat magna commodo non laborum consequat proident consequat cillum ad voluptate consequat. Lorem irure exercitation do laborum adipisicing proident cupidatat ad nostrud eu. Nisi aute eiusmod do velit proident anim consequat. Nostrud fugiat magna quis laboris.
                                </p>
                                <p className='modal-paragraph'>
                                    Eu amet fugiat magna commodo non laborum consequat proident consequat cillum ad voluptate consequat. Lorem irure exercitation do laborum adipisicing proident cupidatat ad nostrud eu. Nisi aute eiusmod do velit proident anim consequat. Nostrud fugiat magna quis laboris.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default View