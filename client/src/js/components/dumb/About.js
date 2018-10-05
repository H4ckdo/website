import React from 'react';
import BottomMarker from './BottomMarker.js'
//import Gallery from './Gallery.js'
import Header from './Header.js'

class About extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="about-container">
        <Header />
        <div className="about-container-content appear-left">
          <BottomMarker data={<h1>Fundación Hackdó</h1>} />
          <p className="about-container-content__text">
            Comunidad de desarrolladores del Chocó (EL Africa dentro de Colombia).
            Somos un grupo emprendedor conformado por estudiantes y profesionales, comprometidos
            con la transformación social por medio del software, emprendimiento y la investigación.
          </p>
        </div>
      </div>
    )
  }

}

export default About;
