import React from 'react';

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollAnimation() {
    let COURSES = new ScrollMagic.Controller();
    let displayed = false;
    new ScrollMagic.Scene({ triggerElement: "#Courses", duration: "#Events", offset: -200 })
      .on("enter", () => {
        //console.log("enter");
        document.getElementById("Courses").classList.remove("hidden");
        document.querySelector(".wrap-courses-content__active").classList.add("push-up");
        document.querySelector(".wrap-courses-content__before").classList.add("push-up");
      })
      .on("leave", () => {
        //console.log("leave")
        document.getElementById("Courses").classList.add("hidden");
        document.querySelector(".wrap-courses-content__active").classList.remove("push-up");
        document.querySelector(".wrap-courses-content__before").classList.remove("push-up");
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(COURSES)
  }

  componentDidMount() {
    this.scrollAnimation();
  }

  render() {
    let { setup, data } = this.props;
    return (
      <section id="Courses" className="hidden">
        <article className="wrap-courses-aside">
          <h1>CURSOS Y BOOTCAMPS</h1>
        </article>

        <article className="wrap-courses-content">
          <div className="wrap-courses-content__active">
            <h1 className="wrap-courses-content__active-title">ACTIVOS</h1>
            {
              data.filter(item => item.status === "active").map((course, index) => {
                return (
                  <div key={index}>
                    <h2 className="wrap-courses-content__active-subtitle">{course.title}</h2>
                    <span className="wrap-courses-content__active-current"> {course.type === "bootcamp" ? "BOOTCAMP" : "CURSO"} </span>
                    <p className="wrap-courses-content__active-current-text">{course.text}</p>
                  </div>
                )
              })
            }
          </div>

          <div className="wrap-courses-content__before">
            <h1 className="wrap-courses-content__before-title">ANTERIORES</h1>
            <ul className="wrap-courses-content__before-list">
              {
                data.filter(item => item.status === "before").map((course, index) => {
                  return (
                    <li className="wrap-courses-content__before-list__item" key={index}>
                      <div className="wrap-courses-content__before-list__item-image"></div>
                      <div className="wrap-courses-content__before-list__item-text">
                        <span className="wrap-courses-content__before-list__item-text__title">{course.title}</span>
                        <p>{course.text}</p>
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

export default Courses;
