import React from 'react'
import "./Header 1.css"


const HeaderOne = () => {
  return (
    <>
      <nav className='bg__primary'>
        <div className="container">
          <div className="header__one">
            <span className='text'>Welcome to Meeco</span>
            <div className="sm__icons__group">
              <a href="https://www.facebook.com/people/Meeco/100084074254975/" className='sm__icon' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/meeco.org.in" className='sm__icon' target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-instagram'></i></a>
              <a href="https://twitter.com/meeco_org_in" className='sm__icon' target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-twitter'></i></a>
              <a href="https://github.com/devakumar88610" className='sm__icon' target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-github'></i></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderOne