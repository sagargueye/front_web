import React from "react";
import useServer from "../services/useServer";
import {Button, ListGroup} from "react-bootstrap";

const ChatRoom = () => {
    // Creates a websocket and manages messaging
    const { globalMessages, sendMessage } = useServer();

    // Message to be sent
    const [newMessage, setNewMessage] = React.useState("");

    const handleNewMessageChange = (event) => {
        console.log("handleNewMessageChange event: ", event)
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage, "chatGlobal");
        setNewMessage("");
    };

    return (
        <div className="chat-room-container">
            <h1 className="room-name">Chat Global</h1>
            <div className="messages-container">
                <ListGroup>
                    {globalMessages.map((message, i) => (
                        <ol
                            key={i}
                            className={`message-item ${
                                message.ownedByCurrentUser ? "my-message" : "received-message"
                            }`}
                        >
                            {message.value}
                        </ol>
                    ))}
                </ListGroup>
            </div>
            <textarea
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="new-message-input-field"
            />
            <Button variant="warning"
                    onClick={handleSendMessage}
                    className="send-message-button">Send</Button>{' '}

        </div>
    );
};

export default ChatRoom;