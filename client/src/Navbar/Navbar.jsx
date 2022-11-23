import React from "react";
import { Link } from 'react-router-dom'
import Logo from "../Images/Logo.svg";
import "../Navbar/Navbar.css";
import { Navbar } from "react-bootstrap";
import { SocialMedia } from "../data/navdata";
import { navMenu } from "../data/navdata";
import Searchbar from "./Searchbar";

function NavigationBarOne() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {open && <Searchbar />}
      <nav
        style={{ backgroundColor: "#0541a8" }}
        className='navbar navbar-expand-lg text-white'
      >
        <div className='container'>
          <div className='navbar-brand' style={{ fontSize: "18px" }}>
            Welcome to Meeco
          </div>

          <div className='navbar-nav'>
            {SocialMedia.map(({ icon, link }, index) => {
              return (
                <li key={index}>
                  <Link
                    target='_blank'
                    className=' btn__sm__icon'
                    href={link}
                  >
                    <i className={icon}></i>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      </nav>

      <nav className='navbar navbar-expand-lg navbar-light bg-white sticky-nav'>
        <div className='container py-2'>
          <Link className="navbar-brand pointer" to='/'>
            <img src={Logo} alt='Meeco' width={200} />
          </Link>

          <Navbar.Toggle
            className='fa-solid fa-burger-soda ml-auto'
            aria-controls='navbarScroll'
          />
          <Navbar.Collapse id='navbarScroll'>
            <nav
              className='navbar-nav m-auto my-2'
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              {navMenu.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <Link
                      style={{ fontWeight: 500, fontSize: 18 }}
                      className='nav-link px-3'
                      to={path}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </nav>
          </Navbar.Collapse>
          <button
            className='btn__icon mr-4 ml-3 '
            onClick={() => setOpen(true)}
          >
            <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
          </button>

          <button type='submit' className='button__nav'>
            Get in Touch
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavigationBarOne;
