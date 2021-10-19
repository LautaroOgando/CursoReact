import React from 'react'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
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
                <Link to="/stock" className="nav-link active">Products</Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
        
    )
}

export default Navbar
