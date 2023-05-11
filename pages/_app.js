import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import home from "./home";
import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Navbar />  
      <AnimatePresence initial={true} mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
