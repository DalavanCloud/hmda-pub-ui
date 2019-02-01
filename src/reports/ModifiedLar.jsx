import React from 'react'
import Header from '../common/Header.jsx'
import SearchList from './SearchList.jsx'

import { YearContext } from '../common/YearContext'

import './ModifiedLar.css'

const ModifiedLar = () => (
  <YearContext.Consumer>
    {context => {
      console.log(context)
      return (
        <div className="ModifiedLar" id="main-content">
          <p>The current year is {context}</p>
          <Header
            type={1}
            headingText="Modified Loan/Application Register (LAR)"
            paragraphText="A downloadable modified LAR file is available for every 
            financial institution that has completed a 2017 HMDA data submission. 
            Enter a financial institution’s name to download its modified LAR file. 
            If you cannot find a particular financial institution using this form, the 
            institution may not have been required to report HMDA data for 2017 or it 
            may not have completed its 2017 HMDA data submission."
          >
            <p>
              The{' '}
              <a
                title="Modified LAR file specification"
                href="https://github.com/cfpb/hmda-platform/blob/master/docs/v1/2017_Modified_LAR_Spec.csv"
              >
                modified LAR file specification
              </a>{' '}
              is now available.
            </p>
          </Header>
          <SearchList />
        </div>
      )
    }}
  </YearContext.Consumer>
)

export default ModifiedLar
