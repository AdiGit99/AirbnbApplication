import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  Menu,
  Search,
  FilterList,
  ChatBubble,
  ChatBubbleOutline,
  ContactSupport,
  Archive,
  Forum,
  RateReview,
  Send,
} from "@mui/icons-material"
import "./inbox.scss"

export default function Inbox() {
  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="inbox">
      <div
        className={`inbox-side-menu-container ${
          active ? "inbox-side-menu-container-active" : ""
        }`}
      >
        <h3 className="inbox-side-menu-header">Inbox</h3>
        <div className="inbox-side-menu-option inbox-side-menu-option-active">
          <ChatBubble className="inbox-side-menu-icon" />
          <span className="inbox-side-menu-option-name">All messages</span>
        </div>
        <div className="inbox-side-menu-option">
          <ContactSupport className="inbox-side-menu-icon" />
          <span className="inbox-side-menu-option-name">Bamboos Support</span>
        </div>
        <div className="inbox-side-menu-option">
          <Archive className="inbox-side-menu-icon" />
          <span className="inbox-side-menu-option-name">Archive</span>
        </div>
        <h3 className="inbox-side-menu-subheader">SETTINGS</h3>
        <div className="inbox-side-menu-option">
          <Forum className="inbox-side-menu-icon" />
          <span className="inbox-side-menu-option-name">Quick replies</span>
        </div>
        <div className="inbox-side-menu-option">
          <RateReview className="inbox-side-menu-icon" />
          <span className="inbox-side-menu-option-name">
            Scheduled messages
          </span>
        </div>
        <div className="inbox-side-menu-feedback-button">
          <Send className="inbox-side-menu-feedback-icon" />
          <span className="inbox-side-menu-feedback-name">Give feedback</span>
        </div>
      </div>
      <div
        className={`inbox-content-container ${
          active ? "inbox-content-container-active" : ""
        }`}
      >
        <div className="inbox-top-container">
          <div className="inbox-header-container">
            <div
              onClick={() => setActive(!active)}
              className="inbox-tab-icon-container"
            >
              <Menu className="inbox-tab-icon" />
            </div>
            <h3 className="inbox-header">All messages</h3>
          </div>
          <div className="inbox-search-wrapper">
            <div className="inbox-search-container">
              <Search className="inbox-search-icon-container" />
              <input
                type="text"
                placeholder="Search inbox"
                className="inbox-search"
              />
            </div>
            <div className="inbox-filter-icon-container">
              <FilterList className="inbox-filter-icon" />
            </div>
          </div>
        </div>
        <div className="inbox-content">
          <div className="inbox-no-messages-container">
            <ChatBubbleOutline className="inbox-messages-icon-container" />
            <h3 className="inbox-header">No new messages</h3>
            <span className="inbox-detail">
              If you're looking for a message, check the archive.
            </span>
            <div className="inbox-archive-button">Go to archive</div>
          </div>
        </div>
      </div>
    </div>
  )
}
