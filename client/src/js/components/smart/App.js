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
import Courses from '../dumb/Courses.js'
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
    let payload = { selected: index };
    this.props.dispatch({ type: "SETUP_TEAM", payload })
  }

  componentDidMount() {
    if (window.location.hash === "#knowus") {
      scrollToElement("#KnowUs", {
        duration: 200
      });
    }

    let TEAM = new ScrollMagic.Controller();
    let PORTADA = new ScrollMagic.Controller();
    new ScrollMagic.Scene({ triggerElement: "#sectionAbout", duration: 250, offset: 200 })
      .setPin("#sectionAbout")
      .on("enter", () => {
        //console.log("enter");
        let container = document.querySelector(".wrap-indicator-bottom");
        if (container) {
          container.classList.toggle("hidden");
        }
      })
      .on("leave", () => {
        //console.log("enter");
        let container = document.querySelector(".wrap-indicator-bottom");
        if (container) {
          //container.classList.toggle("hidden");
        }
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(PORTADA)

    new ScrollMagic.Scene({ triggerElement: "#Team", duration: 450, offset: 0 })
      //.setClassToggle(".team-container", "team-push-down")
      .on("enter", () => {
        //console.log("enter");
        let container = document.querySelector(".team-container");
        if(container) {
          container.classList.add("push-up");
        }
      })
      .on("leave", () => {
        //console.log("leave")
        let container = document.querySelector(".team-container");
        if (container) {
          container.classList.remove("push-up");
        }
      })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(TEAM)


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
        <Courses />
        <Events setup={EventsStore.setup} data={EventsStore.data} />
      </div>

    )
  }
}

export default App;
