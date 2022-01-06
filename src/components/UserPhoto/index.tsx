import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../../theme";
import avatarImg from "../../assets/avatar.png";

import { styles } from "./styles";

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  },
};

type Props = {
  imageUri: string | undefined;
  sizes?: "SMALL" | "NORMAL";
};

const AvatarDefault = Image.resolveAssetSource(avatarImg).uri;

function UserPhoto({ imageUri, sizes = "NORMAL" }: Props) {
  const { containerSize, avatarSize } = SIZES[sizes];

  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || AvatarDefault }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}

export { UserPhoto };
