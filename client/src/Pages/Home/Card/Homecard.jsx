import React from 'react'
import { HomeCardData } from '../../../data/homecard'

const Homecard = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {
                        HomeCardData.map(({ image, title, description, button, index }) => {
                            return (
                                <div className="col-md-4">
                                    <div key={index} className='card shadow my-3' >
                                        <img src={image} alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">{title}</h4>
                                            <p className='card-text'>{description}</p>
                                            <button className='btn button__primary'>{button}</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Homecard