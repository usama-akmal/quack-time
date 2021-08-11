import React from 'react'
import CalenderProvider from '../contexts/CalenderProvider.jsx'
import Body from './Body.jsx'
import Header from './Header.jsx'
import SubHeader from './SubHeader.jsx'

const Calender = () => {
  return (
    <CalenderProvider>
      <div className="flex flex-col text-center">
        <Header />
        <SubHeader />
        <Body />
      </div>
    </CalenderProvider>
  )
}

export default Calender
