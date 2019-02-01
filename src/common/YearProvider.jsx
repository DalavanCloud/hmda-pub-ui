import React from 'react'
import { YearContext, years } from './YearContext'

export class YearProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      year: years[0]
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      year: event.target.value
    })
  }

  render() {
    return (
      <YearContext.Provider value={this.state.year}>
        {years.map(year => {
          return (
            <React.Fragment key={year}>
              <label>{year}</label>{' '}
              <input
                type="radio"
                name="year"
                id="year"
                value={year}
                checked={this.state.year === year ? true : false}
                onChange={this.handleChange}
              />
            </React.Fragment>
          )
        })}
        {this.props.children}
      </YearContext.Provider>
    )
  }
}
