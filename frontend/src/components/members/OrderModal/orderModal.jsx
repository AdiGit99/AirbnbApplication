import { useState } from "react"
import { addDays } from "date-fns"
import { AuthContext } from "../../../context/AuthContext"
import axios from "axios"
import "../../../components/members/CalendarDatePicker/theme/default.scss"
import DateRange from "../CalendarDatePicker/DateRange"
import DefinedRange from "../CalendarDatePicker/DefinedRange"

import { Close } from "@mui/icons-material"
import "./orderModal.scss"

export default function OrderModal({ setOrderActive }) {
  const [dates, setDates] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ])

  const today = new Date()
  const [time, setTime] = useState([
    {
      startTime: today.getHours() + ":" + today.getSeconds(),
      endDate: today.getHours() + ":" + today.getSeconds(),
    },
  ])

  const [value, setValue] = useState("registered nurse")

  const handleClick = () => {
    console.log(time)
    console.log(dates)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const options = [
    { label: "Registered Nurse", value: "registered nurse" },
    { label: "Enlisted Nurse", value: "enlisted nurse" },
    { label: "Health Care Assistant", value: "health care assistant" },
    { label: "Healthcare Worker", value: "healthcare worker" },
    { label: "Nurse Specialist ", value: "nurse specialist" },
  ]

  return (
    <div className="ordermodal-container">
      <div className="order-topbar">
        <div
          className="order-close-container"
          onClick={() => setOrderActive(false)}
        >
          <Close className="order-close" />
        </div>
        <h3>Create a new order</h3>
      </div>
      <div className="ordermodal-content-container">
        <div className="date-range-container">
          <DateRange
            onChange={(item) => setDates([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            minDate={new Date()}
            maxDate={addDays(new Date(), 61)}
            ranges={dates}
            direction="vertical"
            scrol={{ enabled: true }}
            preventSnapRefocus={true}
            calendarFocus="backwards"
            fixedHeight={true}
            showDateDisplay={false}
          />
        </div>
        <div className="date-range-details">
          <DefinedRange
            onChange={(item) => setDates([item.selection])}
            ranges={dates}
          />
          <div className="time-selection-container">
            <input
              type="time"
              onChange={(e) => setTime({ startTime: e })}
              className="time-selection"
            />
            <input
              type="time"
              onChange={(e) => setTime({ endTime: e })}
              className="time-selection"
            />
          </div>
          <div className="service-selection-container">
            <select value={value} onChange={handleChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="order-submit" onClick={handleClick}>
            Submit Request
          </div>
        </div>
      </div>
    </div>
  )
}
