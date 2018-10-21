import React from 'react';

class Foundation extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollAnimation() {
    let FOUNDATION = new ScrollMagic.Controller();
    new ScrollMagic.Scene({ triggerElement: "#Foundation", duration: "#Team", offset: -300 })
      .on("enter", () => {
        //console.log("enter");
        document.getElementById("Foundation").classList.remove("hidden");
        document.querySelector(".foundation-content__mision").classList.add("push-up");
        document.querySelector(".foundation-content__about").classList.add("push-up");
      })
      .on("leave", () => {
        document.getElementById("Foundation").classList.add("hidden");
        document.querySelector(".foundation-content__mision").classList.remove("push-up");
        document.querySelector(".foundation-content__about").classList.remove("push-up");
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(FOUNDATION)
  }

  componentDidMount() {
    this.scrollAnimation();
  }

  render() {
    return (
      <section id="Foundation" className="hidden">
        <aside className="foundation-aside">
          <h1>¿QUIENES SOMOS?</h1>
        </aside>

        <div className="foundation-content">
          <article className="foundation-content__about">
            <h1>FUNDACIÓN HACKDÓ</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas nobis mollitia nisi nemo eius perspiciatis nesciunt veritatis soluta eos alias, officiis sed suscipit dolores laboriosam delectus quae, eveniet omnis?
          </p>
          </article>

          <article className="foundation-content__mision">
            <h1>MISIÓN</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas nobis mollitia nisi nemo eius perspiciatis nesciunt veritatis soluta eos alias, officiis sed suscipit dolores laboriosam delectus quae, eveniet omnis?
          </p>
          </article>

          <article className="foundation-content__vision">
            <h1>VISIÓN</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas nobis mollitia nisi nemo eius perspiciatis nesciunt veritatis soluta eos alias, officiis sed suscipit dolores laboriosam delectus quae, eveniet omnis?
          </p>
          </article>
        </div>
      </section>
    )
  }
}
export default Foundation;
