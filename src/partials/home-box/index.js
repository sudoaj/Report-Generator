import * as React from "react";
import { View, TouchableHighlight } from "react-native";
import { Text, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Action from "react-native-router-flux";

export default function HomeBox({
  customBgColor,
  content,
  iconName,
  iconColor,
  actionOnPress,
}) {
  const pressedThis = () => {
    console.log("pressed", actionOnPress);
    actionOnPress();
  };
  return (
    <TouchableHighlight onPress={pressedThis} underlayColor="rgba(0,0,0.9)">
      <View
        style={{
          backgroundColor: customBgColor,
          flex: 1,
          margin: 10,
          minHeight: 150,
          maxHeight: 150,
          minWidth: 150,
          maxWidth: 150,
          shadowRadius: 10,
          shadowColor: "#000",
          borderRadius: 10,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2.65,

          elevation: 8,
        }}
      >
        <View style={{ alignContent: "center", marginTop: 25 }}>
          <Ionicons
            name={iconName}
            size={50}
            color={iconColor == null ? "#2ed397" : iconColor}
            style={{ alignSelf: "center" }}
          />
          <Text style={{ alignSelf: "center" }}>{content}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
