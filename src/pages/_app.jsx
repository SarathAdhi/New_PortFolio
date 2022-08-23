import { useEffect, useState } from "react";
import { ContextProvider } from "../common/components/context/Context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-[#fdfdfd]">
        <img className="w-96" src="/assets/loading.gif" />
      </div>
    );
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
