import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { DataGrid } from "@mui/x-data-grid"
import { AuthContext } from "../../../context/AuthContext"
import axios from "axios"

import Calendar from "../../../components/providers/CalendarSchedule/Calendar"
import { DateRange, Add, ChevronLeft, ChevronRight } from "@mui/icons-material"
import "./schedule.scss"

export default function Schedule() {
  const [calendarView, setCalendarView] = useState(true)
  const [dayMonthSelection, setDayMonthSelection] = useState([
    dayjs().date(),
    dayjs().month() + 1,
  ])
  const [eventSelection, setEventSelection] = useState(null)
  const [yearAndMonth, setYearAndMonth] = useState([
    dayjs().year(),
    dayjs().month() + 1,
  ])
  const [orderActive, setOrderActive] = useState(false)
  const [list, setList] = useState([])

  let label = dayjs()
    .month(yearAndMonth[1] - 1)
    .format("MMMM")

  const maxYearAndMonth =
    dayjs().month() > 7
      ? [dayjs().year() + 1, dayjs().month() - 7]
      : [dayjs().year(), dayjs().month() + 5]

  const minYearAndMonth = [dayjs().year(), dayjs().month() + 1]

  const handleMonthNavBackButtonClick = () => {
    const [year, month] = yearAndMonth
    let nextYear = year
    let nextMonth = month - 1
    if (nextMonth === 0) {
      nextMonth = 12
      nextYear = year - 1
    }
    setYearAndMonth([nextYear, nextMonth])
  }

  const handleMonthNavForwardButtonClick = () => {
    const [year, month] = yearAndMonth
    let nextYear = year
    let nextMonth = month + 1
    if (nextMonth === 13) {
      nextMonth = 1
      nextYear = year + 1
    }
    setYearAndMonth([nextYear, nextMonth])
  }

  useEffect(() => {
    setList([
      {
        id: "123456",
        month: 10,
        day: 13,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Bwian",
        status: "Approved",
      },
      {
        id: "123457",
        month: 10,
        day: 13,
        time: "6:00pm-8:00pm",
        type: "Elderly care",
        name: "Hudson",
        status: "Processing",
      },
      {
        id: "123458",
        month: 10,
        day: 10,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Bwian",
        status: "Approved",
      },
      {
        id: "123459",
        month: 10,
        day: 21,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Hudson",
        status: "Approved",
      },
    ])
  }, [dayMonthSelection])

  useEffect(() => {
    if (orderActive) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [orderActive])

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      },
    },
  ]

  const columns = [
    { field: "id", headerName: "ID", width: 50, sortable: false },
    {
      field: "date",
      headerName: "Date (DD-MM-YYYY)",
      width: 200,
      sortable: false,
    },
    { field: "time", headerName: "Time", width: 150, sortable: false },
    { field: "nurse", headerName: "Nurse", width: 150, sortable: false },
    { field: "status", headerName: "Status", width: 150, sortable: true },
  ]

  const rows = [
    {
      id: 1,
      date: "13-09-2022",
      time: "3:00pm - 5:00pm",
      nurse: "Example",
      status: "Approved",
    },
    {
      id: 2,
      date: "13-09-2022",
      time: "3:00pm - 5:00pm",
      nurse: "Example",
      status: "Approved",
    },
  ]

  return (
    <div className={`schedule ${orderActive && "schedule-fixed"}`}>
      <div className="schedule-content-container">
        <div className="scheduleMenu">
          <div className="schedule-topbar">
            <div className="schedule-date">Schedule</div>
            <div className="calendar-navigation-wrapper">
              <div
                className={`month-nav-arrow-buttons left-button-nav ${
                  yearAndMonth[1] === minYearAndMonth[1] &&
                  yearAndMonth[0] === minYearAndMonth[0]
                    ? "disabled-button-container"
                    : "nav-button-container"
                }`}
              >
                <ChevronLeft
                  className={`button ${
                    yearAndMonth[1] === minYearAndMonth[1] &&
                    yearAndMonth[0] === minYearAndMonth[0]
                      ? "disabled-button"
                      : ""
                  }`}
                  onClick={handleMonthNavBackButtonClick}
                />
              </div>
              <div
                className={`month-nav-arrow-buttons ${
                  yearAndMonth[1] === maxYearAndMonth[1] &&
                  yearAndMonth[0] === maxYearAndMonth[0]
                    ? "disabled-button-container"
                    : ""
                }`}
              >
                <ChevronRight
                  onClick={handleMonthNavForwardButtonClick}
                  className={`button ${
                    yearAndMonth[1] === maxYearAndMonth[1] &&
                    yearAndMonth[0] === maxYearAndMonth[0]
                      ? "disabled-button"
                      : "nav-button-container"
                  }`}
                />
              </div>
            </div>
          </div>
          <Calendar
            yearAndMonth={yearAndMonth}
            monthName={label}
            selectedDay={dayMonthSelection}
            onDayClick={setDayMonthSelection}
            selectedEvent={eventSelection}
            onEventClick={setEventSelection}
            list={list}
          />
        </div>
        <div className="order-content-container">
          <div className="order-topbar">
            <div className="order-topbar-nav">
              <div className="order-tab">Requests</div>
              <div className="order-tab">Approved</div>
            </div>
          </div>
          <div className="order-container">
            <DataGrid
              className="datagrid"
              rows={rows}
              columns={columns.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
              disableColumnFilter
              disableColumnMenu
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </div>
  )
}
