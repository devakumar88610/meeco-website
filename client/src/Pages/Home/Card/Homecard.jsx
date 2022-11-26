import React from 'react'
import { HomeCardData } from '../../../data/homecard'
import './Homecard.css'

const Homecard = () => {
    return (
        <>
            <div className="container py-5">
                <h1 className='text-center mb-5'>Our Services</h1>
                <div className="row">
                    {HomeCardData.map(({ image, title, description, button, index }) => {
                        return (
                            <div className="col-md-4">
                                <div key={index} className='card my-3' >
                                    <img src={image} alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">{title}</h4>
                                        <p className='card-text'>{description}</p>
                                        <button className='btn__primary'>{button}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <h1 className='color'>Hello world</h1>
        </>
    )
}

export default Homecard