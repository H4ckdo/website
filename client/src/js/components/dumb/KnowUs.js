import React from 'react';
//import member1 from '../../../images/member_1.jpeg'
//import member2 from '../../../images/member_2.jpeg'
//import member3 from '../../../images/member_3.jpeg'
//import member4 from '../../../images/member_4.jpeg'
//import member5 from '../../../images/member_5.jpg'
//import member6 from '../../../images/member_6.jpg'

class KnowUs extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { data, selected } = this.props;
    return (
      <section id="KnowUs">
        <article className="know-us-container">
          <ul>
            {
              data.map((item, index) => {
                return (
                  <li onMouseEnter={this.props.onSelect.bind(this, index)} key={index}>
                    <div className={`member ${index === selected ? "member-selected" : ""} `}>
                      <div className="member-image" style={{ backgroundImage: `url(${item.image})` }} ></div>
                      <div className="member-bio">
                        <span className="member-name">{item.name}</span>
                        <p className="member-text hide">
                          {item.bio}
                        </p>
                      </div>
                    </div>
                  </li>
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
