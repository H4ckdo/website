import { combineReducers } from 'redux'
import Main from './Main.js'
import Team from './Team.js'
import Events from './Events.js'
import Courses from './Courses.js'
import Projects from './Projects.js'

export default combineReducers({
  Main,
  Courses,
  Projects,
  Events,
  Team
})

