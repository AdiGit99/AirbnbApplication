import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../../context/AuthContext"
import axios from "axios"
import { io } from "socket.io-client"
import { FilterList } from "@mui/icons-material"

import { Send, AddToPhotos } from "@mui/icons-material"
import Conversation from "../../../components/members/Conversations/Conversation"
import Message from "../../../components/members/Message/Message"
import "./messages.scss"

// In future, set default chat with Bamboos Helper
export default function Messenger() {
  //All messages states
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [incomingMessage, setIncomingMessage] = useState(null)
  const socket = useRef()
  const { user } = useContext(AuthContext)
  const scrollRef = useRef()

  const [detailsActive, setDetailsActive] = useState(false)
  const textAreaRef = useRef(null)

  useEffect(() => {
    socket.current = io("ws://localhost:8800")
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      })
    })
  }, [])

  useEffect(() => {
    socket.current.emit("addUser", user._id)
  }, [user])

  useEffect(() => {
    incomingMessage &&
      currentChat?.members.includes(incomingMessage.sender) &&
      setMessages((prev) => [...prev, incomingMessage])
  }, [incomingMessage, currentChat])

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id)
        setConversations(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getConversations()
  }, [user._id])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id)
        setMessages(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMessages()
  }, [currentChat])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    }

    const receiverId = currentChat.members.find((member) => member !== user._id)

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    })

    try {
      const res = await axios.post("/messages", message)
      setMessages([...messages, res.data])
      setNewMessage("")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.style.height = "0px"
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }
  }, [newMessage])

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuTitle-container">
          <h2 className="chatMenuTitle">Messages</h2>
          <div className="chatMenu-filter">
            <FilterList className="chatMenu-filter-icon" />
          </div>
        </div>
        <div className="chatMenuWrapper">
          {/* <input placeholder="Enter new search" className="chatMenuInput" /> */}
          {conversations.map((c) => (
            <div key={c} onClick={() => setCurrentChat(c)}>
              <Conversation
                conversation={c}
                currentUser={user}
                selected={c === currentChat}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`chatBox ${detailsActive ? "chatBox-active" : ""}`}>
        <div className="chatBox-topbar">
          {true && (
            <>
              <h2 className="chatBox-contact">Bamboos Support</h2>
              <div
                className={`chatBox-button ${
                  detailsActive ? "chatBox-button-active" : ""
                }`}
                onClick={() => setDetailsActive(!detailsActive)}
              >
                {detailsActive ? "Hide details" : "Get details"}
              </div>
            </>
          )}
        </div>
        <div className="chatBoxWrapper">
          {currentChat && (
            <div className="chatBox-container">
              <div className="chatBoxMessages">
                {messages.map((m) => (
                  <div key={m} ref={scrollRef}>
                    <Message message={m} own={m.sender === user._id} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom-container">
                <div className="chatUploadButton-container">
                  <AddToPhotos className="chatUploadButton" />
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    ref={textAreaRef}
                    className="chatMessageInput"
                    placeholder="Type a message"
                    onChange={(e) => {
                      setNewMessage(e.target.value)
                    }}
                    onKeyDown={onEnterPress}
                    value={newMessage}
                    rows={1}
                  />
                  <div
                    className="chatSubmitButton-container"
                    onClick={handleSubmit}
                  >
                    <Send className="chatSubmitButton" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`chatDetails ${detailsActive ? "chatDetailsActive" : ""}`}
      ></div>
    </div>
  )
}
