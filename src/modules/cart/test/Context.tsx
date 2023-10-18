// Context.tsx

import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  selectedItems: string[]; // 체크박스 선택 값을 배열로 저장
  updateSelectedItems: (newItems: string[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const updateSelectedItems = (newItems: string[]) => {
    setSelectedItems(newItems);
  };

  return (
    <AppContext.Provider value={{ selectedItems, updateSelectedItems }}>
      {children}
    </AppContext.Provider>
  );
}
