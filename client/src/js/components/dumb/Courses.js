import React from 'react';

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section id="Courses">
        <article className="wrap-courses-aside">
            <h1>CURSOS Y BOOTCAMPS</h1>
        </article>

        <article className="wrap-courses-content">
          <div className="wrap-courses-content__active">
            <h1 className="wrap-courses-content__active-title">ACTIVOS</h1>
            <h2 className="wrap-courses-content__active-subtitle">DESARROLLO DE PLATAFORMAS WEB.</h2>
            <span className="wrap-courses-content__active-current">BOOTCAMP</span>
            <p className="wrap-courses-content__active-current-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid natus voluptates nihil voluptatum adipisci rerum, saepe voluptatibus, aut consectetur magnam nisi qui perspiciatis accusamus labore cupiditate sequi explicabo porro exercitationem?
            </p>
          </div>
          <div className="wrap-courses-content__before">
            <h1 className="wrap-courses-content__before-title">ANTERIORES</h1>
            <ul className="wrap-courses-content__before-list">
              <li className="wrap-courses-content__before-list__item">
                <div className="wrap-courses-content__before-list__item-image"></div>
                <div className="wrap-courses-content__before-list__item-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid natus voluptates nihil voluptatum adipisci rerum, saepe voluptatibus, aut consectetur magnam nisi qui perspiciatis accusamus labore cupiditate sequi explicabo porro exercitationem?
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

export default Courses;
