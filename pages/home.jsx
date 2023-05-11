import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Navbar from "./components/Navbar"
export default function home(){
    const [pieces,setPieces] = useState(100)
    const stopConfetti = () => {
        setTimeout(() => {
          setPieces(0);
        }, 3000);
      };
    
    useEffect(() => {
      stopConfetti();
    }, [1]);
    return(
        <div>
            <h1>Home</h1>
            <Confetti gravity={0.2} numberOfPieces={pieces} />
        </div>
    )
}