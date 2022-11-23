import { BrowserRouter, Routes, Route } from "react-router-dom";



import NavigationBar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import React, { Component } from 'react'

import Services from "./Pages/Services";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='about' element={<About />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
