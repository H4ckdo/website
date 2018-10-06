import React from 'react'
import ReactDOM from 'react-dom'
import scrollToElement from 'scroll-to-element'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      changeBackground: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      let y = window.pageYOffset;
      let container = document.querySelector('.about-container-content');
      //console.log(y ,' ', container.clientHeight);
      let changeBackground = y > 50//container.clientHeight;
      this.setState({ changeBackground });
    })
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

  closeMenu() {
    let isOpen = false;
    let menuControl = ReactDOM.findDOMNode(this.refs.menuControl);
    this.setState({ isOpen }, () => {
      menuControl.innerHTML = "menu";
    });
  }

  goTo(link) {
    window.location.href = link;
  }

  render(props) {
    let { isOpen, changeBackground } = this.state;
    return (
      <div className={`header-background ${changeBackground ? "background-contrast" : ""}`}>
        <div className="wrap-header">
          <div>
            <div className="wrap-logo">
              <span className={`wrap-logo__menu-select ${isOpen ? "menu-active" : ""}`} onClick={this.handleMenu.bind(this)}><i ref="menuControl" className="material-icons">menu</i></span>
              <img id="logo" src="/assets/images/logo.webp" alt="" />
            </div>
          </div>
          <div>
            <header className="main-header">
              <nav className={`main-header__mobile ${isOpen ? "menu-appear-aside" : "menu-disappear-aside hide"}`}>
                <ul>
                  <li className="appear-bottom" onClick={this.goTo.bind(this, "https://medium.com/@Hackdo")}>
                    <span>
                      <div className="menu-text">Articulos</div>
                      <div className="bottom-mark"></div>
                    </span>

                  </li>
                  <li className="appear-bottom" onClick={this.props.onSelect.bind(this, '#KnowUs', this.closeMenu.bind(this))}>
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
                      <div className="menu-text">Investigación</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                </ul>
              </nav>

              <nav className="main-header__desktop">
                <ul>
                  <li className="appear-left" onClick={this.goTo.bind(this, "https://medium.com/@Hackdo")}>
                    <span>Articulos</span>
                    <div className="bottom-mark"></div>
                  </li>
                  <li className="appear-left" onClick={this.props.onSelect.bind(this, '#KnowUs')}>
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
                    <span>Investigación</span>
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
