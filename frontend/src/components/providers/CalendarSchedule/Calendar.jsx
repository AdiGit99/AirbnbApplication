import { useEffect } from "react"
import classNames from "classnames"
import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import weekOfYear from "dayjs/plugin/weekOfYear"
import { ChevronLeft, ChevronRight, Add } from "@mui/icons-material"
import "./calendar.scss"

dayjs.extend(weekday)
dayjs.extend(weekOfYear)

export default function Calendar({
  yearAndMonth,
  onYearAndMonthChange,
  monthName,
  maxYearAndMonth,
  minYearAndMonth,
  selectedDay,
  onDayClick,
  selectedEvent,
  onEventClick,
  onIconClick,
  list,
}) {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"]

  const getNumberOfDaysInMonth = (year, month) => {
    return dayjs(`${year}-${month}-01`).daysInMonth()
  }

  const createDaysForCurrentMonth = (year, month) => {
    return [...Array(getNumberOfDaysInMonth(year, month))].map((_, index) => {
      return {
        dateString: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: true,
        month: month,
      }
    })
  }

  const createDaysForPreviousMonth = (year, month, currentMonthDays) => {
    const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].dateString)
    const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month")

    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday

    const previousMonthLastMondayDayOfMonth = dayjs(
      currentMonthDays[0].dateString
    )
      .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
      .date()

    return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((_, index) => {
      return {
        dateString: dayjs(
          `${previousMonth.year()}-${previousMonth.month() + 1}-${
            previousMonthLastMondayDayOfMonth + index
          }`
        ).format("YYYY-MM-DD"),
        dayOfMonth: previousMonthLastMondayDayOfMonth + index,
        isCurrentMonth: false,
        isPreviousMonth: true,
      }
    })
  }

  const createDaysForNextMonth = (year, month, currentMonthDays) => {
    const lastDayOfTheMonthWeekday = getWeekday(
      `${year}-${month}-${currentMonthDays.length}`
    )
    const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month")
    const visibleNumberOfDaysFromNextMonth = 6 - lastDayOfTheMonthWeekday

    return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
      return {
        dateString: dayjs(
          `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
        ).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: false,
        isNextMonth: true,
      }
    })
  }

  // sunday === 0, saturday === 6
  const getWeekday = (dateString) => {
    return dayjs(dateString).weekday()
  }

  const isWeekendDay = (dateString) => {
    return [6, 0].includes(getWeekday(dateString))
  }

  const [year, month] = yearAndMonth

  let currentMonthDays = createDaysForCurrentMonth(year, month)
  let previousMonthDays = createDaysForPreviousMonth(
    year,
    month,
    currentMonthDays
  )
  let nextMonthDays = createDaysForNextMonth(year, month, currentMonthDays)

  const [nextYear, nextMonth] = [
    month === 12 ? year + 1 : year,
    month === 12 ? 1 : month + 1,
  ]
  let currentNextMonthDays = createDaysForCurrentMonth(nextYear, nextMonth)
  let previousNextMonthDays = createDaysForPreviousMonth(
    nextYear,
    nextMonth,
    currentNextMonthDays
  )
  let nextNextMonthDays = createDaysForNextMonth(
    nextYear,
    nextMonth,
    currentNextMonthDays
  )

  let calendarGridDayObjects = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ]

  let nextCalendarGridDayObjects = [
    ...previousNextMonthDays,
    ...currentNextMonthDays,
    ...nextNextMonthDays,
  ]

  return (
    <div className="calendar-root-schedule">
      <div className="calendar-wrapper">
        <div className="calendar-date-time-container">
          <span className="calendar-date-time">
            {monthName} {yearAndMonth[0]}
          </span>
          <span className="numberAppointments">Num Appointments</span>
        </div>
        <div className="days-of-week">
          {daysOfWeek.map((day, index) => (
            <div key={index} className={classNames("day-of-week-header-cell")}>
              {day}
            </div>
          ))}
        </div>
        <div className="days-grid">
          {calendarGridDayObjects.map((day) => (
            <div
              key={day.dateString}
              className={classNames("day-grid-item-container", {
                "weekend-day": isWeekendDay(day.dateString),
                "current-month": day.isCurrentMonth,
              })}
            >
              <div
                className={`day-content-wrapper `}
                onClick={() => {
                  onDayClick([day.dayOfMonth, day.month])
                }}
              >
                <div
                  className={`day-grid-item-header ${
                    selectedDay[0] === day.dayOfMonth &&
                    selectedDay[1] === day.month
                      ? "day-grid-item-header-active"
                      : ""
                  }`}
                >
                  {day.dayOfMonth}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="calendar-wrapper">
        <div className="calendar-date-time-container">
          <span className="calendar-date-time">
            {dayjs()
              .month(nextMonth - 1)
              .format("MMMM")}{" "}
            {nextYear}
          </span>
          <span className="numberAppointments">Num Appointments</span>
        </div>
        <div className="days-of-week">
          {daysOfWeek.map((day, index) => (
            <div key={index} className={classNames("day-of-week-header-cell")}>
              {day}
            </div>
          ))}
        </div>
        <div className="days-grid">
          {nextCalendarGridDayObjects.map((day) => (
            <div
              key={day.dateString}
              className={classNames("day-grid-item-container", {
                "weekend-day": isWeekendDay(day.dateString),
                "current-month": day.isCurrentMonth,
              })}
            >
              <div
                className="day-content-wrapper"
                onClick={() => {
                  onDayClick([day.dayOfMonth, day.month])
                }}
              >
                <div
                  className={`day-grid-item-header ${
                    selectedDay[0] === day.dayOfMonth &&
                    selectedDay[1] === day.month
                      ? "day-grid-item-header-active"
                      : ""
                  }`}
                >
                  {day.dayOfMonth}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
