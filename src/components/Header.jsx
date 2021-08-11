import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { CalenderContext } from '../contexts/CalenderProvider'
import useWindowResize from '../hooks/WindowResize'


const Header = () => {

  const {calender, months, gotoNextMonth, gotoPrevMonth} = useContext(CalenderContext);

  const windowSize = useWindowResize()

  const getIconSize = () => (windowSize === "xs" ? "1x" : (windowSize === "sm" ? "2x" : (windowSize === "md" ? "3x" : "3x")))

  return (
    <div className="flex-1 px-3 sm:px-5 py-1 md:p-5 bg-gray-100">
      <div className="flex items-center">
        <div> 
          <button onClick={gotoPrevMonth}>
            <FontAwesomeIcon className="transition ease-in-out duration-200 transform hover:scale-125 text-green-600" icon={faArrowCircleLeft} size={getIconSize()}/>
          </button>
        </div>
        <div className="flex-grow">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-700 font-semibold uppercase">{months[calender.selectedDate.getMonth()]} | {calender.selectedDate.getFullYear()}</h1>
        </div>
        <div>
          <button onClick={gotoNextMonth}>
            <FontAwesomeIcon className="transition ease-in-out duration-200 transform hover:scale-125 text-green-600" icon={faArrowCircleRight} size={getIconSize()} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
