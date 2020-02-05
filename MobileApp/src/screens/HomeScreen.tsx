import React, { useEffect, useState, useRef } from "react";
import { View } from "react-native";
import io from "socket.io-client";
import { GiftedChat } from 'react-native-gifted-chat'
import JoinScreen from './JoinScreen'

export default function HomeScreen () {
    const [recvMessages, setRecvMessages ] = useState<any>([])
    const [hasJoined, setHasJoined ] = useState<boolean>(false)
    const socket = useRef<any>(null)

    useEffect(() => {
        socket.current = io("http://192.168.1.114:3001")
        socket.current.on("message", (message: any ) => {
            setRecvMessages((prevState:any ) => GiftedChat.append(prevState, message));
        });
    }, []);

    const onSend = (messages: any ) => {
        console.log(messages);
        socket.current.emit("message", messages[0].text);
        setRecvMessages((prevState: any) => GiftedChat.append(prevState, messages));
    };

    return (
        <View style={{ flex: 1 }}>
            {
                hasJoined ?
                    <GiftedChat
                        messages={recvMessages}
                        onSend={messages => onSend(messages)}
                        user={{
                        _id: 1,
                        }}
                    />
                : <JoinScreen />
            } 
        </View>
    );
}