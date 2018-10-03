import React from 'react';
import BottomMarker from './BottomMarker.js'
//import member1 from '../../../images/member_1.jpeg'
//import member2 from '../../../images/member_2.jpeg'
//import member3 from '../../../images/member_3.jpeg'
//import member4 from '../../../images/member_4.jpeg'
//import member5 from '../../../images/member_5.jpg'
//import member6 from '../../../images/member_6.jpg'

class KnowUs extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          body: (
            <div className="member">
              <div className="member-image" ></div>
              <div className="member-bio">
                <BottomMarker data={"Esneyder Amin Palacios Mena"}/>
                <p className="member-text">
                  Full stack javascript developer ‍💻, member founder and contributor at @H4ckdo and @quibdojs
                </p>
              </div>
            </div>
          )
        },
        {
          body: (
            <div className="member">
              <div className="member-image" ></div>
              <div className="member-bio">
                <BottomMarker data={"Miguel Casas Perea"} />
                <p className="member-text">
                  DEVELOPER POR PASION
                  #Researcher | #Engineer | #SoftwareDeveloper | #HackerPorPasion
                </p>
              </div>
            </div>
          )
        },
        {
          body: (
            <div className="member">
              <div className="member-image" ></div>
              <div className="member-bio">
                <BottomMarker data={"Luis Delaskar"} />
                <p className="member-text">
                  Ingeniero Teleinformático. Estudiante de Máster en BigData Co-Autor proy. Sembrando Seguridad TIC. Amante al Ethical Hacking y Legislación informática
                </p>
              </div>
            </div>
          )
        },
        {
          body: (
            <div className="member">
              <div className="member-image" ></div>
              <div className="member-bio">
                <BottomMarker data={"Yerlin Matu"} />
                <p className="member-text">
                  👨🏾‍💻 I'm a cool software developer, Multitalented, self-taught and passionate about technology, graphic arts and free knowledge.
                </p>
              </div>
            </div>
          )
        },
        {
          body: (
            <div className="member">
              <div className="member-image" ></div>
              <div className="member-bio">
                <BottomMarker data={"Fredy Enrique Andrade"} />
                <p className="member-text">
                  Founder of @H4ckdo + @Quibdojs Javascript full stack developer. I write about programming, art, Traditional Animation and Watercolor
                </p>
              </div>
            </div>
          )
        },
        {
          body: (
            <div className="member">
              <div className="member-image" ></div>
              <div className="member-bio">
                <BottomMarker data={"Luis Fernando Moreno"} />
                <p className="member-text">
                  #Researcher | #Engineer | #SoftwareDeveloper | #Teacher | fdomoreno.com
                </p>
              </div>
            </div>
          )
        }
      ]
    }
  }

  render() {
    let { data } = this.state;
    return (
      <section id="KnowUs">
        <article className="know-us-container">
          <div className="know-us-container-title">
            <BottomMarker data={<h1>Conócenos</h1>} />
          </div>
          <p className="know-us-container-text">
            Somos un grupo emprendedor conformado por estudiantes y profesionales, comprometidos
            con la <BottomMarker data={"transformación social"} /> por medio del software, emprendimiento y la investigación.
          </p>
          <ul>
            {
              data.map((item, index) => {
                return (
                  <li key={index}>{item.body}</li>
                )
              })
            }
          </ul>
        </article>
      </section>
    )
  }
}

export default KnowUs;
