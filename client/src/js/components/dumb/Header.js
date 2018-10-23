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
      this.setState({ changeBackground }, () => {
        this.props.onScroll(changeBackground);
      });
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
    let { setup } = this.props;
    return (
      <div className={`header-background ${changeBackground ? "background-contrast" : ""}`}>
        <div className="wrap-header">
          <div className="wrap-header__logo">
            <div className={`${changeBackground ? "appear-logo" : "hidden"} wrap-logo`}>
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
                      <div className="menu-text">ARTICULOS</div>
                      <div className="bottom-mark"></div>
                    </span>

                  </li>
                  <li className="appear-bottom" onClick={this.props.onSelect.bind(this, '#KnowUs', this.closeMenu.bind(this))}>
                    <span>
                      <div className="menu-text">FUNDACION</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">PROYECTOS</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">CURSOS/BOOTCAMPS</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">EVENTOS</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">PATROCINADORES</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">EQUIPO</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className="appear-bottom">
                    <span>
                      <div className="menu-text">AGRADECIMIENTOS </div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                </ul>
              </nav>

              <nav className="main-header__desktop">
                <ul>
                  <li className={`${ setup.selected === "Articles" ? "item-selected" : "" } `} onClick={this.goTo.bind(this, "https://medium.com/@Hackdo")}>
                    <span>
                      <div className="menu-text">ARTICULOS</div>
                      <div className="bottom-mark"></div>
                    </span>

                  </li>
                  <li className={`${setup.selected === "Foundation" ? "item-selected" : "" } `} onClick={this.props.onSelect.bind(this, '#Foundation', this.closeMenu.bind(this))}>
                    <span>
                      <div className="menu-text">FUNDACIÓN</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className={`${setup.selected === "Projects" ? "item-selected" : "" }`} onClick={this.props.onSelect.bind(this, '#Projects')}>
                    <span>
                      <div className="menu-text">PROYECTOS</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className={`${setup.selected === "Courses" ? "item-selected" : "" }`} onClick={this.props.onSelect.bind(this, '#Courses')}>
                    <span>
                      <div className="menu-text">CURSOS</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className={`${setup.selected === "Events" ? "item-selected" : "" }`} onClick={this.props.onSelect.bind(this, '#Events')}>
                    <span>
                      <div className="menu-text">EVENTOS</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className={`${setup.selected === "Sponsors" ? "item-selected" : "" }`} onClick={this.props.onSelect.bind(this, '#Sponsors')}>
                    <span>
                      <div className="menu-text">PATROCINADORES</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className={`${setup.selected === "Team" ? "item-selected" : "" }`} onClick={this.props.onSelect.bind(this, '#Team')}>
                    <span>
                      <div className="menu-text">EQUIPO</div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className={`${setup.selected === "Thanks" ? "item-selected" : "" }`} onClick={this.props.onSelect.bind(this, '#Thanks')}>
                    <span>
                      <div className="menu-text">AGRADECIMIENTOS </div>
                      <div className="bottom-mark"></div>
                    </span>
                  </li>
                  <li className={`${setup.selected === "Legal" ? "item-selected" : "" }`}>
                    <span>
                      <div className="menu-text">LEGAL </div>
                      <div className="bottom-mark"></div>
                    </span>
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
