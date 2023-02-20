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
  monthYearView,
  onMonthYearChange,
  monthName,
  maxMonthAndYear,
  minMonthAndYear,
  selectedDay,
  onDayClick,
  selectedEvent,
  onEventClick,
  setOrderActive,
  data,
}) {
  //Daysjs months are zero-indexed
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  //Number of days in month for map
  const getNumberOfDaysInMonth = (year, month) => {
    return dayjs(`${year}-${month}-01`).daysInMonth()
  }
  // sunday === 0, saturday === 6
  const getWeekday = (dateString) => {
    return dayjs(dateString).weekday()
  }

  const isWeekendDay = (dateString) => {
    return [6, 0].includes(getWeekday(dateString))
  }

  const createDaysForCurrentMonth = (year, month) => {
    return [...Array(getNumberOfDaysInMonth(year, month))].map((_, index) => {
      return {
        dateString: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: true,
        month: month,
        year: year,
      }
    })
  }

  const createDaysForPreviousMonth = (year, month, currentMonthDays) => {
    //Need to get first date from previous month that is still visible in this month
    const dayOfWeek = getWeekday(currentMonthDays[0].dateString)
    const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month")
    const previousMonthVisible = dayjs(currentMonthDays[0].dateString)
      .subtract(dayOfWeek, "day")
      .date()

    return [...Array(dayOfWeek)].map((_, index) => {
      return {
        dateString: dayjs(
          `${previousMonth.year()}-${previousMonth.month() + 1}-${
            previousMonthVisible + index
          }`
        ).format("YYYY-MM-DD"),
        dayOfMonth: previousMonthVisible + index,
        isCurrentMonth: false,
        isPreviousMonth: true,
        month: dayjs(`${previousMonth.month() + 1}`).format("MM"),
        year: dayjs(`${previousMonth.year()}`).format("YYYY"),
      }
    })
  }

  const createDaysForNextMonth = (year, month, currentMonthDays) => {
    const lastVisibleDay = getWeekday(
      `${year}-${month}-${currentMonthDays.length}`
    )
    const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month")
    const visibleNumberOfDaysFromNextMonth = 6 - lastVisibleDay

    return [...Array(visibleNumberOfDaysFromNextMonth)].map((_, index) => {
      return {
        dateString: dayjs(
          `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
        ).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: false,
        isNextMonth: true,
        month: dayjs(`${nextMonth.month() + 1}`).format("MM"),
        year: dayjs(`${nextMonth.year()}`).format("YYYY"),
      }
    })
  }

  const [month, year] = monthYearView

  //Use above functions to get months
  let currentMonthDays = createDaysForCurrentMonth(year, month)
  let previousMonthDays = createDaysForPreviousMonth(
    year,
    month,
    currentMonthDays
  )
  let nextMonthDays = createDaysForNextMonth(year, month, currentMonthDays)

  let calendarGridDayObjects = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ]

  const handleMonthNavBackButtonClick = () => {
    let nextYear = year
    let nextMonth = month - 1
    if (nextMonth === 0) {
      nextMonth = 12
      nextYear = year - 1
    }
    onMonthYearChange([nextMonth, nextYear])
  }

  const handleMonthNavForwardButtonClick = () => {
    let nextYear = year
    let nextMonth = month + 1
    if (nextMonth === 13) {
      nextMonth = 1
      nextYear = year + 1
    }
    onMonthYearChange([nextMonth, nextYear])
  }

  return (
    <div className="calendar-root-appointment">
      <div className="navigation-header">
        <div className="calendar-date-time-container">
          <span className="calendar-date-time">
            {monthName} {monthYearView[1]}
          </span>
        </div>
        <div className="calendar-navigation-wrapper">
          <div
            className={`month-nav-arrow-buttons left-button-nav ${
              month === minMonthAndYear[0] && year === minMonthAndYear[1]
                ? "disabled-button-container"
                : "nav-button-container"
            }`}
          >
            <ChevronLeft
              className={`button ${
                month === minMonthAndYear[0] && year === minMonthAndYear[1]
                  ? "disabled-button"
                  : ""
              }`}
              onClick={handleMonthNavBackButtonClick}
            />
          </div>
          <div
            className={`month-nav-arrow-buttons ${
              month === maxMonthAndYear[0] && year === maxMonthAndYear[1]
                ? "disabled-button-container"
                : ""
            }`}
          >
            <ChevronRight
              onClick={handleMonthNavForwardButtonClick}
              className={`button ${
                month === maxMonthAndYear[0] && year === maxMonthAndYear[1]
                  ? "disabled-button"
                  : "nav-button-container"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="calendar-wrapper">
        <div className="days-of-week">
          {daysOfWeek.map((day, index) => (
            <div key={index} className={"day-of-week-header-cell"}>
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
                "day-grid-item-container-active":
                  selectedDay[0] === day.dayOfMonth &&
                  selectedDay[1] === day.month &&
                  selectedDay[2] === day.year,
                // "day-grid-item-contain-week-active":
                //   dayjs()
              })}
            >
              <div
                className="day-content-wrapper"
                onClick={() => {
                  onDayClick([day.dayOfMonth, day.month, day.year])
                  onEventClick(null)
                }}
              >
                <div className="day-grid-item-header">{day.dayOfMonth}</div>
                {data
                  .filter((item) => {
                    return (
                      item.day === day.dayOfMonth &&
                      item.month === day.month &&
                      item.year === day.year
                    )
                  })
                  .map((item) => (
                    <div key={item.id} className="day-grid-item-wrapper">
                      <div
                        className={`day-grid-event-item ${
                          selectedEvent === item.id &&
                          "day-grid-event-item-active"
                        } ${
                          item.status === "Processing" &&
                          "day-grid-event-item-processing"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          onEventClick(item.id)
                          onDayClick([day.dayOfMonth, day.month, day.year])
                        }}
                      >
                        <div className="day-grid-event-block" />
                        {/* <span className="day-grid-event-name">test</span> */}
                        <span className="day-grid-event-time">{item.time}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
