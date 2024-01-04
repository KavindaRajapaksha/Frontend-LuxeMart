import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
const Header = () => {
  return (
    <div>
      <header className='header-top-strip py-1'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <p className='mt-1' style={{ color: 'white', fontSize: 12, marginBottom: 5 }}> <CiLocationOn size={20} />Store Location : LuxeMART-Hapugala,Galle</p>
            </div>
            <div className='col-md-6 d-flex justify-content-end'>
              <Link to='/login' className="logging">
                Sign In
              </Link>
              <span className="divider">/</span>
              <Link to='/signup' className="logging">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-2'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-12 col-sm-2' >
              <Link to="/logo" style={{ display: 'flex' }}>
                <img src="/images/logo.png" alt="logo" className="align-self-center" style={{ inlineSize: '50px', blockSize: '50px' }} />
              </Link>
            </div>
            <div className='col-12 col-sm-1'>
              <h3>
                <Link to="/" className="navbar-brand px-0">
                  LuxeMART
                </Link>
              </h3>
            </div>
            <div className='col-11 col-sm-5 mt-3 mt-sm-0'>
              <div className='input-group'>
                <form className="d-flex ms-auto " role="search" >
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="&#x1F50D; Search Product Here..."
                    aria-label="Search  Product Here..."
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className='col-4'>
              <div className='header-upper-links d-flex align-items-center justify-content-end'>
                <div className='d-flex flex-column align-items-center'>
                  <Link to="/favourites" style={{ textDecoration: 'none', display: 'flex' }}>
                    <img src="/images/favourite.svg" alt="favourite" className="align-self-center" style={{ inlineSize: '30px', blockSize: '30px' }} />
                    <p className="ms-2 text-black" style={{ fontSize: '12px' }}>Favourite <br /> wishlist </p>
                  </Link>
                </div>
                <div className="vertical-divider" />
                <div className='d-flex flex-column align-items-center ms-1'>
                  <Link to="/cart" className='d-flex align-items-center gap-1 text-black' style={{ textDecoration: 'none', display: 'flex' }}>
                    <div className="position-relative">
                      <img src="/images/cart.svg" alt="cart" className="align-self-center" style={{ inlineSize: '35px', blockSize: '35px' }} />
                      <span className='badge bg-green text-dark position-absolute top-0 start-100 translate-middle badge-circle'>
                        0
                      </span>
                    </div>
                    <div className='mb-2 ms-1 mt-auto'>Rs. 0</div>
                  </Link>
                </div>

                <div>
                  <Link>
                    <img src="/" alt="" />
                    <p></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: '300px' }}>
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/pages"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutUs" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactUs" className="nav-link">
                  Contact Us
                </NavLink>
              </li>

            </ul>
            <div className="ms-auto" style={{ marginRight: '100px' }}>
              <FaPhoneVolume style={{ fontSize: '20px', marginRight: '8px' }} />
              <span style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', fontWeight: 'normal' }}>+9477 590 3456</span>
            </div>


          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
