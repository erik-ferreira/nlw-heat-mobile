import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { io } from "socket.io-client";

import { api } from "../../services/api";

import { Message, MessageProps } from "../Message";

import { MESSAGES_EXAMPLE } from "../../utils/messages";

import { styles } from "./styles";

let messagesQueue: MessageProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (newMessage) => {
  messagesQueue.push(newMessage);
});

function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function loadLast3Messages() {
      const messagesResponse = await api.get<MessageProps[]>("/messages/last3");
      setCurrentMessages(messagesResponse.data);
    }

    loadLast3Messages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        );
        messagesQueue.shift();
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <FlatList
      data={currentMessages}
      renderItem={({ item }) => <Message data={item} />}
      keyExtractor={(item) => item.id}
      style={styles.container}
      contentContainerStyle={styles.contentList}
      keyboardShouldPersistTaps="never"
    />
  );
}

export { MessageList };
