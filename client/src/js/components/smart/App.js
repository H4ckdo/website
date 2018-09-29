import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../dumb/Header.js'
import News from '../dumb/News.js'

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
      <section id="main-content">
        <Header/>
        <News/>
      </section>

    )
  }
}

export default App;
