import Link from 'next/link';
import { motion as m } from "framer-motion";
import { useRouter } from "next/router";
import home from '../home';

export default function Navbar(){
    const router = useRouter();
    return(
        <m.div className={`w-full shadow-lg z-10 overflow-hidden text-black text-black h-2/10 p-5 flex fixed top-0 ${router.pathname=="/"?"bg-transparent":"bg-[#f8e2c0]"}`}>
            <Link href={router.pathname=='home'?"/home":"/"}>
                <m.h1 
                    initial={{translateY:"20%",opacity:0}}
                    animate={{translateY:"0%",opacity:1}}
                    transition={{duration:1}}
                    exit={{translateY:0}}
                    className="text-3xl font-bold text-orange-900 overflow-hidden pt-4 pb-3">
                        The Shepherd's Heaven
                </m.h1>
            </Link> 
            <m.div
                initial={{translateY:"20%",opacity:0}}
                animate={{translateY:"0%",opacity:1}}
                transition={{duration:1}}
                exit={{translateY:0}}
                className='bg-green p-3 ml-auto w-2/4 flex justify-evenly'>
                {
                
                router.pathname!="/"&&router.pathname!="/login"&&router.pathname!="/SignUp"?
                (
                <div className='bg-green pt-3 pb-3 ml-auto w-2/4 text-xl flex justify-evenly'>
                <Link href="home">Home</Link>
                <Link href="medical">Medical</Link>
                <Link href="music">Music</Link>
                <Link href="store">Store</Link>
                <Link href="about">About</Link>

                </div>
                )
                :<div className='bg-green pt-3 pb-3 text-xl ml-auto w-2/4 flex justify-evenly'>

                <Link href="SignUp">SignUp</Link>
                <Link href="login">Login</Link>
            </div>}
            </m.div>
        </m.div>
    )
}