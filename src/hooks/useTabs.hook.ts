import { useState } from "react";

export const useTabs = (initialTabs: any, allTabs: any) => {
  const [currentIdx, setCurrentIdx] = useState(initialTabs);

  if (!allTabs || !Array.isArray(allTabs)) {
    return {
      currentItem: {},
    };
  }
  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};
