import { showMessage } from "react-native-flash-message";

function messageSuccess(
  message: string,
  description: string = "",
  duration: number = 2000
) {
  showMessage({
    type: "success",
    icon: "success",
    message,
    description,
    duration,
  });
}

function messageError(
  message: string,
  description: string = "",
  duration: number = 2000
) {
  showMessage({
    type: "danger",
    icon: "danger",
    message,
    description,
    duration,
  });
}

function messageWarning(
  message: string,
  description: string = "",
  duration: number = 2000
) {
  showMessage({
    type: "warning",
    icon: "warning",
    message,
    description,
    duration,
  });
}

export const FLASH_MESSAGE = { messageSuccess, messageError, messageWarning };
