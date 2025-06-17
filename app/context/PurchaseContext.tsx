"use client";

import React, { createContext, useContext, useState } from "react";

// Define the shape of the context
interface PurchaseContextType {
  hasPurchased: boolean;
  setHasPurchased: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const PurchaseContext = createContext<PurchaseContextType | undefined>(
  undefined
);

// Create a provider component
export const PurchaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasPurchased, setHasPurchased] = useState(false);

  return (
    <PurchaseContext.Provider value={{ hasPurchased, setHasPurchased }}>
      {children}
    </PurchaseContext.Provider>
  );
};

// Custom hook to use the context
export const usePurchase = () => {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error("usePurchase must be used within a PurchaseProvider");
  }
  return context;
};