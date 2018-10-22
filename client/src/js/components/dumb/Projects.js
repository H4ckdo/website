import React from 'react';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollAnimation() {
    let PROYECT = new ScrollMagic.Controller();
    let displayed = false;
    new ScrollMagic.Scene({ triggerElement: "#Projects", duration: "#Courses", offset: -200 })
      .on("enter", () => {
        //console.log("enter");
        document.getElementById("Projects").classList.remove("hidden");
        let container = document.querySelector(".wrap-projects__unactive");
        if (container) {
          container.classList.add("push-up");
        }
      })
      .on("leave", () => {
        //console.log("leave")
        document.getElementById("Projects").classList.add("hidden");
        let container = document.querySelector(".wrap-projects__unactive");
        if (container) {
          container.classList.remove("push-up");
        }
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(PROYECT)
  }

  componentDidMount() {
    this.scrollAnimation();
  }

  render() {
    let { data, setup } = this.props;
    return (
      <section id="Projects" className="hidden">
        <article className="wrap-project-aside">
          <h1 className="wrap-project-aside__title">PROYECTOS</h1>
        </article>
        <article className="wrap-projects">
          <div className="wrap-projects__unactive">
            {/*<h1 className="wrap-projects__unactive-title">OTROS</h1>*/}
            <ul>
              {
                data.map((project, index) => {
                  return (
                    <li className="wrap-projects__unactive-item" key={index}>
                      <a href={project.link || "#"} target="_blank">
                        <div className="wrap-projects__unactive-item-image" style={{ backgroundImage: `url(${project.image})`}}>
                          <span className="wrap-projects__unactive-item-image__tag">{project.type}</span>
                        </div>
                      </a>
                      <div className="wrap-projects__unactive-item-content">
                        <span className="wrap-projects__unactive-item-name">{project.title}</span>
                        <p className="wrap-projects__unactive-item-text">{project.text}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </article>
      </section>
    )
  }
}

export default Projects;
