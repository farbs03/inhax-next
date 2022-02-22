import React, { useState, useEffect } from 'react'

import {Timeline} from 'antd'

import { motion } from 'framer-motion'

import WinterHax from "../../public/winter-hax.png"
import Snowfall from 'react-snowfall'
import WinterBackdrop from "../../public/winter-backdrop.png"

import {containerVariant, textVariant} from "../../utils/variants"

import Link from "next/link"
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const Mudsock2022 = () => {

    const timelineItems = [
        {
            label: "Friday, January 14th, 6:00-8:00 PM", 
            description: "Mudsock Hackathon begins! Join us at Launch Fishers for the starting ceremony from 6:00-8:00 PM, where the theme and other important info will be announced. In addition, free food and merch will be available!"
        },
        {
            label: "Monday, January 19th, 8:00 AM-5:00 PM.", 
            description: "Work on your project at Launch Fishers from 8:00 AM-5:00 PM."
        },
        {
            label: "Wednesday, January 19th, 6:00-8:00 PM", 
            description: "Solve challenging coding problems at Launch Fishers from 6:00-8:00 PM, where prizes will be handed out to anybody who successfully completes all of them! This is optional, and problems are solved individually."
        },
        {
            label: "Friday, January 21st, 11:59", 
            description: "Final day of the event! Make sure to submit your projects by 11:59 tonight, where a GitHub link to your code and a link to a video showcasing the project are required."
        },
        {
            label: "Saturday, January 22nd, 3:00-5:00 PM", 
            description: "Ending ceremony of the event, hosted once again at Launch Fishers, from 3:00-5:00 PM. Results will be announced and awards to the winners will be distributed. Thanks for your participation in the event, and we hope to see you next time!"
        }
    ]

    const [beep, setBeep] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setBeep(!beep)
        }, 1000)
    })

    return(
        <>
            <div>

                <Snowfall
                    snowflakeCount={100}
                />

                <div className='flex items-center mt-4'>
                    <button className='hover:text-primary transition duration-200 ease-in'>
                        <Link href="/">
                            <motion.div className='text-lg flex items-center gap-2 font-semibold' variants={textVariant}>
                                <ArrowLeftIcon className='w-6 h-6' />Home
                            </motion.div>
                        </Link>
                    </button>
                </div>

                <motion.div 
                    variants={containerVariant} 
                    initial="hidden" 
                    animate="visible"
                    className='flex flex-col items-center'
                >

                    <motion.div className='mt-10' variants={containerVariant}>
                        <motion.div 
                            whileHover={{y: -2}} 
                            className='mx-auto w-fit'
                        >
                            <Image src={WinterHax} width={120} height={120} />
                        </motion.div>
                        <p className='text-4xl font-bold font-mono'>  <span className='text-[#558fcf]'>$</span> mudsock 2022<span style={{visibility: beep ? 'visible' :'hidden', color : "#558fcf"}}>_</span></p>

                    </motion.div>
                    
                    <div className='text-center mt-2'>
                        <motion.div variants={textVariant}>
                            <p className="font-semibold text-lg max-w-3xl mx-auto">Welcome to our first event! Below you can view all of the results and pictures from the event, as well as some of the videos that were submitted!</p>
                        </motion.div>

                        <motion.div variants={textVariant}>
                        </motion.div>

                    </div>

                    
                    <div className="my-20">
                        <p className="font-bold text-3xl text-center mb-1">Results</p>
                        <p>In progress :)</p>
                    </div>

                </motion.div>
            </div>
        </>
    )
}
export default Mudsock2022