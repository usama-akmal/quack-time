import React from 'react'

const SubHeader = () => {
  return (
    <div className="flex-1 px-3 sm:px-5 py-3">
      <div className="py-2 bg-green-600 text-white text-xl font-medium uppercase rounded shadow hidden lg:flex">
        <div className="flex-1">Sunday</div>
        <div className="flex-1">Monday</div>
        <div className="flex-1">Tuesday</div>
        <div className="flex-1">Wednesday</div>
        <div className="flex-1">Thursday</div>
        <div className="flex-1">Friday</div>
        <div className="flex-1">Saturday</div>
      </div>
      <div className="py-2 bg-green-600 text-white lg:text-xl font-medium uppercase rounded shadow hidden md:flex lg:hidden">
        <div className="flex-1">Sun</div>
        <div className="flex-1">Mon</div>
        <div className="flex-1">Tue</div>
        <div className="flex-1">Wed</div>
        <div className="flex-1">Thu</div>
        <div className="flex-1">Fri</div>
        <div className="flex-1">Sat</div>
      </div>
      <div className="flex py-2 bg-green-600 text-white lg:text-xl font-medium uppercase rounded shadow md:hidden lg:hidden">
        <div className="flex-1">S</div>
        <div className="flex-1">M</div>
        <div className="flex-1">T</div>
        <div className="flex-1">W</div>
        <div className="flex-1">T</div>
        <div className="flex-1">F</div>
        <div className="flex-1">S</div>
      </div>
    </div>
  )
}

export default SubHeader
