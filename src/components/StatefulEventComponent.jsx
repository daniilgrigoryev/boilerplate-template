import React from 'react'

class StatefulEventComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      clicks: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((state) => {
      return {
        clicks: (state.clicks += 1),
      }
    })
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.clicks}</button>
  }
}

export default StatefulEventComponent
