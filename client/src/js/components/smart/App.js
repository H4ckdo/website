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
import Foundation from '../dumb/Foundation.js'
import Sponsors from '../dumb/Sponsors.js'
import Thanks from '../dumb/Thanks.js'
import Footer from '../dumb/Footer.js'
import scrollToElement from 'scroll-to-element'

@connect(store => {
  return {
    MainStore: Object.assign(store.Main, {}),
    TeamStore: Object.assign(store.Team, {}),
    EventsStore: Object.assign(store.Events, {}),
    CoursesStore: Object.assign(store.Courses, {}),
    ProjectsStore: Object.assign(store.Projects, {}),
  }
})
class App extends React.Component {
  constructor() {
    super();
  }

  setSelected(index) {
    this.props.dispatch({ type: "SETUP_TEAM", payload: { selected: index } });
    let payload = this.props.TeamStore.data.map(item => item);
    payload[index].displayed = true;
    this.props.dispatch({ type: "SET_DATA_TEAM", payload })
  }

  componentDidMount() {
    let duration = 500;
    if (window.location.hash === "#Team") scrollToElement("#Team", { duration });
    if (window.location.hash === "#Courses") scrollToElement("#Courses", { duration });
    if (window.location.hash === "#Events") scrollToElement("#Events", { duration });
    if (window.location.hash === "#Projects") scrollToElement("#Projects", { duration });
  }

  goTo(id, done) {
    //console.log('id ', id);
    scrollToElement(id, { duration: 500, offset: -92 });
    if (done) setTimeout(done, 700);
  }

  render() {
    let { TeamStore, EventsStore, MainStore, CoursesStore, ProjectsStore } = this.props;
    return (
      <div id="main-content">
        <About selectHeader={payload => this.props.dispatch({ type: "SET_HEADER", payload })} setup={MainStore.setup} hoveIndicator={this.goTo.bind(this)} onSelect={this.goTo.bind(this)} />
        <Foundation selectHeader={payload => this.props.dispatch({ type: "SET_HEADER", payload })} />
        <Projects selectHeader={payload => this.props.dispatch({ type: "SET_HEADER", payload })} setup={ProjectsStore.setup} data={ProjectsStore.data} />
        <Courses selectHeader={payload => this.props.dispatch({ type: "SET_HEADER", payload })} setup={CoursesStore.setup} data={CoursesStore.data} />
        <Events selectHeader={payload => this.props.dispatch({ type: "SET_HEADER", payload })} setup={EventsStore.setup} data={EventsStore.data} />
        <Sponsors selectHeader={payload => this.props.dispatch({ type: "SET_HEADER", payload })} />
        <Team selectHeader={payload => this.props.dispatch({ type: "SET_HEADER", payload })} setup={TeamStore.setup} data={TeamStore.data} onSelect={this.setSelected.bind(this)} />
        <Thanks selectHeader={payload => this.props.dispatch({ type: "SET_HEADER", payload })} />
        <Footer />
      </div>

    )
  }
}

export default App;
