import React from 'react'

const ContextYear = React.createContext()

const years = ['2018', '2017']

class YearSelector extends React.Component {
  constructor() {
    super()

    this.updateYear = year => {
      this.setState({ year: year })
    }

    this.state = {
      year: years[0],
      updateYear: this.updateYear
    }
  }

  render() {
    return (
      <ContextYear.Provider value={this.state}>
        <p>Hello world</p>
      </ContextYear.Provider>
    )
  }
}
