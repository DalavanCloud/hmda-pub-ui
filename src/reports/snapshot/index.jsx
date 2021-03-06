import React from 'react'
import Header from '../../common/Header.jsx'

import './Snapshot.css'

const Snapshot = () => {
  return (
    <div className="Snapshot" id="main-content">
      <Header
        type={1}
        headingText="Snapshot National Loan Level Dataset"
        paragraphText="The snapshot files contain the national HMDA datasets as of 
          April 18th, 2018 for all HMDA reporters, as modified by the Bureau to 
          protect applicant and borrower privacy. The snapshot files are available 
          to download in both .csv and pipe delimited text file formats, and the 
          file specification files are available to download in PDF format."
      >
        <p className="text-small">
          Snapshot data has preserved some elements of historic LAR data files
          that are not present in the Dynamic Data. These columns are "As of
          Date", "Edit Status", "Sequence Number", and "Application Date
          Indicator". Be aware that data load procedures that handle both files
          will need to recognize this difference.
        </p>
        <p className="text-small">
          Use caution when analyzing loan amount and income, which do not have
          an upper limit and may contain outliers.
        </p>
      </Header>
      <div className="grid">
        <div className="item">
          <Header type={4} headingText="2017 Datasets" />
          <ul>
            <li>
              Loan/Application Records (LAR)
              <ul style={{ marginTop: '.5em' }}>
                <li>
                  <a
                    download={true}
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_public_lar_csv.zip"
                  >
                    CSV
                  </a>
                </li>
                <li>
                  <a
                    download={true}
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_public_lar_txt.zip"
                  >
                    Pipe Delimited
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Transmittal Sheet Records (TS)
              <ul style={{ marginTop: '.5em' }}>
                <li>
                  <a
                    download={true}
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_public_ts_csv.zip"
                  >
                    CSV
                  </a>
                </li>
                <li>
                  <a
                    download={true}
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_public_ts_txt.zip"
                  >
                    Pipe Delimited
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Reporter Panel
              <ul style={{ marginTop: '.5em' }}>
                <li>
                  <a
                    download={true}
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_public_panel_csv.zip"
                  >
                    CSV
                  </a>
                </li>
                <li>
                  <a
                    download={true}
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_public_panel_txt.zip"
                  >
                    Pipe Delimited
                  </a>
                </li>
              </ul>
            </li>
            <li>
              MSA/MD Description
              <ul style={{ marginTop: '.5em' }}>
                <li>
                  <a
                    download={true}
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_public_msamd_csv.zip"
                  >
                    CSV
                  </a>
                </li>
                <li>
                  <a
                    download={true}
                    href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_public_msamd_txt.zip"
                  >
                    Pipe Delimited
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="item">
          <Header type={4} headingText="2017 File Specifications" />
          <ul>
            <li>
              <a
                download={true}
                href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_publicstatic_dataformat.zip"
              >
                LAR, TS and Reporter Panel
              </a>
            </li>
            <li>
              <a
                download={true}
                href="https://s3.amazonaws.com/cfpb-hmda-public/prod/snapshot-data/2017_publicstatic_codesheet.zip"
              >
                LAR Code Sheet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Snapshot
