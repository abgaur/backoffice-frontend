import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Navbar = ({
    signOut,
}) => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Backoffice</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                    <Link className="nav-link active" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>  
                <li className="nav-item">
                    <Link className="nav-link active" to="/productdetails/cfc356ef-1c24-42a8-9d35-6fbda5c371a1">Product Details</Link>
                </li>  
            </ul>
            </div>
        </div>
        <form class="container-fluid justify-content-end">
            <button class="btn btn-outline-success me-2" type="button" onClick={signOut}>Sign Out</button>
            
        </form>
    </nav>
  );
};

export default Navbar;