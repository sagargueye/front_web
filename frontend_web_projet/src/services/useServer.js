import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import {getItem} from "./LocaleStorage";

// Socket URL
const SOCKET_SERVER_URL = "http://localhost:4000";

const addNameOfSender = (receiveMessage) => {
    console.log("message: ", receiveMessage)
    return receiveMessage.userLogin+ ': ' + receiveMessage.value
}

const useServer = () => {
    const socketRef = useRef();
    // Sent and received messages
    const [globalMessages, setGlobalMessages] = useState([]);
    const [privateMessages, setPrivateMessages] = useState([]);

    useEffect(() => {
        // Creates a WebSocket connection
        socketRef.current = socketIOClient(
            SOCKET_SERVER_URL, {
                query: {
                    userLogin: getItem('userLogin'),
                    userId: getItem('userId'),
                },
        });

        // Listen incoming events from chatGlobal
        socketRef.current.on("newMessage", (message) => {
            // TODO PRINT NEW MESSAGE IN GLOBAL CHAT & PRIVATE CHAT
            console.log("newMessage: ", message)
            if (message.senderId !== socketRef.current.id) {
                message.value = addNameOfSender(message)
            }
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
            };
            if (message.type === "chatGlobal") {
                setGlobalMessages((globalMessages) => [...globalMessages, incomingMessage]);
            }
            else {
                setPrivateMessages((privateMessages) => [...privateMessages, incomingMessage]);
            }
        });

    // Listen incoming events from list
        socketRef.current.on("listRoom", (notification) => {
            // TODO PRINT LIST OF ROOMS AVAILABLE
            console.log("listRoom: ", notification)
        })

        // Destroys the socket reference
        // when the connection is closed
        return () => {
            socketRef.current.disconnect();
        };
    }, []);


    /*
    Sends a message to the server that
    forwards it to all users in the same room
    */
    const sendMessage = (message, typeChat) => {
        socketRef.current.emit("newMessage",
            {
                userLogin: getItem('userLogin'),
                userId: getItem('userId'),
                type: typeChat,
                value: message,
                senderId: socketRef.current.id,
        });
    };

    /*
    Create new room.
    */
    const createRoom = (roomName) => {
        socketRef.current.emit("createRoom",
            {
                userLogin: getItem('userLogin'),
                userId: getItem('userId'),
                roomName: roomName,
                senderId: socketRef.current.id,
            });
    };

    /*
    Join room.
    */
    const joinRoom = (roomId) => {
        socketRef.current.emit("joinRoom",
            {
                userLogin: getItem('userLogin'),
                userId: getItem('userId'),
                roomId: roomId,
                senderId: socketRef.current.id,
            });
    };

    /*
     Get list room.
    */
    const listRoom = () => {
        socketRef.current.emit("listRoom",
            {
                userLogin: getItem('userLogin'),
                userId: getItem('userId'),
                senderId: socketRef.current.id,
            });
    };

    return {
        globalMessages,
        privateMessages,
        sendMessage
    }
};

export default useServer;
