import React from 'react';
import Sponsor1 from '../../../images/sponsor_1.jpg';
import Sponsor2 from '../../../images/sponsor_2.jpg';
import Sponsor3 from '../../../images/sponsor_3.png';
import Sponsor4 from '../../../images/sponsor_4.jpg';
import Sponsor5 from '../../../images/sponsor_5.jpg';
import Sponsor6 from '../../../images/sponsor_6.jpg';
import Sponsor7 from '../../../images/sponsor_7.png';
import Sponsor8 from '../../../images/sponsor_8.jpg';
import Sponsor9 from '../../../images/sponsor_9.jpg';
import Sponsor10 from '../../../images/sponsor_10.jpg';
import Sponsor11 from '../../../images/sponsor_11.png';

class Sponsors extends React.Component {
  constructor() {
    super();
  }

  scrollAnimation() {
    let SPONSORS = new ScrollMagic.Controller();
    let displayed = false;

    new ScrollMagic.Scene({ triggerElement: "#Sponsors", duration: document.getElementById("Sponsors").offsetHeight, offset: 0 })
      .on("enter leave", (e) => {
        if (e.type === "enter") {
          this.props.selectHeader("Sponsors");
        }
      })
      //.addIndicators()
      .addTo(SPONSORS)

    new ScrollMagic.Scene({ triggerElement: "#Sponsors", duration: "#Team", offset: -300 })
      .on("enter", () => {
        //console.log("enter");
        document.getElementById("Sponsors").classList.remove("hidden");
        document.querySelector(".wrap-sponsors").classList.add("push-up");
      })
      .on("leave", () => {
        //console.log("leave")
        document.getElementById("Sponsors").classList.add("hidden");
        document.querySelector(".wrap-sponsors").classList.remove("push-up");
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(SPONSORS)
  }

  componentDidMount() {
    window.addEventListener("load", () => this.scrollAnimation());
  }

  join() {
    //window.location.href = 'https://goo.gl/forms/fABJGuh1bqm3Ua5g2';
    window.open("https://goo.gl/forms/fABJGuh1bqm3Ua5g2");
  }

  render() {
    return (
      <section id="Sponsors" className="hidden">
        <aside className="sponsors_aside">
          <h1 >SPONSORS</h1>
        </aside>
        <div className="wrap-sponsors">
          <section className="section-sponsors">
            <article className="section-sponsors__article">
              <p className="section-sponsors__article__copy">
                <b>Gracias</b> a estos patrocinadores los proyectos de Hackdó son posibles, ayúdanos y conviértete en un patrocinador tu también.
                <button className="section-sponsors__article__copy__join" onClick={this.join.bind()}>Unirse</button>
              </p>
            </article>
            <article className="section-sponsors__article__list">
              <h2 className="section-sponsors__article__list__gold__title"></h2>
              <ol className="section-sponsors__article__list__gold">
                <li className="section-sponsors__article__list__gold__item">
                  <a href="https://nodesource.com" target="_blank">
                    <img className="section-sponsors__article__list__gold__img" src={`${Sponsor1}`} />
                  </a>
                </li>

                <li className="section-sponsors__article__list__gold__item">
                  <a href="http://www.barista-v.com/" target="_blank">
                    <img className="section-sponsors__article__list__gold__img" src={`${Sponsor2}`} />
                  </a>
                </li>

                <li className="section-sponsors__article__list__gold__item">
                  <a href="https://s4n.co/" target="_blank">
                    <img className="section-sponsors__article__list__gold__img" src={`${Sponsor3}`} />
                  </a>
                </li>

                <li className="section-sponsors__article__list__gold__item">
                  <a href="#" target="_blank">
                    <img className="section-sponsors__article__list__gold__img" src={`${Sponsor8}`} />
                  </a>
                </li>

                <li className="section-sponsors__article__list__gold__item">
                  <a href="http://www.comfachoco.com.co/" target="_blank">
                    <img className="section-sponsors__article__list__gold__img" src={`${Sponsor5}`} />
                  </a>
                </li>

                <li className="section-sponsors__article__list__gold__item">
                  <a href="https://twitter.com/colombia_dev" target="_blank">
                    <img className="section-sponsors__article__list__gold__img" src={`${Sponsor6}`} />
                  </a>
                </li>

                <li className="section-sponsors__article__list__gold__item">
                  <a href="http://www.comfachoco.com.co/" target="_blank">
                    <img className="section-sponsors__article__list__gold__img" src={`${Sponsor9}`} />
                  </a>
                </li>

                <li className="section-sponsors__article__list__gold__item">
                  <a href="http://www.comfachoco.com.co/" target="_blank">
                    <img className="section-sponsors__article__list__gold__img" src={`${Sponsor11}`} />
                  </a>
                </li>

                <li className="section-sponsors__article__list__gold__item">
                  <a href="http://www.comfachoco.com.co/" target="_blank">
                    <img className="section-sponsors__article__list__gold__img" src={`${Sponsor10}`} />
                  </a>
                </li>

              </ol>

              <h2 className="section-sponsors__article__list__silver__title"></h2>
              <ol className="section-sponsors__article__list__silver">
                <li className="section-sponsors__article__list__silver__item">
                  <a href="http://enamoratedelchoco.co/" target="_blank">
                    <img className="section-sponsors__article__list__silver__img" src={`${Sponsor4}`} />
                  </a>
                </li>

                <li className="section-sponsors__article__list__silver__item">
                  <a href="http://www.camarachoco.org.co/" target="_blank">
                    <img className="section-sponsors__article__list__silver__img" src={`${Sponsor7}`} />
                  </a>
                </li>
              </ol>
            </article>
          </section>
        </div>
      </section>
    )
  }
}

export default Sponsors;
