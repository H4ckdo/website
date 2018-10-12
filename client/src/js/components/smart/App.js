import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../dumb/Header.js'
import News from '../dumb/News.js'
//import Gallery from '../dumb/Gallery.js'
import About from '../dumb/About.js'
import Team from '../dumb/Team.js'
import Projects from '../dumb/Projects.js'
import Events from '../dumb/Events.js'
import scrollToElement from 'scroll-to-element'

@connect(store => {
  let { setup, data } = store.Main;
  return { data: [...data], setup }
})
class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (window.location.hash === "#knowus") {
      scrollToElement("#KnowUs", {
        duration: 200
      });
    }
  }

  goTo(id, done) {
    //console.log('id ', id);
    scrollToElement(id, {
      duration: 200
    });
    if(done) setTimeout(done, 300);
  }

  render() {
    let { setup = {}, data = [] } = this.props;
    return (
      <div id="main-content">
        <About onSelect={this.goTo.bind(this)}/>
        <Team/>
        <Projects/>
        <Events/>
        {/*<Gallery/>*/}
        {/*<News/>*/}
      </div>

    )
  }
}

export default App;
