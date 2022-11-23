import "../Navbar/Searchbar.css";
import "../index.css";

import React from "react";
function Searchbar({open, onClose}) {
  if (open) {
    return null;
  }

  return (
    <div>
      <form className='search__bar__container'>
        <div className='form__group__search'>
          <button className='btn__icon__search' onClick={onClose}>
            <i class='fa-solid fa-xmark'></i>
          </button>
          <input
            type='text'
            placeholder='Search something you want!'
            className='form__control'
          />
          <button
            type='submit'
            className='btn__icon__search'
            aria-label='Start search'
          >
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
