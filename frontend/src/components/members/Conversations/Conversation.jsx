import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.scss";

export default function Conversation({ conversation, currentUser, selected }) {
  const [user, setUser] = useState(null);
  const PF = process.env.PUBLIC_URL;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users/getBasic/" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className={`conversation ${selected ? "conversation-active" : ""}`}>
      <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? PF + "assets/person/" + user?.firstname + user?.lastname + ".png"
            : PF + "assets/person/noAvatar.png"
        }
        alt=""
      />
      <span className="conversationName">
        {user?.firstname} {user?.lastname}
      </span>
    </div>
  );
}
