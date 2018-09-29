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
        items: 1
      }
    }

    return (
      <div className="wrap-gallery-header">
        <AliceCarousel
          responsive={responsive}
          autoPlay={false}
          duration={1000}
          dotsDisabled={true}
        >
        <div className="wrap-image" style={{ backgroundImage: `url(/assets/images/portada.jpg)` }}></div>
        <div className="wrap-image" style={{ backgroundImage: `url(/assets/images/portada.jpg)` }}></div>
        </AliceCarousel>
      </div>
    )
  }
}

module.exports = Gallery;
