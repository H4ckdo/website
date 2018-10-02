import React from 'react'
import BottomMarker from './BottomMarker'

class ListBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    let { selected } = this.props;
    this.setState({ selected });
  }

  setSelected() {
    let { data } = this.props;
    let keys = Object.keys(data);
    for (let key of keys) {
      let found = false;
      for (let item of data[key]) {
        if (item.active) {
          this.setState({ selected: item.id });
          found = true;
        }
      }
      if (found) break;
    }
  }

  selectItem(id) {
    if (this.props.onSelect) this.props.onSelect(id);
    this.setSelected();
  }

  render() {
    let { title = '', data } = this.props;
    let { selected = '' } = this.state;
    return (
      <div className="listbar-container">
        <aside className="wrap-listbar__content">
          {
            /*
            <div className="wrap-logo">
              <img id="logo" src="/assets/images/logo.png" alt="" />
            </div>
            */
          }
          <div className="title-listbar"><BottomMarker data={<h1>{title}</h1>} /></div>
          {
            Object.keys(data).map((group, index) => {
              return (<div className="wrap-listbar__content-group" key={index}>
                <span className="wrap-listbar__content-listbar-date">{group}</span>
                <nav>
                  <ol>
                    {
                      data[group].map((item, i) => {
                        return (
                          <li key={i} className="appear-right" style={{ animationDelay: `${i * 0.35}s` }} onClick={this.selectItem.bind(this, item.id)}>
                            <BottomMarker hover={selected !== item.id} data={<span>{item.title}</span>} />
                          </li>
                        )
                      })
                    }
                  </ol>
                </nav>
              </div>
              )
            })
          }
          {
            /*
            <div className="wrap-listbar__content-listbar-controls">
              <div className="wrap-listbar__content-listbar-controls-back">
                <i className="material-icons">arrow_back</i> <span>Atras</span>
              </div>
              <div className="wrap-listbar__content-listbar-controls-next">
                <span>Adelante</span> <i className="material-icons">arrow_forward</i>
              </div>
            </div>
            */
          }
        </aside>
      </div>
    )
  }
}
export default ListBar;
