import React from 'react';
import Title from './Title.js';
class News extends React.Component {
  constructor() {
    super();
    this.state = {
      select: "conf",
      news: {
        'Septiembre 2018': [
          {
            id: "conf",
            active: true,
            title: 'Hackdó Conf',
            body: (
              <article className="appear" id="conf">
                <Title data="Hackdó Conf" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
             </p>
                <div id="videoWrapper"></div>
              </article>
            )
          },
          {
            id: "bootcamp",
            active: false,
            title: "Bootcamp",
            body: (
              <article className="appear" id="bootcamp">
                <Title data="Bootcamp" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
             </p>
              </article>
            )
          },
          {
            id: "quibdojs-meetup",
            active: false,
            title: "Meetup Quibdojs",
            body: (
              <article className="appear" id="quibdo-js">
                <Title data="Quibdojs" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
             </p>
              </article>
            )
          }
        ],
        'Octubre 2018': [
          {
            id: "endo",
            active: true,
            title: "Gen Dó",
            body: (
              <article className="appear" id="conf">
                <Title data="Gen Dó" />
                <p className="wrap-news__content-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
             </p>
                <div id="videoWrapper"></div>
              </article>
            )
          },
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
    const $menu = document.getElementsByClassName('wrap-news__content');
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
    let { select, news } = this.state;
    return (
      <article className="wrap-news">
        <aside className="wrap-news__content">
          <div className="title-news"><Title data="Noticias" /></div>
          {

            Object.keys(news).map((month, index) => {
              return (<div key={index}>
                <span className="wrap-news__content-news-date">{month}</span>
                <nav>
                  <ol>
                    {
                      news[month].map((item, i) => {
                        return (
                          <li key={i} className="appear-right" style={ {animationDelay: `${i*0.35}s` } } onClick={this.selectNew.bind(this, item.id)}>
                            <Title hover={select !== item.id} data={item.title} />
                          </li>
                        )
                      })
                    }
                  </ol>
                </nav>
              </div>
              )
            })
          }
          <div className="wrap-news__content-news-controls">
            <div className="wrap-news__content-news-controls-back">
              <i className="material-icons">arrow_back</i> <span>Atras</span>
            </div>
            <div className="wrap-news__content-news-controls-next">
              <span>Adelante</span> <i className="material-icons">arrow_forward</i>
            </div>
          </div>
        </aside>
        <section className="wrap-news__body">
          {
            Object.keys(news).map((month, index) => {
              return news[month].filter(item => item.active).map((item, i) => <div key={i}>{item.body}</div>);
            })
          }
        </section>
      </article>
    )
  }
}

export default News;
