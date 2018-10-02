import React from 'react';

function Header(props) {
  return (
    <div className="header-background">
      <div className="wrap-header">
        <div>
          <div className="wrap-logo">
            <img id="logo" src="/assets/images/logo.png" alt="" />
          </div>
        </div>
        <div>
          <header className="main-header">
            <nav>
              <ul>
                <li>
                  <span>Articulos</span>
                  <div className="bottom-mark"></div>
                </li>
                <li>
                  <span>Conocenos</span>
                  <div className="bottom-mark"></div>
                </li>
                <li>
                  <span>Cursos</span>
                  <div className="bottom-mark"></div>
                </li>
                <li>
                  <span>Eventos</span>
                  <div className="bottom-mark"></div>
                </li>
                <li>
                  <span>Investigacion</span>
                  <div className="bottom-mark"></div>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
}


export default Header;
