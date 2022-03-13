import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import Image from "next/image"
import {containerVariant, textVariant, illustrationVariant} from "../utils/variants"

import squiggle from "../public/fancy-squiggle.svg"
import backdrop from "../public/backdrop2.png"
import Navbar from './Navbar'

const Hero = () => {

    const [beep, setBeep] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setBeep(!beep)
        }, 1000)
    })


    return(
        <div className="h-screen overflow-y-hidden mb-20">
            <Navbar />
            <motion.div 
                variants={containerVariant} 
                initial="hidden" 
                animate="visible" 
                className='overflow-y-hidden h-full relative flex flex-col items-center justify-center'
            >
                <div className='text-center mb-20 md:mb-12'>
                    
                    <motion.div variants={textVariant} className='mb-2 font-mono font-bold'>
                        <p className='text-4xl'><span className='text-primary'>$</span> indiana hax<span style={{visibility: beep ? 'visible' :'hidden', color : "#f89e9b"}}>_</span></p>
                    </motion.div>

                    <motion.div variants={textVariant}>
                        <p className='font-semibold text-lg'><span className='text-primary'>{'// '}</span> Hosting Hackathons for High School Students, Based in Indiana</p>
                    </motion.div>

                </div>

                <motion.div variants={containerVariant} className='relative overflow-y-hidden'>
                    <motion.div
                        initial={{y: '20vh'}}
                        animate={{y: 0}}
                        transition={{delay: 0.6, duration: 0.8, type: "spring"}}
                        className='w-fit overflow-y-hidden'
                    >
                            <Image alt="backdrop" src={backdrop} layout='intrinsic' className='dark:invert' />
                    </motion.div>

                    <div className='absolute bottom-1 w-full' style={{filter: "drop-shadow(0px -15px 10px rgba(248, 158, 155, 0.2)"}}>
                        <svg viewBox="0 0 1152 146" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-white dark:fill-gray-900 w-full'>
                            <path d="M285.876 45.843C156.432 45.843 44.6473 97.3333 0 146H1152V73V0C1111.85 45.5108 980.774 135.038 749.675 129.058C518.575 123.078 496.784 45.843 285.876 45.843Z" />
                        </svg>
                    </div>
                    <div className="absolute bottom-0 h-1 bg-white dark:bg-gray-900 w-full"></div>

                </motion.div>
            </motion.div>
        </div>
    )
}


export default Hero