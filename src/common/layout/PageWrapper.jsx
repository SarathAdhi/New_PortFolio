import React from "react";

export const PageWrapper = ({ children }) => {
  return (
    <main className="p-2 md:p-5 h-screen flex gap-4 overflow-hidden bg-black">
      {children}
    </main>
  );
};
