import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../dumb/Header.js'
import News from '../dumb/News.js'
import Gallery from '../dumb/Gallery.js'
import About from '../dumb/About.js'
import Team from '../dumb/Team.js'
import Projects from '../dumb/Projects.js'
import Events from '../dumb/Events.js'
import scrollToElement from 'scroll-to-element'

@connect(store => {
  return {
    MainStore: Object.assign(store.Main, {}),
    TeamStore: Object.assign(store.Team, {}),
    EventsStore: Object.assign(store.Events, {})
  }
})
class App extends React.Component {
  constructor() {
    super();
  }

  setSelected(index) {
    let payload = { setup: { selected: index } };
    this.props.dispatch({ type: "SET_TEAM", payload })
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
    if (done) setTimeout(done, 300);
  }

  render() {
    let { TeamStore, EventsStore } = this.props;
    return (
      <div id="main-content">
        <About onSelect={this.goTo.bind(this)} />
        <Team setup={TeamStore.setup} data={TeamStore.data} onSelect={this.setSelected.bind(this)} />
        <Projects />
        <Events setup={EventsStore.setup} data={EventsStore.data}   />
        {/*<Gallery/>*/}
      </div>

    )
  }
}

export default App;
