import React from 'react'
import hero1 from '../../../images/hero_1.jpg';
import hero2 from '../../../images/speaker_1.jpg';
import hero3 from '../../../images/speaker_9.jpg';
import hero4 from '../../../images/hero_4.jpg';
import hero5 from '../../../images/hero_5.jpeg';
import hero6 from '../../../images/hero_6.jpeg';
import voluntary1 from '../../../images/voluntary1.jpg';
import voluntary2 from '../../../images/voluntary2.jpg';
import voluntary3 from '../../../images/voluntary3.jpg';
import voluntary4 from '../../../images/voluntary4.jpeg';
import voluntary5 from '../../../images/voluntary5.jpeg';
import voluntary6 from '../../../images/voluntary6.jpeg';
import voluntary7 from '../../../images/voluntary7.jpeg';
import voluntary8 from '../../../images/voluntary8.jpeg';
import voluntary9 from '../../../images/voluntary9.jpeg';

class Thanks extends React.Component {
  constructor() {
    super();
    this.state = {
      heroes: [
        {
          title: `Juan Pablo Buriticá`,
          image: `${hero1}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              VP of Eng | Dir of HC/Metal | IT intern
                <a href="https://twitter.com/splice" target="_blank"> @splice</a>
              - I build distributed eng teams and Latinamerican dev communities
                <br />
              <a href="https://twitter.com/colombia_dev" target="_blank">@colombia_dev</a>
              <br />
              <a href="https://twitter.com/jsconfco" target="_blank">@jsconfco</a>
              <br />
              <a href="https://twitter.com/quecharla" target="_blank">@quecharla</a>
              <br />
              <a href="https://twitter.com/bogotaJS" target="_blank">@bogotaJS</a>
            </p>
          )
        },
        {
          title: `Julián Duque`,
          image: `${hero2}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Developer and Educator - Engineer at <a target="_blank" href="https://twitter.com/NodeSource">@NodeSource</a> - Co-Organizer at <a target="_blank" href='https://twitter.com/Suncoastjs'>@Suncoastjs</a> <a href='https://twitter.com/MedellinJS'>@MedellinJS</a> <a href='https://twitter.com/jsconfco'>@JSConfCo</a> {'{Medellín, St. Petersburg, FL}'} - Satán es la Cumbia
            </p>
          )
        },
        {
          title: 'Yibson Alexis Leudo',
          image: `${hero4}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Full-Stack Web Developer
              <br />
              apasionado con Angular y con .Net Core, me gusta compartir, aprender y enseñar todo lo que tenga que ver con tecnología.
            </p>
          )
        },
        {
          title: 'Yuji Kiriki',
          image: `${hero3}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Certified™ Buzzword© Surfer®. Living life async. Team homeopathy expert. Charlatan del SW. "Millennial Leader". My blog about SW: <a target="_blank" href="https://yujikiriki.github.io/">yujikiriki.com </a>
            </p>
          )
        },
        {
          title: 'Francisco Rafael Palacios',
          image: `${hero5}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Ing. Teleinformatico.
              Vinculado a medios de comunicación desde el año 2008, en labores ingenieriles y periodisticas.
              Actualmente labora vomo Freelance para Grace Producciones y es el redactor de deportes del periódico Siglo XXI.
            </p>
          )
        },
        {
          title: 'Burny Lucas Perea Gil',
          image: `${hero6}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Administrador de empresas, cuento con una amplia trayectoria en actividades relacionadas con la formación de emprendedores sociales y de negocios,
              procesos de incubación de empresas en el Departamento del Chocó.
            </p>
          )
        }
      ],
      voluntarios: [
        {
          title: 'Annyluz Rentería',
          image: `${voluntary3}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Soy estudiante en la normal  superior de quibdo y amo todo lo que tenga que ver con tecnología  y diseño de aplicaciones, páginas web, videojuegos etc...
            </p>
          )
        },
        {
          title: 'Liliana Ospina',
          image: `${voluntary9}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Estudiante de la ENSQ, Apasionada por el diseño gráfico 😸 y aprendiz de UI.
            </p>
          )
        },
        {
          title: 'Lexy Garcés',
          image: `${voluntary4}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Apasionada estudiante de ingeniería de Sistemas👩🏾‍💻, Técnica en Sistemas y en Programación de Software. #Diosesmiguía <b>#Picis</b> <b>#Afrocolombiana</b>
            </p>
          )
        },
        {
          title: 'Cristian Córdoba',
          image: `${voluntary5}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Tengo 21 años de edad, Soy Desarrollador Web Backend 🤗👨🏽‍💻, estudiante de Ingeniería de Sistemas, técnico en sistemas, técnico en programación. Amanten a la programación.
            </p>
          )
        },
        {
          title: 'Stiwar Asprilla',
          image: `${voluntary6}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Estudiante de ingeniería de sistemas apasionado por la programación web, creativo y  amante a la tecnología 👨🏾‍💻🔥
            </p>
          )
        },
        {
          title: 'Jhon E Palacios Mosquera',
          image: `${voluntary7}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Estudiante de ingeniería de sistemas 🖥👨🏾‍💻 soy un persona curiosa, me gusta la programación ver series y prácticar Depor 🏃🏾‍♂🚴🏾‍♂. ¡Gusto en conocerte!
            </p>
          )
        },
        {
          title: 'Andres Pinillos Pabon',
          image: `${voluntary8}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Soy un joven de 20 años estudiante de Ingeniería de Sistemas y técnico de sistemas, apasionado al Desarrollo web y a la programación,creativo cuando algo me llama la atención💻🖥
            </p>
          )
        },
        {
          title: 'Daniel Martinez',
          image: `${voluntary1}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Joven con una actitud positiva y de mucha Fe en Dios se apasionó aproximadamente a los 14 años por todo lo de sistemas en cómputo y todo lo que ha aprendido lo ha hecho por si mismo.
            </p>
          )
        },
        {
          title: 'Miguel Palacios',
          image: `${voluntary2}`,
          copy: (
            <p className="section-team__article__members__wrap-items__copy">
              Prospecto ingeniero en sistemas 🎛⌨📟🖥📱💼
              Tecnólogo en redes de datos🛰🖥📱📡
              Tauro♉; Geminis♊Creencia ⚛🕉✡✝☦☪☮☯🔯🕎 <a href="https://twitter.com/mich1500" target="_blank"> @mich1500</a>
            </p>
          )
        },
      ]
    }
  }


  scrollAnimation() {
    let THANKS = new ScrollMagic.Controller();
    let displayed = false;
    new ScrollMagic.Scene({ triggerElement: "#Thanks", duration: document.getElementById("Thanks").offsetHeight, offset: 0 })
      .on("enter leave", (e) => {
        if (e.type === "enter") {
          this.props.selectHeader("Thanks");
        }
      })
      //.addIndicators()
      .addTo(THANKS)

    new ScrollMagic.Scene({ triggerElement: "#Thanks", duration: "#Footer", offset: -290 })
      .on("enter", () => {
        //console.log("enter");
        document.getElementById("Thanks").classList.remove("hidden");
        document.querySelector(".wrap-team").classList.add("push-up");
      })
      .on("leave", () => {
        //console.log("leave")
        document.getElementById("Thanks").classList.add("hidden");
        document.querySelector(".wrap-team").classList.remove("push-up");
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(THANKS)
  }

  componentDidMount() {
    window.addEventListener("load", () => this.scrollAnimation());
  }

  render() {
    let { heroes, voluntarios } = this.state;
    return (
      <section id="Thanks" className="hidden">
        <aside className="thanks-aside">
          <h1>AGRADECIMIENTOS ESPECIALES</h1>
        </aside>

        <div className="wrap-team">
          <section className="section-team">
            <article className="section-team__article">
              <p className="section-team__article__copy">
                <b>Muchas Gracias</b> a estos héroes por contribuir con a la causa de la fundación.
            </p>
              <div className="section-team__article__members">
                <ol className="section-team__article__members__wrap-items">
                  {
                    heroes.map((info, index) => {
                      return (
                        <li className="section-team__article__members__wrap-items__item" key={index}>
                          <div style={
                            { 'backgroundImage': `url(${info.image})` }
                          } className="section-team__article__members__wrap-items__image"></div>
                          <span className="section-team__article__members__wrap-items__title">
                            {info.title}
                            <div className="lower-bar"></div>
                          </span>
                          {info.copy}
                        </li>
                      )
                    })
                  }
                </ol>
              </div>

              <h2 className="section-team__article__title">
                EQUIPO DE VOLUNTARIOS
              <div className="lower-bar"></div>
              </h2>
              <p className="section-team__article__copy">
                <b>Gracias</b> por el apoyo de nuestros voluntarios que se ponen la 10 y juegan con el equipo hackdó 💖
            </p>
              <div className="section-team__article__members">
                <ol className="section-team__article__members__wrap-items">
                  {
                    voluntarios.map((info, index) => {
                      return (
                        <li className="section-team__article__members__wrap-items__item" key={index}>
                          <div style={
                            { 'backgroundImage': `url(${info.image})` }
                          } className="section-team__article__members__wrap-items__image"></div>
                          <span className="section-team__article__members__wrap-items__title">
                            {info.title}
                            <div className="lower-bar"></div>
                          </span>
                          {info.copy}
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
            </article>
          </section>
        </div>
      </section>
    )
  }
}

export default Thanks;
