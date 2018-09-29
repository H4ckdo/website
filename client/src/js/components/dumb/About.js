import React from 'react';
import BottomMarker from './BottomMarker.js'
import Gallery from './Gallery.js'

class About extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <article className="about-container">
        <section className="about-container__gallery">
          <Gallery/>
        </section>
        <section className="about-container__text">
          <BottomMarker data={<h1>Conócenos</h1>}/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate magni illum sapiente! Consequuntur minus doloremque deserunt. Numquam officiis mollitia unde, obcaecati architecto quidem. Ab architecto dolores nam neque voluptatem?
            </p>
        </section>
      </article>
    )
  }

}

export default About;
