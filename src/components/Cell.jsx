import React, { useContext } from 'react'
import { CalenderContext } from '../contexts/CalenderProvider'

const Cell = ({item}) => {

    const { calender, getFormattedDate, gotoNextMonth, gotoPrevMonth  } = useContext(CalenderContext)

    const handleOnDateClicked = () => {
        if(item.state === 'previous') {
            gotoPrevMonth()
        } else if(item.state === 'next' ) {
            gotoNextMonth()
        }
    }

    return (
        <div 
            className={`px-1 py-3 text-xxs font-semibold sm:p-3 sm:font-normal md:p-5 rounded shadow md:text-2xl lg:text-3xl hover:bg-green-500 hover:text-white transition duration-200 ease-in-out transform hover:scale-105 ${item.formatted ===  getFormattedDate(calender.currentDate)? 'bg-green-600 text-white ring-4 ring-offset-4 ring-green-300' : 'bg-gray-200 text-gray-600'} ${item.state === 'previous' ? 'bg-gray-100 opacity-50 shadow-none' : (item.state === 'next' ? 'bg-gray-100 opacity-50 shadow-none' : null) }`} 
            onClick={handleOnDateClicked}
        >
            {new Date(item.date).getDate()}
        </div>
    )
}

export default Cell
