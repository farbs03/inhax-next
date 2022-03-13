import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

import {containerVariant, textVariant, eventVariant } from "../utils/variants"

const Events = () => {

    const eventList = [
        {
            href: "/events/mudsock-2022",
            title: "Mudsock Hackathon", 
            image: '/winter-hax.png', 
            year: "2022", 
            tags: [
                {
                    title: "Event Closed",
                    style: "px-2 py-1 text-xs bg-red-100 dark:bg-red-900 dark:bg-opacity-20 font-semibold text-red-500 w-fit rounded"
                }
            ],
            description: "Join us in our first hackathon, scheduled for January 14, 2022! Participate in a week long contest, where you create a unique project and complete challenging problems!"
        },
        
    ]

    return(
        <div id="events" className='my-20'>
            <motion.div 
                variants={containerVariant} 
                initial="hidden" 
                animate="visible" 
                className='flex items-center flex-col'
            >
                <div className='text-center'>

                    <motion.div variants={textVariant}>
                        <p className='font-bold mb-2 text-3xl'>Events</p>
                    </motion.div>

                    <motion.div variants={textVariant}>
                        <p>All of our iterations</p>
                    </motion.div>

                </div>

                <div className='mb-4'>
                    {eventList.map((event) => (
                            <motion.div 
                                variants={eventVariant}
                                key={event.title}
                            >
                                <Link href={event.href}>
                                    <motion.div
                                        whileHover={{x: 8}}
                                        className='max-w-3xl w-full cursor-pointer flex items-center p-6 justify-center mx-auto my-2 shadow-xl shadow-primary/20 rounded-2xl'
                                    > 

                                        <div>

                                            <div className='w-[100px] h-[100px]'>
                                                <Image alt={event.title} src={event.image} width={100} height={100}  />
                                            </div>
                                            
                                        </div>

                                        <div className='flex flex-col text-left ml-2'>
                                            
                                            <p className='text-xl font-semibold mb-1'>
                                                {event.title} 
                                                <span className='text-sm text-gray-500 ml-2 font-normal'>{event.year}</span>
                                            </p>
                                            
                                            <div className='flex mb-1'>
                                                {event.tags.map((tag) => (
                                                    <div key={tag.title} className={tag.style}>{tag.title}</div>
                                                ))}
                                            </div>

                                            <p className='line-clamp-1'>{event.description}</p>
                                        
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                    ))}
                    
                </div>

                {/*<p className='font-semibold '>Join our <a className='text-primary' href="https://discord.gg/udnB5WZG99">discord server</a> for important updates!</p>*/}

            </motion.div>
        </div>
    )
}


export default Events