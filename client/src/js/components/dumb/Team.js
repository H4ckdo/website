import React from 'react';
import KnowUs from './KnowUs.js'

class Team extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { data } = this.state;
    return (
      <section id="Team">
        <article className="team-container">
          <h1 className="team-container__title">EQUIPO HACKDÓ</h1>
          <div className="team-container__wrap-list">
            <div className="team-container__wrap-list__main">
              <div className="wrap-member-selected">
                <div className="wrap-member-selected__image" style={{ backgroundImage: "url(/assets/images/member_5.jpg)" }}></div>
                <div className="wrap-member-selected__bio">
                  <span className="wrap-member-selected__name">Fredy Enrique Andrade</span>
                  <br/>
                  <span className="wrap-member-selected__status">PRESIDENTE</span>
                  <p className="wrap-member-selected__text">
                    Founder of @H4ckdo + @Quibdojs Javascript full stack developer. I write about programming, art, Traditional Animation and Watercolor
                </p>
                </div>

              </div>
            </div>
            <div className="team-container__wrap-list__items">
              <KnowUs />
            </div>
          </div>
        </article>
      </section>
    )
  }
}

export default Team;
