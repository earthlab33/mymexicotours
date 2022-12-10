import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }, AppProps) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <div className="container mx-auto my-6">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
