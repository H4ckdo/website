import React from 'react'
import BottomMarker from '../components/dumb/BottomMarker'
export default {
  setup: {
    loadingNews: true
  },
  data: {
    news: {
      'Septiembre 2018': [
        {
          id: "conf",
          active: true,
          title: 'Hackdó Conf',
          body: (
            <article className="appear" id="conf">
              <BottomMarker data="Hackdó Conf" />
              <p className="wrap-news__content-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum enim modi sapiente tempore eaque, ut deserunt incidunt voluptates sequi dolor, similique id qui saepe hic voluptatem asperiores possimus necessitatibus accusantium?
             </p>
              <div id="videoWrapper"></div>
            </article>
          )
        }
      ]
    }
  }
}
