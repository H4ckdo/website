import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Gallery from './Gallery.js'

class Events extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollAnimation() {
    let EVENTS = new ScrollMagic.Controller();
    let displayed = false;
    new ScrollMagic.Scene({ triggerElement: "#Events", duration: "#Sponsors", offset: -200 })
      .on("enter", () => {
        //console.log("enter");
        document.getElementById("Events").classList.remove("hidden");
        document.querySelector(".wrap-events").classList.add("push-up");
      })
      .on("leave", () => {
        //console.log("leave")
        document.getElementById("Events").classList.add("hidden");
        document.querySelector(".wrap-events").classList.remove("push-up");
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(EVENTS)
  }

  componentDidMount() {
    this.scrollAnimation();
  }

  render() {
    let { data, setup } = this.props;
    let current = data[setup.current];
    const responsive = {
      1300: {
        items: 2
      }
    }

    return (
      <section id="Events" className="hidden">
        <article className="wrap-events-aside">
          <h1 className="wrap-events-aside__title">EVENTOS</h1>
        </article>
        <article className="wrap-events">
          <section className="wrap-events__content">
            <article className="wrap-events__content__speaker">
              <div className="wrap-events__content__speaker__next">PROXIMO</div>
              <div className="wrap-events__content__speaker__image" style={{ backgroundImage: `url(${current.speaker.image})` }}></div>
              <span className="wrap-events__content__speaker__name">{current.speaker.name}</span>
              <div className="wrap-events__content__speaker__ponente">PONENTE</div>
            </article>

            <article className="wrap-events__content__about">
              <h1 className="wrap-events__content__about__title">{current.title}</h1>
              <p className="wrap-events__content__about__text">{current.text}</p>
              <div className="wrap-events__content__about__register">
                INSCRIBETE
              </div>
            </article>
          </section>
          <section className="wrap-events__content-before">
            <div className="wrap-events__content-before-title">
              <span>ANTERIORES</span>
            </div>
            <div className="wrap-events__content-before__gallery">
              <AliceCarousel
                responsive={responsive}
                autoPlay={false}
                duration={1000}
                dotsDisabled={true}
              >
                {
                  data.filter((element, index) => setup.current !== index).map((element, index) => {
                    return (
                      <div className="wrap-events__content-before__gallery__content" key={index}>
                        <div className="wrap-events__content-before__gallery__content__image" style={{ backgroundImage: `url(${element.image})` }}></div>
                        <div className="wrap-events__content-before__gallery__content__image__text">
                          <h1>{element.title}</h1>
                          <p>
                            {element.text}
                          </p>
                        </div>
                      </div>
                    )
                  })
                }
              </AliceCarousel>
            </div>
          </section>
          <section id="Gallery">
           <Gallery/>
          </section>
        </article>
      </section>
    )
  }
}

export default Events;
