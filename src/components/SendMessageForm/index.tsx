import React, { useState } from "react";
import { View, TextInput, Keyboard } from "react-native";

import { api } from "../../services/api";

import { Button } from "../Button";

import { COLORS, FLASH_MESSAGE } from "../../theme";

import { styles } from "./styles";

function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      try {
        setSendingMessage(true);
        const { status } = await api.post("/messages", {
          message: messageFormatted,
        });

        if (status === 200) {
          setMessage("");
          Keyboard.dismiss();

          FLASH_MESSAGE.messageSuccess("Mensagem enviada com sucesso!");
        }
      } catch (err) {
        console.log(err);
        FLASH_MESSAGE.messageError("Erro ao enviar a mensagem");
      } finally {
        setSendingMessage(false);
      }
    } else {
      FLASH_MESSAGE.messageWarning("Preencha o campo para enviar a mensagem.");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        editable={!sendingMessage}
      />

      <Button
        title="ENVIAR MENSAGEM"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}

export { SendMessageForm };
