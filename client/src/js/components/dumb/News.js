import React from 'react';
import Title from './Title.js';
class News extends React.Component {
  constructor() {
    super();
    this.state = {
      select: "conf",
      news: [
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
      ]
    }
  }

  componentDidMount() {
    const videoWrapper = document.getElementById('videoWrapper');
    videoWrapper.innerHTML = `
        <iframe src="https://www.youtube.com/embed/n7ytI8lE3o4" height="100%" width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `
  }

  selectNew(select) {
    let { news } = this.state;
    news = news.map(item => {
      item.active = item.id === select;
      return item;
    });
    let $element = document.getElementsByClassName('wrap-news__body')[0];
    if ($element) {
      $element.classList.add('disappear');
      $element.classList.remove('appear');
      setTimeout(() => {
        $element.classList.remove('disappear');
        $element.classList.add('appear');
        this.setState({ select, news }, () => {
          if (select === 'conf') {
            const videoWrapper = document.getElementById('videoWrapper');
            videoWrapper.innerHTML = `
                <iframe src="https://www.youtube.com/embed/n7ytI8lE3o4" height="100%" width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            `
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
          <nav>
            <ol>
              {
                news.map((item, i) => {
                  return (
                    <li key={i} onClick={this.selectNew.bind(this, item.id)}>
                      <Title hover={select !== item.id} data={item.title} />
                    </li>
                  )
                })
              }
            </ol>
          </nav>
        </aside>
        <section className="wrap-news__body">
          {
            news.filter(item => item.active).map((item, i) => <div key={i}>{item.body}</div>)
          }
        </section>
      </article>
    )
  }
}

export default News;
