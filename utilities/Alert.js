import React from "react";
import { showMessage } from "react-native-flash-message";

export const ShowAlert = (type, message, description = null) => {
  //   showMessage({
  //     message,
  //     description,
  //     type, // you can use "info", "warning", "danger", or "success"
  //     icon: { icon: type, position: "left" }, // or provide custom icon/image
  //     duration: 3000, // duration in milliseconds (3000ms = 3s)
  //     //     renderFlashMessageIcon: () => (
  //     //       <Image
  //     //         source={{ uri: "https://example.com/your-image.png" }}
  //     //         style={{ width: 30, height: 30, borderRadius: 15 }}
  //     //       />
  //     //     ),
  //     style: { paddingVertical: 20, paddingHorizontal: 15 },
  //     titleStyle: { fontSize: 18, fontWeight: "bold" },
  //     textStyle: { fontSize: 16 },
  //   });

  const iconType = {
    success: "success",
    warning: "warning",
    danger: "danger",
    info: "info",
  };

  const backgroundColors = {
    success: "#4BB543", // Green
    warning: "#FFA500", // Orange
    danger: "#FF3B3B", // Red
    info: "#007AFF", // Blue
  };

  showMessage({
    message,
    description,
    type: type,
    icon: iconType[type],
    backgroundColor: backgroundColors[type], // Customize background color based on type
    color: "#FFFFFF", // White text color for better contrast
    duration: 3000, // Duration in milliseconds
    titleStyle: { fontSize: 18, fontWeight: "bold" },
    textStyle: { fontSize: 16 },
  });
};
