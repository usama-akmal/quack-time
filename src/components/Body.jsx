import React, {useContext} from 'react'
import { CalenderContext } from '../contexts/CalenderProvider'
import Cell from './Cell'



const Body = () => {
  
  const {getDaysOfSelectedMonth} = useContext(CalenderContext)

  return (
    <div className="flex-1 p-3 sm:p-5">
      <div className="grid grid-cols-7 gap-4">
        {
           getDaysOfSelectedMonth().map((item, index) => <Cell key={index} item={item} />)
        }
      </div>
    </div>
  )
}

export default Body
