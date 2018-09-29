import React from 'react';
import BottomMarker from './BottomMarker.js'
import ListBar from './ListBar.js'
import Gallery from './Gallery.js'

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSelected: "conf",
      news: {
        'Actividades': [
          {
            id: "conf",
            active: true,
            title: 'Eventos',
            body: (
              <article className="appear" id="conf">
                <BottomMarker data="Hackdó Conf" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
                </p>
                <div id="videoWrapper"></div>

                <BottomMarker data={"Asistentes"} />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
                </p>
                <div className="wrap-news__content-gallery">
                  <Gallery />
                </div>
              </article>
            )
          },
          {
            id: "courses",
            active: false,
            title: "Cursos",
            body: (
              <article className="appear" id="courses">
                <BottomMarker data="Cursos" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
             </p>
              </article>
            )
          }
        ],
        'Proyectos': [
          {
            id: "gendo",
            active: false,
            title: "Gen Dó",
            body: (
              <article className="appear" id="gendo">
                <BottomMarker data="Gen Dó" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
                </p>
              </article>
            )
          },
          {
            id: "investigación",
            active: false,
            title: "Investigación",
            body: (
              <article className="appear" id="quibdo-js">
                <BottomMarker data="Investigación" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
             </p>
              </article>
            )
          }
        ],
        'Conocenos': [
          {
            id: "mision",
            active: false,
            title: "Mision y Visión",
            body: (
              <article className="appear" id="mision">
                <BottomMarker data="Mision y Visión" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
                </p>
              </article>
            )
          },
          {
            id: "team",
            active: false,
            title: "Equipo Hackdó",
            body: (
              <article className="appear" id="team">
                <BottomMarker data="Equipo Hackdó" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
                </p>
              </article>
            )
          }
        ]
      }
    }
  }

  componentDidMount() {
    const videoWrapper = document.getElementById('videoWrapper');
    if (videoWrapper) {
      videoWrapper.innerHTML = `
          <iframe src="https://www.youtube.com/embed/n7ytI8lE3o4" height="100%" width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `
    }

    const $menu = document.getElementsByClassName('wrap-listbar__content');
    window.addEventListener('scroll', (e) => {
      //console.log(window.pageYOffset);
      if (window.pageYOffset > 100 && $menu) {
        let y = 0;//window.pageYOffset - 250;
        $menu[0].style.top = `${y}px`;
      } else if (window.pageYOffset < 280 || window.pageYOffset < 50) {
        $menu[0].style.top = "150px";
      } else {
        $menu[0].style.top = "150px";
      }
    });
  }

  selectNew(select) {
    let { news } = this.state;
    Object.keys(news).forEach((month, index) => {
      news[month] = news[month].map(item => {
        item.active = item.id === select;
        return item;
      });
    })
    let $element = document.querySelector('.wrap-news__body');
    if ($element) {
      $element.classList.add('disappear');
      $element.classList.remove('appear');
      setTimeout(() => {
        $element.classList.remove('disappear');
        $element.classList.add('appear');
        this.setState({ select, news }, () => {
          if (select === 'conf') {
            const videoWrapper = document.getElementById('videoWrapper');
            if (videoWrapper) {
              videoWrapper.innerHTML = `
                  <iframe src="https://www.youtube.com/embed/n7ytI8lE3o4" height="100%" width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              `
            }
          }
        });
      }, 500);
    }
  }

  render() {
    let { select, news, currentSelected } = this.state;
    return (
      <article className="wrap-news">
        <ListBar title={"Hackdó"} data={news} selected={currentSelected} onSelect={this.selectNew.bind(this)} />
        <section className="wrap-news__body">
          {
            Object.keys(news).map((month, index) => {
              return news[month].filter(item => item.active).map((item, i) => <div className="wrap-news__body-content" key={i}>{item.body}</div>);
            })
          }
        </section>
      </article>
    )
  }
}

export default News;
