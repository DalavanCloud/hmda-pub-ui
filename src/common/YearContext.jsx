import { createContext } from 'react'

export const years = ['2018', '2017']

export const YearContext = createContext({
  year: years[0]
})
