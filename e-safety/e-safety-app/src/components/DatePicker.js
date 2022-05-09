import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Date () {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className='App'>
      <DatePicker
        popperPlacement="bottom"
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        placeholderText={'dd/mm/yyyy'}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
        showYearDropdown // year show and scrolldown alos
        scrollableYearDropdown
      />
    </div>
  )
}

export default Date
