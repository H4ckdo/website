import React from 'react';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { data } = this.state;
    return (
      <section id="Projects">
        <article className="wrap-project-aside">
          <h1 className="wrap-project-aside__title">PROYECTOS</h1>
        </article>
        <article className="wrap-projects">
          {
            /*
            */
          }
          <div className="wrap-projects__unactive">
            {/*<h1 className="wrap-projects__unactive-title">OTROS</h1>*/}
            <ul>
              <li className="wrap-projects__unactive-item">
                <div className="wrap-projects__unactive-item-image">
                  <span className="wrap-projects__unactive-item-image__tag">CURSO</span>
                </div>
                <div className="wrap-projects__unactive-item-content">
                  <span className="wrap-projects__unactive-item-name">SEMANA DE JAVASCRIPT</span>
                  <p className="wrap-projects__unactive-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid natus voluptates nihil voluptatum adipisci rerum, saepe voluptatibus, aut consectetur
                  </p>
                </div>
              </li>

              <li className="wrap-projects__unactive-item">
                <div className="wrap-projects__unactive-item-image">
                  <span className="wrap-projects__unactive-item-image__tag">MVP</span>
                </div>
                <div className="wrap-projects__unactive-item-content">
                  <span className="wrap-projects__unactive-item-name">OHSENSE</span>
                  <p className="wrap-projects__unactive-item-text">
                    Aplicación de comunicación en tiempo para sordos y el resto de la humanidad.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </section>
    )
  }
}

export default Projects;
