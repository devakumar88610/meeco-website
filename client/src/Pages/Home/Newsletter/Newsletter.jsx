import './Newsletter.css'

const Newsletter = () => {
    return (
        <>
            <div className="newsletter__container bg__gradient">
                <div className="container">
                    <div className="newsletter__form">
                        <input type="text" placeholder="Enter your email" className="form__control" />
                        <button type='submit' className="newsletter__btn" ><i class="fa-sharp fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter