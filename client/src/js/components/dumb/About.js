import React from 'react';
import BottomMarker from './BottomMarker.js'
//import Gallery from './Gallery.js'
import Header from './Header.js'
import AliceCarousel from 'react-alice-carousel';


class About extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    let isOpen = false;
    const responsive = {
      1300: {
        items: 1
      }
    }
    return (
      <div className="about-container">
        <Header onSelect={this.props.onSelect} />
        <section id="sectionAbout">
          <div className="wrap-logo">
            <img id="logo" src="/assets/images/logo2.png" alt="" />
          </div>
          <div className="about-container__wrap-carousel">
            <AliceCarousel
              responsive={responsive}
              duration={1000}
              dotsDisabled={false}
              autoPlay={false}
              arrows={false}
            >
              <div className="about-container-content">
                <div className="about-container-content__text">
                  <i className="about-container-content__text__title">TRABAJAMOS PARA CONSTRUIR</i>
                  <h1 className="about-container-content__text__subtitle appear delay-1">COMUNIDADES & CONOCIMIENTO</h1>
                  <h2 className="about-container-content__text__phrases">
                    <span className="appear delay-2">ECOSISTEMAS TECNOLÓGICOS</span>
                    <br />
                    <span className="appear delay-3">PROYECTOS CON IMPACTO SOCIAL</span>
                    <br />
                    <span className="appear delay-4">PROYECTOS INTERALATIVOS (NARRATIVAS)</span>
                    <br />
                    <span className="appear delay-5">INVESTIGACIÓN APLICADA</span>
                  </h2>
                </div>
              </div>

              <div className="about-container-content">
                <div className="about-container-content__text">
                  <h1 className="about-container-content__text__subtitle appear delay-1">MISIÓN</h1>
                  <p className="about-container-content__text__copy">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias animi mollitia minima ad unde quidem illo voluptatem explicabo fuga. Asperiores voluptatem quod omnis maxime! Voluptates consectetur temporibus nam non. Iure.
                  </p>
                </div>
              </div>

              <div className="about-container-content">
                <div className="about-container-content__text">
                  <h1 className="about-container-content__text__subtitle appear delay-1">VISIÓN</h1>
                  <p className="about-container-content__text__copy">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias animi mollitia minima ad unde quidem illo voluptatem explicabo fuga. Asperiores voluptatem quod omnis maxime! Voluptates consectetur temporibus nam non. Iure.
                  </p>
                </div>
              </div>

            </AliceCarousel>

          </div>
        </section>

      </div>
    )
  }

}

export default About;
