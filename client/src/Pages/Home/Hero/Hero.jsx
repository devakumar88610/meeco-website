import react from "react";
import "./Hero.css";

import SliderOne from "../../../Images/Sileder-one.jpg";
import SliderTwo from "../../../Images/Silder-two.jpg";
import SliderThree from "../../../Images/Slider-three.jpg";

class Hero extends react.Component {
  render() {
    return (
      <div
        id='carouselExampleFade'
        class='carousel slide carousel-fade'
        data-ride='carousel'
      >
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img src={SliderTwo} class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={SliderThree} class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={SliderOne} class='d-block w-100' alt='...' />
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-target='#carouselExampleFade'
          data-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='sr-only'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-target='#carouselExampleFade'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='sr-only'>Next</span>
        </button>
      </div>
    );
  }
}

export default Hero;
