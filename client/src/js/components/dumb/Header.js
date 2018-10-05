import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }

  handleMenu() {
    let { isOpen } = this.state;
    isOpen = !isOpen;
    let menuControl = ReactDOM.findDOMNode(this.refs.menuControl);
    this.setState({ isOpen }, () => {
      if (isOpen) {
        menuControl.innerHTML = "close";
      } else {
        menuControl.innerHTML = "menu";
      }
    });
  }

  render(props) {
    let { isOpen } = this.state;
    return (
      <div className="header-background">
        <div className="wrap-header">
          <div>
            <div className="wrap-logo">
              <span className={`wrap-logo__menu-select ${isOpen ? "menu-active" : ""}`} onClick={this.handleMenu.bind(this)}><i ref="menuControl" className="material-icons">menu</i></span>
              <img id="logo" src="/assets/images/logo.webp" alt="" />
            </div>
          </div>
          <div>
            <header className="main-header">
              <nav className={`main-header__mobile ${isOpen ? "menu-appear-aside" : "menu-disappear-aside"}`}>
                <ul>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">Articulos</div>
                      <div className="bottom-mark"></div>
                    </span>

                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">Conócenos</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">Cursos</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">Eventos</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">Investigacion</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                </ul>
              </nav>

              <nav className="main-header__desktop">
                <ul>
                  <li className="appear-left">
                    <span>Articulos</span>
                    <div className="bottom-mark"></div>
                  </li>
                  <li className="appear-left">
                    <span>Conócenos</span>
                    <div className="bottom-mark"></div>
                  </li>
                  <li className="appear-left">
                    <span>Cursos</span>
                    <div className="bottom-mark"></div>
                  </li>
                  <li className="appear-left">
                    <span>Eventos</span>
                    <div className="bottom-mark"></div>
                  </li>
                  <li className="appear-left">
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
}


export default Header;
