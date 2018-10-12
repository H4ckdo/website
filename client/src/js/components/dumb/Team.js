import React from 'react';
import KnowUs from './KnowUs.js'

class Team extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { data, setup } = this.props;
    let selected = data[setup.selected];
    return (
      <section id="Team">
        <article className="team-container">
          <h1 className="team-container__title">EQUIPO HACKDÓ</h1>
          <div className="team-container__wrap-list">
            <div className="team-container__wrap-list__main">
              <div className="wrap-member-selected">
                <div className="wrap-member-selected__image" style={{ backgroundImage: `url(${selected.image})` }}></div>
                <div className="wrap-member-selected__bio">
                  <span className="wrap-member-selected__name">{selected.name}</span>
                  <br />
                  <span className="wrap-member-selected__status">{selected.status}</span>
                  <p className="wrap-member-selected__text">
                    {selected.bio}
                </p>
                </div>

              </div>
            </div>
            <div className="team-container__wrap-list__items">
              <KnowUs selected={setup.selected} data={data} onSelect={this.props.onSelect.bind(this)} />
            </div>
          </div>
        </article>
      </section>
    )
  }
}

export default Team;
