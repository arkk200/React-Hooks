import { useEffect, useState } from "react";

export const useNetwork = (onChange: (online: boolean) => any) => {
  const [state, setState] = useState(navigator.onLine);
  const handleChange = () => {
    onChange(navigator.onLine);
    setState(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return state;
};
