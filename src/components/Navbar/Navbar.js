import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
              </li>
            </ul>
            <CartWidget num="3"/>
          </div>
        </div>
      </nav>
    )
}

export default Navbar