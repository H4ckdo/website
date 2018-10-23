import React from 'react';

class Foundation extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollAnimation() {
    let FOUNDATION = new ScrollMagic.Controller();
    new ScrollMagic.Scene({ triggerElement: "#Foundation", duration: "100%", offset: 0 })
      .on("enter leave", (e) => {
        if (e.type === "enter") {
          this.props.selectHeader("Foundation");
        } else {
          //this.props.selectHeader(" ");
        }
      })
      //.addIndicators()
      .addTo(FOUNDATION)


    new ScrollMagic.Scene({ triggerElement: "#Foundation", duration: "#Team", offset: -300 })
      .on("enter", () => {
        //console.log("enter");
        document.getElementById("Foundation").classList.remove("hidden");
        document.querySelector(".foundation-content").classList.add("push-up");
      })
      .on("leave", () => {
        document.getElementById("Foundation").classList.add("hidden");
        document.querySelector(".foundation-content").classList.remove("push-up");
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
          <article className="foundation-aside__about">
            <h1>FUNDACIÓN HACKDÓ</h1>
            <p>
              La fundación es una entidad sin ánimo de lucro con enfoque diferencial que aplica la dinámica I+D+i (Investigación, desarrollo e Innovación) para diseñar, desarrollar e implementar proyectos especializados en TIC (Tecnologías de la Información y las Comunicaciones); IOT (Internet de las Cosas) Arte , Emprendimiento, aplicando componentes de autoreconocimiento étnico cuando es requerido, con soluciones innovadoras para personas naturales, entidades públicas y privadas, sin olvidar las instituciones y personas con Necesidades Educativas Especiales (NEE) desde la primera infancia hasta el adulto mayor y personas con capacidades diferentes en poblaciones que carecen de privilegio.
            </p>
          </article>
        </aside>

        <div className="foundation-content">
          <article className="foundation-content__mision">
            <h1>MISIÓN</h1>
            <p>
              Potenciar el crecimiento de las comunidades tecnológicas y el desarrollo de un ecosistemas sólido al 2025, dotando a emprendedores con conocimiento técnico, promoviendo su participación activa en la industria del Software, Hardware y la Economía Naranja, mediante el trabajo en equipo con empresas públicas, privadas, organizaciones gubernamentales e instituciones educativas.
            </p>
          </article>

          <article className="foundation-content__vision">
            <h1>VISIÓN</h1>
            <p>
              Activar y escalar la economía de los pueblos del Pacífico Colombiano a través del diseño y ejecución de proyectos e investigación de alto impacto social, que involucren el uso de tecnologías innovadoras y talento humano diverso indistintamente de su raza, credo y orientación sexual.
            </p>
          </article>
        </div>
      </section>
    )
  }
}
export default Foundation;
