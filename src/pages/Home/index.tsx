import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";

import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { SignInBox } from "../../components/SignInBox";
import { MessageList } from "../../components/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm";

import { styles } from "./styles";

function Home() {
  const { user } = useAuth();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Header />

        <MessageList />

        {user ? <SendMessageForm /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  );
}

export { Home };
