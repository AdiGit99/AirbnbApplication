import "./message.scss"
import moment from "moment"

export default function Message({ message, own }) {
  const PF = process.env.PUBLIC_URL
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-profile">
        <img
          className="messageImg"
          src={PF + "assets/person/noAvatar.png"}
          alt=""
        />
      </div>
      <div className="message-content">
        <div className="message-info">
          <h3 className="message-name">Bamboos Support</h3>
          <h3 className="message-time">
            {moment(message.createdAt).fromNow()}
          </h3>
        </div>
        <p className="messageText">{message.text}</p>
      </div>
    </div>
  )
}
