const React = require('react');
const { Link } = require('react-router-dom');
import AliceCarousel from 'react-alice-carousel';

class Gallery extends React.Component {
  constructor() {
    super();
  }

  render() {
    const responsive = {
      1300: {
        items: 2,
        stagePadding: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    }

    return (
      <article className="wrap-gallery">
        <div className="wrap-gallery__tag">
          <span>GALERÍA</span>
        </div>
        <AliceCarousel
          responsive={responsive}
          autoPlay={false}
          duration={800}
          dotsDisabled={true}
        >
          <div className="wrap-image">
            <div className="wrap-image__image" style={{ backgroundImage: `url(/assets/images/portada.jpg)` }}></div>
          </div>

          <div className="wrap-image">
            <div className="wrap-image__image" style={{ backgroundImage: `url(/assets/images/bootcamp.jpg)` }}></div>
          </div>

          <div className="wrap-image">
            <div className="wrap-image__image" style={{ backgroundImage: `url(/assets/images/hackdoconf.jpg)` }}></div>
          </div>

          <div className="wrap-image">
            <div className="wrap-image__image" style={{ backgroundImage: `url(/assets/images/quibdojs.jpg)` }}></div>
          </div>

          <div className="wrap-image">
            <div className="wrap-image__image" style={{ backgroundImage: `url(/assets/images/hackdoconf-2.jpg)` }}></div>
          </div>

          <div className="wrap-image">
            <div className="wrap-image__image" style={{ backgroundImage: `url(/assets/images/hackdoconf-3.jpg)` }}></div>
          </div>

          <div className="wrap-image">
            <div className="wrap-image__image" style={{ backgroundImage: `url(/assets/images/hackdoconf-4.jpg)` }}></div>
          </div>
        </AliceCarousel>
      </article>

    )
  }
}

module.exports = Gallery;
