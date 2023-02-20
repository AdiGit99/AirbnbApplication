import { useContext, useState, useEffect } from "react"
import dayjs from "dayjs"
import { useNavigate } from "react-router-dom"
import { Tune } from "@mui/icons-material"

import { AccountFooter } from "../../../components/members/AccountFooter/AccountFooter"
import success from "../../../assets/green-tick.png"
import "./today.scss"

export default function Today() {
  const today = [dayjs().date(), dayjs().month()]
  const [selected, setSelected] = useState(0)
  const [list, setList] = useState([])
  const [todayList, setTodayList] = useState([])
  const [upcomingList, setUpcomingList] = useState([])

  useEffect(() => {
    setList([
      {
        id: "123456",
        month: 10,
        day: 13,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        client: "Bwian",
        status: "Approved",
        name: "test jones",
      },
      {
        id: "123457",
        month: 10,
        day: 13,
        time: "6:00pm-8:00pm",
        type: "Elderly care",
        client: "Hudson",
        status: "Approved",
        name: "test jones",
      },
      {
        id: "123458",
        month: 10,
        day: 10,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        client: "Bwian",
        status: "Processing",
        name: "test jones",
      },
      {
        id: "123459",
        month: 10,
        day: 21,
        time: "3:00pm-5:00pm",
        type: "Elderly care",
        client: "Hudson",
        status: "Approved",
        name: "test jones",
      },
    ])
  }, [])

  useEffect(() => {
    const filtered = list.filter((item) => {
      return (
        item.status === "Approved" &&
        item.name === "test jones" &&
        item.day === 13 &&
        item.month === 10
      )
    })
    setTodayList(filtered)
  }, [list])

  useEffect(() => {
    const filtered = list.filter((item) => {
      return (
        item.status === "Approved" &&
        item.name === "test jones" &&
        item.month >= 10 &&
        item.day !== 13
      )
    })
    setUpcomingList(filtered)
  }, [list])

  return (
    <div className="today">
      <div className="today-content-container">
        <div className="today-top-container">
          <h3 className="today-header">Your Appointments</h3>
          {/* <span className="today-all">All reservations</span> */}
        </div>
        <div className="today-tab-container">
          <div
            className={`today-tab ${selected === 0 ? "today-tab-active" : ""}`}
            onClick={() => setSelected(0)}
          >
            Today ({todayList.length})
          </div>
          <div
            className={`today-tab ${selected === 1 ? "today-tab-active" : ""}`}
            onClick={() => setSelected(1)}
          >
            Upcoming ({upcomingList.length})
          </div>
        </div>
        <div className="today-content">
          {todayList.length ? (
            <div className="today-work-container">
              {todayList.map((item) => (
                <div className="today-work-details">
                  <span>Client {item.client}</span>
                  <span>Time {item.time}</span>
                  <span>Type {item.type}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="today-things">
              <div className="today-icon-container">
                <img className="today-icon" src={success} alt="free" />
              </div>
              <span className="today-free">You are free today!</span>
            </div>
          )}
        </div>
      </div>
      <AccountFooter />
    </div>
  )
}
