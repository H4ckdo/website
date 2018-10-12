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
              <div className="member-image" style={{ backgroundImage:"url(/assets/images/member_1.jpeg)" } } ></div>
              <div className="member-bio">
                <span className="member-name">Esneyder Amin Palacios Mena</span>
                {/*<BottomMarker data={"Esneyder Amin Palacios Mena"}/>*/}
                <p className="member-text hide">
                  Full stack javascript developer ‍💻, member founder and contributor at @H4ckdo and @quibdojs
                </p>
              </div>
            </div>
          )
        },
        {
          body: (
            <div className="member">
              <div className="member-image" style={{ backgroundImage: "url(/assets/images/member_2.jpeg)" }}></div>
              <div className="member-bio">
                <span className="member-name">Miguel Casas Perea</span>
                {/*<BottomMarker data={"Miguel Casas Perea"} />*/}
                <p className="member-text hide">
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
              <div className="member-image" style={{ backgroundImage: "url(/assets/images/member_3.jpeg)" }}></div>
              <div className="member-bio">
                <span className="member-name">Luis Delaskar</span>
                {/*<BottomMarker data={"Luis Delaskar"} />*/}
                <p className="member-text hide">
                  Ingeniero Teleinformático. Estudiante de Máster en BigData Co-Autor proy. Sembrando Seguridad TIC. Amante al Ethical Hacking y Legislación informática
                </p>
              </div>
            </div>
          )
        },
        {
          body: (
            <div className="member">
              <div className="member-image" style={{ backgroundImage: "url(/assets/images/member_4.jpeg)" }}></div>
              <div className="member-bio">
                <span className="member-name">Yerlin Matu</span>
                {/*<BottomMarker data={"Yerlin Matu"} />*/}
                <p className="member-text hide">
                  👨🏾‍💻 I'm a cool software developer, Multitalented, self-taught and passionate about technology, graphic arts and free knowledge.
                </p>
              </div>
            </div>
          )
        },
        {
          body: (
            <div className="member">
              <div className="member-image" style={{ backgroundImage: "url(/assets/images/member_5.jpg)" }}></div>
              <div className="member-bio">
                <span className="member-name">Fredy Enrique Andrade</span>
                {/*<BottomMarker data={"Fredy Enrique Andrade"} />*/}
                <p className="member-text hide">
                  Founder of @H4ckdo + @Quibdojs Javascript full stack developer. I write about programming, art, Traditional Animation and Watercolor
                </p>
              </div>
            </div>
          )
        },
        {
          body: (
            <div className="member">
              <div className="member-image" style={{ backgroundImage: "url(/assets/images/member_6.jpg)" }}></div>
              <div className="member-bio">
                <span className="member-name">Luis Fernando Moreno</span>
                {/*<BottomMarker data={"Luis Fernando Moreno"} />*/}
                <p className="member-text hide">
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
