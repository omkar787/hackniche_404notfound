import React, { useEffect, useState } from "react";
import instance from "../../utils/axiosInstance";

export default function PushNotification(show_notification) {
  const [interest, setInterest] = useState(null);

  const effect_func = async () => {
    if (!interest) {
      const result = await instance.get("/users/get-intrest");
      console.log(result);
      const res = await instance.get(
        `/news/?limit=2&category=${result.data.intrest.join()}`
      );
      const ns = [];
      let showNotification = document.visibilityState === "visible";
      res.data.data.data.map((news) => {
        const title = news.title;
        const icon = news.image_url;
        const body = news.description;
        if (showNotification) {
          ns.push(new Notification(title, { body, icon }));
        }
      });
      setTimeout(() => {
        ns.map((notifs) => {
          notifs.close();
        });
      }, 10000);
    }
  };

  useEffect(() => {
    if (show_notification) {
      effect_func();
    }
  }, [show_notification]);

  return null;
}
