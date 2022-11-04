import { useEffect, useState } from "react";
import { ContextProvider } from "../common/components/context/Context";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
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
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />

      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
