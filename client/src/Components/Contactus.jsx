import React, {Component} from "react";
import "../index.css";

class Contactus extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  updateHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log();
  };
  render() {
    return (
      <div className='container'>
        {/* <h1>{JSON.stringify(this.state)}</h1> */}
        <div className='row'>
          <form className='col-md-6'>
            <div className='form__group'>
              <i class='btn__icon fa-solid fa-user'></i>
              <input
                className='form__control'
                type='text'
                onChange={this.updateHandler}
                name='name'
                placeholder='Name'
              />
            </div>
            <div className='form__group'>
              <i class='btn__icon fa-solid fa-envelope'></i>
              <input
                className='form__control'
                type='text'
                onChange={this.updateHandler}
                name='email'
                placeholder='Email'
              />
            </div>
            <div className='form__group'>
              <i class='btn__icon fa-solid fa-phone'></i>
              <input
                className='form__control'
                type='text'
                onChange={this.updateHandler}
                name='phone'
                placeholder='Phone'
              />
            </div>
            <div className='form__group'>
              <textarea
                class='form__control'
                rows='3'
                onChange={this.updateHandler}
                name='message'
                placeholder='Message'
              ></textarea>
            </div>
            <button
              className='button__primary mt-5'
              type='submit'
              onClick={this.submitHandler}
            >
              Submit
            </button>
          </form>

          <div className='col-md-6'>
            <iFrame
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7618137500453!2d77.65094110412194!3d13.032662789634372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17348fe7416b%3A0x1a6c4867314e02db!2sSt.Vincent%20Pallotti%20School!5e0!3m2!1sen!2sin!4v1666607925529!5m2!1sen!2sin'
              width='600'
              height='450'
              Style='border:0;'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iFrame>
          </div>
        </div>
      </div>
    );
  }
}

export default Contactus;
