import React from 'react'
import Results from './Results.jsx'
import LoadingIcon from '../common/LoadingIcon.jsx'

import './SearchList.css'

let INSTITUTIONS = null

class SearchList extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getDefaultState()

    this.handleTextInputChange = this.handleTextInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.searchInstitutions = this.searchInstitutions.bind(this)
  }

  componentDidMount() {
    // TODO: update API call based on `this.props.year`
    const fetchURL =
      this.props.year === '2017'
        ? 'https://ffiec-api.cfpb.gov/public/filers'
        : '/public/filers'
    if (this.state.isLoading) {
      fetch(fetchURL)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            return Promise.reject('Failed to fetch')
          }
        })
        .then(result => {
          INSTITUTIONS = result.institutions
          this.setState({
            isLoading: false,
            institutions: result.institutions.map(institution => {
              return { ...institution, name: institution.name.toUpperCase() }
            })
          })
        })
        .catch(error => {
          this.setState({
            isLoading: false,
            error
          })
        })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.year !== this.props.year) return true

    return false
  }

  getDefaultState() {
    return {
      error: null,
      isLoading: !INSTITUTIONS,
      institutions: INSTITUTIONS || [],
      institutionsFiltered: [],
      textInputValue: ''
    }
  }

  searchInstitutions(value) {
    let institutionsFiltered = []

    if (value.length !== 0) {
      const institutions = this.state.institutions
      const len = institutions.length
      const val = value.toUpperCase()

      for (let i = 0; i < len; i++) {
        const institution = institutions[i]
        if (
          institution.name.indexOf(val) !== -1 &&
          institution.respondentId !== 'Bank0_RID' &&
          institution.respondentId !== 'Bank1_RID'
        ) {
          institutionsFiltered.push(institution)
        }
      }

      if (institutionsFiltered.length === 0) {
        this.setState({ error: 'Not a filer' })
      }
    }

    this.setState({
      institutionsFiltered
    })
  }

  handleTextInputChange(event) {
    this.setState({
      textInputValue: event.target.value,
      error: null
    })

    this.searchInstitutions(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    let disabled = false
    let inputClass = ''
    let inputLabelClass = ''
    let errorMessage = null
    let loading = null
    let label = <span>Enter an institution name</span>
    const {
      isLoading,
      error,
      textInputValue,
      institutionsFiltered
    } = this.state

    if (error && error !== 'Not a filer') {
      disabled = true
      inputClass = 'input-error'
      inputLabelClass = 'input-error-label'
      errorMessage = (
        <span
          className="input-error-message"
          id="input-error-message"
          role="alert"
        >
          Sorry, we're unable to load the list of institutions that have filed.
        </span>
      )
    }

    if (isLoading) {
      disabled = true
      loading = <LoadingIcon className="LoadingInline" />
      label = (
        <span style={{ fontWeight: 'bold' }}>Loading Institutions...</span>
      )
    }

    return (
      <div className="SearchList">
        <form onSubmit={this.handleSubmit}>
          <div className={inputClass}>
            <label className={inputLabelClass} htmlFor="institution-name">
              {label}
            </label>
            {errorMessage}
            <input
              id="institution-name"
              name="institution-name"
              type="text"
              value={textInputValue}
              onChange={this.handleTextInputChange}
              placeholder="Institution name"
              disabled={disabled}
              style={{ display: 'inline-block' }}
            />
            {loading}
          </div>
        </form>

        <Results
          error={this.state.error}
          institutions={institutionsFiltered}
          inputValue={textInputValue}
          makeListItem={this.props.makeListItem}
          year={this.props.year}
        />
      </div>
    )
  }
}

export default SearchList
