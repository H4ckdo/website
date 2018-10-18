import React from 'react';
import KnowUs from './KnowUs.js'

class Team extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollAnimation() {
    let displayed = false;
    let TEAM = new ScrollMagic.Controller();
    new ScrollMagic.Scene({ triggerElement: "#Team", duration: "#Projects", offset: -150 })
      //.setClassToggle("#Team", "hidden")
      .on("enter", () => {
        //console.log("enter");
        document.getElementById("Team").classList.remove("hidden");
        let container = document.querySelector(".know-us-container");
        let teamContainer = document.querySelector(".team-container");
        if (container && teamContainer) {
          teamContainer.classList.add("push-up");
          if (displayed) return;
          container.querySelectorAll(".member").forEach((item, index) => {
            if (index === 0) return;
            item.classList.add("appear");
          });
          displayed = true;
        }
      })
      .on("leave", () => {
        document.getElementById("Team").classList.add("hidden");
        //console.log("leave")
        let container = document.querySelector(".know-us-container");
        let teamContainer = document.querySelector(".team-container");
        if (container && teamContainer) {
          teamContainer.classList.remove("push-up");
        }
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(TEAM)
  }

  componentDidMount() {
    this.scrollAnimation();
  }

  render() {
    let { data, setup } = this.props;
    let selected = data[setup.selected];
    return (
      <section id="Team" className="hidden">
        <article className="team-title">
          <h1 className="team-container__title">EQUIPO HACKDÓ</h1>
          <div className="wrap-mision">
            <h1 className="wrap-mision__title">MISION</h1>
            <p className="wrap-mision__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, beatae sequi ducimus distinctio ipsa consectetur, ipsum assumenda dolor aperiam iure nemo iste dicta corrupti eveniet quos laborum nisi tempora ad?
            </p>
          </div>

          <div className="wrap-vision">
            <h1 className="wrap-vision__title">VISION</h1>
            <p className="wrap-vision__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, beatae sequi ducimus distinctio ipsa consectetur, ipsum assumenda dolor aperiam iure nemo iste dicta corrupti eveniet quos laborum nisi tempora ad?
            </p>
          </div>

        </article>
        <article className="team-container">
          <div className="team-container__wrap-list">
            <div className="team-container__wrap-list__main">
              <div className="wrap-member-selected" >
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
