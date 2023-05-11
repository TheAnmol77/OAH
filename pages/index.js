import { React } from "react";
import {motion as m} from "framer-motion"
import Image from 'next/image'
function Index() {
    const d = new Date();
    return(
    <m.div
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className=" text-gray-900 overflow-hidden absolute top-0 left-0 w-full h-full bg-orange-200 lg:px-58 pr-16 "
    >
      <main>
        <div className="my-56 p-1 font-archivo overflow-hidden ">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center lg:text-center lg:text-8xl "
          >
            Home Sweet Home
          </m.h1>
        </div>
        <div className="flex overflow-hidden justify-between">
          <m.div
           animate={{ y: "-40%" }}
           initial={{ y: "100%" }}
           transition={{ delay: 0.5, duration: 0.5 }}
            className="font-latoBold text-left lg:text-6xl text-2xl"
          >
            <Image src="/../public/exp.png" width={1100} height={500}/>
          </m.div>
          <m.div
            animate={{ y: "0%" }}
            initial={{ y: "100%" }}
            className="text-right lg:text-2xl text-base"
          >
            <div className="overflow-hidden py-1">
              <Image src="/../public/logo1.png" width={500} height={300} />
            </div>
            <div className="overflow-hidden py-1">
              <m.h3></m.h3>
            </div>
            <div className="overflow-hidden py-1">
              <m.h3></m.h3>
            </div>
          </m.div>
        </div>
      </main>
    </m.div>
    );
}
export default Index;