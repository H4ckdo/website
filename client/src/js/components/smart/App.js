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
    scrollToElement(id, {duration: 500});
    if (done) setTimeout(done, 700);
  }

  render() {
    let { TeamStore, EventsStore, CoursesStore, ProjectsStore } = this.props;
    return (
      <div id="main-content">
        <About hoveIndicator={this.goTo.bind(this)} onSelect={this.goTo.bind(this)} />
        <Team setup={TeamStore.setup} data={TeamStore.data} onSelect={this.setSelected.bind(this)} />
        <Projects setup={ProjectsStore.setup} data={ProjectsStore.data} />
        <Courses setup={CoursesStore.setup} data={CoursesStore.data} />
        <Events setup={EventsStore.setup} data={EventsStore.data} />
      </div>

    )
  }
}

export default App;
