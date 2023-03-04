import { useEffect } from "react";

export const useNotification = (
  title: string,
  options: NotificationOptions
) => {
  if (!window.Notification) return;
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (Notification.permission === "granted") {
          new Notification(title, options);
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};
