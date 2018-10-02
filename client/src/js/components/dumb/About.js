import React from 'react';
import BottomMarker from './BottomMarker.js'
import Gallery from './Gallery.js'
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
        <div className="about-container-content">
          <BottomMarker data={<h1>Fundación Hackdó</h1>} />
          <p className="about-container-content__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, quasi sit! Non nemo corporis voluptates amet itaque, repellendus odio inventore hic rerum in praesentium eveniet totam perspiciatis provident deleniti! Repudiandae!
          </p>
        </div>
      </div>
    )
  }

}

export default About;
