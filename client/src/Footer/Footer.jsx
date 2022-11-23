import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'
import footerLogo from '../Images/meeco-logo-white.svg'

function Footer() {
  return (<>
    <div className='footer__container'>
      <div className='container '>
        <div className='row'>
          <div className='col-md-3'>
            <Link className="navbar-brand pointer" to='/'>
              <img src={footerLogo} alt='Meeco' width={200} />
            </Link>
          </div>
          <div className='col-md-3'>
            <h6 className='footer__title'>Second Column</h6>
            <p className="footer__add">About</p>
            <p className="footer__add">Contact</p>
            <p className="footer__add">Service</p>
            <p className="footer__add">Terms & Conditions</p>
            <p className="footer__add">Help</p>
          </div>
          <div className='col-md-3'>
            <h6 className='footer__title'>Third Column</h6>
            <p className="footer__add">About</p>
            <p className="footer__add">Contact</p>
            <p className="footer__add">Service</p>
            <p className="footer__add">Terms & Conditions</p>
            <p className="footer__add">Help</p>
          </div>
          <div className='col-md-3'>
            <h6 className='footer__title'>Fourth Column</h6>
          </div>
        </div>
      </div>
    </div>

    <div className="footer__container py-4">
      <div className="container text-white">Copyrights <a href="/">copyrights meeco.org</a></div>
    </div>
  </>
  );
}

export default Footer;
