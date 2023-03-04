import { useEffect, useRef } from "react";

export const useClick = <T,>(onClick: () => any) => {
  const elementRef = useRef<T>(null);
  useEffect(() => {
    const element = elementRef.current;
    if (element instanceof HTMLElement) {
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element instanceof HTMLElement) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return elementRef;
};
