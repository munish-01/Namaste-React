import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // check is online
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    // WHEN USER offline - i will update it to false
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    // WHEN USER online - i will update it to true
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;
