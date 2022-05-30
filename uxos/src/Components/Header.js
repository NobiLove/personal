import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  function onClickHandle() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
  }
  return (
    <>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="">
              <span>
                UXOS
              </span>
            </a>
            <div className="navbar-collapse" id="">
              <div className="custom_menu-btn">
                <button onClick={onClickHandle}>
                  <span className="s-1"> </span>
                  <span className="s-2"> </span>
                  <span className="s-3"> </span>
                </button>
              </div>
              <div id="myNav" className="overlay">
                <div className="overlay-content">
                  <Link onClick={onClickHandle} to="/Home">Home</Link>
                  <Link onClick={onClickHandle} to="/About">About</Link>
                  <Link onClick={onClickHandle} to="/Features">Features</Link>
                  <Link onClick={onClickHandle} to="/Contact">Contact</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

