import { useEffect, useState } from "react"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { AuthContext } from "../../../context/AuthContext"
import axios from "axios"

import OrderModal from "../../../components/members/OrderModal/orderModal"
import Calendar from "../../../components/members/CalendarAppointments/Calendar"
import {
  FormatListBulleted,
  AddOutlined,
  CloseOutlined,
} from "@mui/icons-material"

import "./appointments.scss"
dayjs.extend(customParseFormat)

export default function Appointments() {
  const [filterMenu, setFilterMenu] = useState(false)
  //Filter options,
  //For weekFilter, if true, return all appointments during same week of selected day
  //For statusFilter, if true, return all appointments that are approved
  const [weekFilter, setWeekFilter] = useState(false)
  const [statusFilter, setStatusFilter] = useState(false)

  //Function to convert date object to array of [day,month,year]
  const toNums = (data) => {
    const day = dayjs(data).date()
    const month = dayjs(data).month() + 1
    const year = dayjs(data).year()
    return [day, month, year]
  }

  const getWeek = (data) => {
    if (data.length) {
      const [d, m, y] = data
      const date = d.toString() + "-" + m.toString() + "-" + y.toString()
      var temp = []
      temp.push(dayjs(date, "D-M-YYYY").startOf("week"))
      temp.push(dayjs(date, "D-M-YYYY").endOf("week"))

      const week = temp.map((item) => {
        return toNums(item)
      })
      return week
    }
  }

  let today = new Date()
  const date = toNums(today)
  //Selected day by user, if not selected - default is today
  const [selectedDayMonthYear, setSelectedDayMonthYear] = useState(date)
  const [selectedWeek, setSelectedWeek] = useState(
    getWeek(selectedDayMonthYear)
  )

  //Current calendar view
  const [monthYearView, setMonthYearView] = useState([date[1], date[2]])

  const [data, setData] = useState([])
  const [list, setList] = useState([])
  const [eventSelection, setEventSelection] = useState(null)

  const [orderActive, setOrderActive] = useState(false)

  let label = dayjs()
    .month(monthYearView[0] - 1)
    .format("MMMM")

  const maxMonthAndYear =
    dayjs().month() > 7
      ? [dayjs().month() - 7, dayjs().year() + 1]
      : [dayjs().month() + 5, dayjs().year()]

  const minMonthAndYear = [dayjs().month() + 1, dayjs().year()]

  //Manually set data for demo purposes
  useEffect(() => {
    setData([
      {
        id: "1",
        month: 2,
        day: 23,
        year: 2023,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Adrian",
        status: "Approved",
      },
      {
        id: "2",
        month: 2,
        day: 13,
        year: 2023,
        time: "6:00pm-8:00pm",
        type: "Elderly care",
        name: "Hudson",
        status: "Processing",
      },
      {
        id: "3",
        month: 2,
        day: 2,
        year: 2023,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Bwian",
        status: "Approved",
      },
      {
        id: "4",
        month: 2,
        day: 21,
        year: 2023,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Hudson",
        status: "Processing",
      },
      {
        id: "5",
        month: 2,
        day: 22,
        year: 2023,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Hudson",
        status: "Approved",
      },
      {
        id: "6",
        month: 2,
        day: 23,
        year: 2023,
        time: "5:00pm-7:00pm",
        type: "Elderly care",
        name: "Hudson",
        status: "Approved",
      },
      {
        id: "7",
        month: 3,
        day: 10,
        year: 2023,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Hudson",
        status: "Approved",
      },
      {
        id: "8",
        month: 3,
        day: 20,
        year: 2023,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Hudson",
        status: "Processing",
      },
      {
        id: "9",
        month: 3,
        day: 21,
        year: 2023,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        name: "Hudson",
        status: "Processing",
      },
    ])
  }, [])

  //filtered lists based on selected day
  useEffect(() => {
    let temp
    if (selectedDayMonthYear.length) {
      temp = data.filter((item) => {
        return (
          item.day === selectedDayMonthYear[0] &&
          item.month === selectedDayMonthYear[1] &&
          item.year === selectedDayMonthYear[2]
        )
      })
    } else {
      temp = data
    }

    if (weekFilter) {
      let week
      if (selectedDayMonthYear.length) {
        week = getWeek(selectedDayMonthYear)
      } else {
        week = getWeek(date)
      }
      console.log(week)
      //in production, we can do the following to get a date range to filter appointments in database
      //Get appointments with dates greater than week[0] (start of week) and less than week[1] (end of week)
      // const body = { userId, week[0], week[1]}
      // try {
      //   fetch("/api/appointments", {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(body),
      //   }).then((res) => res.json()).then((data) => {
      //     setList(data)
      //   })
      // } catch (err) {
      //   console.log(err)
      // }
      temp = temp.filter((item) => {
        return (
          item.day >= week[0][0] &&
          item.day <= week[1][0] &&
          item.month === week[0][1] &&
          item.year === week[0][2]
        )
      })
    } else if (statusFilter) {
      temp = temp.filter((item) => {
        return item.status === "Approved"
      })
    }
    setList(temp)
  }, [data, selectedDayMonthYear, weekFilter, statusFilter])

  return (
    <div className="appointment">
      <div className={`order-screen ${orderActive && "order-screen-active"}`}>
        test
        <div
          className="close-order-button"
          onClick={() => setOrderActive(false)}
        >
          <CloseOutlined className="close-order-screen" />
        </div>
      </div>
      <div className="appointment-topbar">
        <h2 className="appointment-topbar-title">Appointment Details</h2>
        <div
          className="add-order-button"
          onClick={() => console.log("in production")}
        >
          <span>Create new order</span>
          <div className="add-order-icon-container">
            <AddOutlined className="add-order-icon" />
          </div>
        </div>
      </div>
      <div className="appointment-content-container">
        <div className="appointmentMenu">
          <div className="appointment-menu-topbar">
            <div className="appointment-date">
              Upcoming appointments{" "}
              {selectedDayMonthYear.length ? (
                <>
                  on{" "}
                  {dayjs()
                    .month(selectedDayMonthYear[1] - 1)
                    .format("MMMM")}{" "}
                  {selectedDayMonthYear[0]}{" "}
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="filter-container">
              <div
                className="filter-icon-container"
                onClick={() => setFilterMenu(!filterMenu)}
              >
                <FormatListBulleted className="appointment-icon" />
              </div>
              <div
                className={`filter-menu-container ${
                  filterMenu && "filter-menu-container-active"
                }`}
              >
                <div
                  className={`filter ${weekFilter && "filter-active"}`}
                  onClick={() => {
                    setWeekFilter(true)
                    setStatusFilter(false)
                    setFilterMenu(false)
                  }}
                >
                  By Week
                </div>
                <div
                  className={`filter ${statusFilter && "filter-active"}`}
                  onClick={() => {
                    setWeekFilter(false)
                    setStatusFilter(true)
                    setFilterMenu(false)
                  }}
                >
                  By Status
                </div>
              </div>
            </div>
            <div
              className="appointment-icon-container"
              onClick={() => {
                setSelectedDayMonthYear([])
                setWeekFilter(false)
                setStatusFilter(false)
              }}
            >
              Show All
            </div>
          </div>
          <div className="appointmentMenuWrapper">
            {list.length ? (
              <>
                {list.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setEventSelection(item.id)}
                    className={`event-detail-container ${
                      eventSelection === item.id &&
                      "event-detail-container-active"
                    } ${
                      item.status === "Processing" &&
                      "event-detail-container-processing"
                    }`}
                  >
                    <div className="event-time-container">
                      <div className="event-time-block" />
                      <div className="event-time">{item.time}</div>
                      <div className="event-date">
                        {dayjs()
                          .month(item.month - 1)
                          .format("MMMM")}{" "}
                        {item.day}
                      </div>
                    </div>
                    <h2 className="event-service-type">{item.type}</h2>
                    <h2 className="event-service-provider">{item.name}</h2>
                  </div>
                ))}
              </>
            ) : (
              <h3 className="no-appointments">
                There are no appointments on this day
              </h3>
            )}
          </div>
        </div>
        <div className="calendar-container">
          <Calendar
            monthYearView={monthYearView}
            onMonthYearChange={setMonthYearView}
            monthName={label}
            maxMonthAndYear={maxMonthAndYear}
            minMonthAndYear={minMonthAndYear}
            selectedDay={selectedDayMonthYear}
            onDayClick={setSelectedDayMonthYear}
            selectedEvent={eventSelection}
            onEventClick={setEventSelection}
            data={data}
          />
        </div>
      </div>
    </div>
  )
}
