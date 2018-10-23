import React from 'react';
import BottomMarker from './BottomMarker.js'
//import Gallery from './Gallery.js'
import Header from './Header.js'
import AliceCarousel from 'react-alice-carousel';


class About extends React.Component {
  constructor() {
    super();
    this.state = { hideLogo: false }
  }

  playAnimation() {
    let counter = 0;
    let reset = false;
    let $titles = document.querySelectorAll(".portada-title");
    $titles[0].classList.remove("hidden");
    setInterval(() => {
      if (reset) {
        $titles[$titles.length - 1].classList.add("hidden");
        $titles[$titles.length - 1].classList.add("disappear-title");
        $titles[$titles.length - 1].classList.remove("appear-title");
        reset = false;
        counter = 0;
        setTimeout(() => {
          $titles.forEach($item => {
            $item.classList.remove("appear-title");
            $item.classList.remove("disappear-title");
            $item.classList.add("hidden");
          })
          $titles[0].classList.remove("hidden");
          $titles[0].classList.add("appear-title");
        }, 1500)
      } else {
        $titles[counter].classList.add("hidden");
        $titles[counter].classList.add("disappear-title");
        $titles[counter].classList.remove("appear-title");
        //console.log("siguiente animacion");
        setTimeout(() => {
          $titles[counter + 1].classList.remove("hidden");
          $titles[counter + 1].classList.add("appear-title");
          counter++;
          if (counter === $titles.length - 1) reset = true;
        }, 1000);
      }
    }, 8000);
  }

  scrollAnimation() {
    let PORTADA = new ScrollMagic.Controller();
    let displayed = false;
    new ScrollMagic.Scene({ triggerElement: "#sectionAbout", duration: document.getElementById("sectionAbout").offsetHeight, offset: 0 })
      .on("enter leave", (e) => {
        this.props.selectHeader(" ");
      })
      //.addIndicators()
      .addTo(PORTADA)

    new ScrollMagic.Scene({ triggerElement: "#sectionAbout", duration: 250, offset: 200 })
      .setPin("#sectionAbout")
      //.addIndicators() // add indicators (requires plugin)
      .addTo(PORTADA)
  }

  componentDidMount() {
    this.playAnimation();
    this.scrollAnimation();
  }

  changeLogoState(hideLogo) {
    this.setState({ hideLogo });
  }

  render() {
    let isOpen = false;
    let { setup } = this.props;
    return (
      <div className="about-container" id="About">
        <div className="about-container-filter"></div>
        <Header setup={setup} onScroll={this.changeLogoState.bind(this)} onSelect={this.props.onSelect} />
        <div className="wrap-section-about">
          <section id="sectionAbout">
            <div className={`${this.state.hideLogo ? "hide-logo" : "appear"} wrap-logo`}>
              <img id="logo" src="/assets/images/logo2.png" alt="" />
            </div>
            <article className="about-container-content">
              <div className="about-container-content__text">
                <i className="about-container-content__text__title">TRABAJAMOS PARA CONSTRUIR</i>
                <h1 className=" about-container-content__text__subtitle">
                  <div className="portada-title hidden">
                    <span>
                      <div className="portada-title__mark">COMUNIDADES</div> & CONOCIMIENTO
                    </span>
                  </div>
                  <div className="portada-title hidden">
                    <span>
                      <div className="portada-title__mark">ECOSISTEMAS</div> TECNOLÓGICOS
                    </span>
                  </div>
                  <div className="portada-title hidden">
                    <span>
                      <div className="portada-title__mark">PROYECTOS</div> CON IMPACTO SOCIAL
                    </span>
                  </div>
                  <div className="portada-title hidden">
                    <span>
                      <div className="portada-title__mark">PROYECTOS </div>INTERACTIVOS (NARRATIVAS)
                    </span>
                  </div>
                  <div className="portada-title hidden">
                    <span>
                      <div className="portada-title__mark">INVESTIGACIÓN</div> APLICADA
                    </span>
                  </div>
                </h1>
              </div>
              <div className="wrap-indicator-bottom" >
                <i onMouseEnter={this.props.hoveIndicator.bind(this, "#Foundation")} className="material-icons">keyboard_arrow_down</i>
              </div>
            </article>
          </section>
        </div>
      </div>
    )
  }

}

export default About;
