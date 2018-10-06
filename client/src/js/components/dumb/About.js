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
        <Header onSelect={this.props.onSelect}/>
        <div className="about-container-content appear-left">
          <BottomMarker data={<h1>Fundación Hackdó</h1>} />
          <p className="about-container-content__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officia odit enim? Cumque repudiandae voluptatem quas perferendis nesciunt, dicta soluta! Nesciunt delectus.
          </p>
        </div>
      </div>
    )
  }

}

export default About;
