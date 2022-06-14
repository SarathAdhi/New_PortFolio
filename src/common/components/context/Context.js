import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, [isMobile]);
  return (
    <Context.Provider
      value={{ _isMobile: [isMobileDevice, setIsMobileDevice] }}
    >
      {children}
    </Context.Provider>
  );
};
