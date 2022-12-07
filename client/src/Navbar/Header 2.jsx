import React from "react";
import { Link } from 'react-router-dom'
import Logo from "../Images/Logo.svg";
import { navMenu } from "../data/navdata";
import Searchbar from "./Searchbar";
import HeaderOne from "./Header 1";
import "./Header 2.css"

function NavigationBar() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            {open && <Searchbar />}
            <HeaderOne />
            <nav className='navbar navbar-expand-lg navbar-light bg-white sticky-nav'>
                <div className='container py-2'>
                    <Link className="navbar-brand pointer" to='/'>
                        <img src={Logo} alt='Meeco' width={200} />
                    </Link>
                    <div
                        className='navbar-nav m-auto my-2'
                        style={{ maxHeight: "300px" }}
                        navbarScroll
                    >
                        {navMenu.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <Link className='nav-link px-3' to={path}> {name}</Link>
                                </li>
                            );
                        })}
                    </div>

                    <div className="nav__right">
                        <button
                            className='btn__icon'
                            onClick={() => setOpen(true)}
                        >
                            <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
                        </button>
                        <button type='submit' className='hire__btn'>
                            Hire Us
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default NavigationBar;
