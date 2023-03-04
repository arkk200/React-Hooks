import { useEffect, useRef } from "react";

export const useFadeIn = <T>({ duration = 1, delay = 0 } = {}) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const element = ref.current;
    if (element instanceof HTMLElement) {
      element.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      element.style.opacity = "1";
    }
  }, []);
  return { ref, style: { opacity: 0 } };
};
