import { addDays } from 'date-fns'
import { addMonths } from 'date-fns/esm'
import React, { createContext, useState } from 'react'

export const CalenderContext = createContext()

const CalenderProvider = ({children}) => {

  const getFormattedDate = (date) => date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()

  const [calender, setCalender] = useState({
    selectedDate: new Date(),
    currentDate: new Date()
  })

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const getDaysOfSelectedMonth = () => {
    const firstDateOfMonth = new Date(calender.selectedDate.getFullYear(), calender.selectedDate.getMonth(), 1)
    const lastDateOfMonth = new Date(calender.selectedDate.getFullYear(), calender.selectedDate.getMonth() + 1, 0)
    const lastDateOfPreviousMonth = new Date(calender.selectedDate.getFullYear(), calender.selectedDate.getMonth(), 0)
    const nextMonthDate = addDays(lastDateOfMonth, 1)
    const lastMonthDays = lastDateOfPreviousMonth.getDate() - firstDateOfMonth.getDay() 
    const currentMonth = [...Array(lastDateOfMonth.getDate()).keys()].map(x => {
      const date = new Date(lastDateOfMonth.getFullYear(), lastDateOfMonth.getMonth(),(x + 1))
      return {
        date: date,
        state: 'current',
        formatted: getFormattedDate(date)
      }
    })
    const nextMonthDays = 6 - lastDateOfMonth.getDay()

    const prevMonth = [...Array(firstDateOfMonth.getDay()).keys()].map(x => {
      const date = new Date(lastDateOfPreviousMonth.getFullYear(),lastDateOfPreviousMonth.getMonth(),(x + lastMonthDays + 1))
      return {
        date: date,
        state: 'previous',
        formatted: getFormattedDate(date)
      }
    })

    const nextMonth = getNextMonth(nextMonthDays, nextMonthDate)

    let days = [...prevMonth, ...currentMonth, ...nextMonth] 

    days = days.length === 35 ? [...prevMonth, ...currentMonth, ...getNextMonth(nextMonthDays + 7, nextMonthDate) ] : days
    return days
  }

  const getNextMonth = (size, _date) => {
    return [...Array(size).keys()].map(x => {
      const date = new Date(_date.getFullYear(), _date.getMonth(), (x + 1))
      return {
        date: date,
        state: 'next',
        formatted: getFormattedDate(date)
      }
    })
  }

  const gotoNextMonth = () => {
    setCalender((state) => {
      return {
        currentDate: state.currentDate, 
        selectedDate: addMonths(state.selectedDate, 1)
      };
    })
  }

  const gotoPrevMonth = () => {
    setCalender((state) => {
      return {
        currentDate: state.currentDate, 
        selectedDate: addMonths(state.selectedDate, -1)
      };
    })
  }

  return (
    <CalenderContext.Provider value={{calender, setCalender, days, months, getDaysOfSelectedMonth, gotoNextMonth, gotoPrevMonth, getFormattedDate}}>
      {children}
    </CalenderContext.Provider>
  )
}

export default CalenderProvider
