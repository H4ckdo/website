import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../dumb/Header.js'
import News from '../dumb/News.js'
import Gallery from '../dumb/Gallery.js'
import About from '../dumb/About.js'

@connect(store => {
  let { setup, data } = store.Main;
  return { data: [...data], setup }
})
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { setup = {}, data = [] } = this.props;
    return (
      <div id="main-content">
        <About/>
        {/*<Gallery/>*/}
        {/*<News/>*/}
      </div>

    )
  }
}

export default App;
