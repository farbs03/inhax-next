import React, { useState } from 'react'

import { motion } from 'framer-motion'
import Modal from "./Modal"

import HCBLogo from "../public/hcb-logo.png"
import SEPLogo from "../public/sep_logo.png"
import LaunchFishers from "../public/launch_fishers.png"
import Counterpart from "../public/counterpart_logo.png"

import Chris from "../public/chrisfarber.jpg"
import Aaron from "../public/aaron.jpg"
import Will from "../public/will-ruiz.jpeg"
import Anika from "../public/anika-rastogi.jpg"
import Arya from "../public/arya-buddha.jpeg"
import Priyanka from "../public/priyanka-paradkar.jpeg"
import Anish from "../public/anish-kambhampati.jpg"
import Tom from "../public/tom.jpeg"

import Image from 'next/image'
import Link from "next/link"

import { containerVariant, textVariant, teamVariant } from '../utils/variants'
import { MailIcon } from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/outline'

const Team = () => {

    const teamMembers = [
        {Name: "Chris Farber", Role: "Lead Organizer, Co-Director", Image: Chris, Email: "mailto:chris@inhax.dev"},
        {Name: "Aaron Ni", Role: "Head of Outreach, Co-Director", Image: Aaron, Email: "mailto:aaron@inhax.dev"},
        {Name: "Will Ruiz", Role: "Volunteer", Image: Will, Email: "mailto:indy.william.ruiz@gmail.com"},
        {Name: "Anika Rastogi", Role: "Outreach", Image: Anika, Email: "mailto:rastoani000@hsestudents.org"},
        {Name: "Arya Buddha", Role: "Judge, Volunteer", Image: Arya, Email: "mailto:aryadeep.buddha@gmail.com"},
        {Name: "Priyanka Paradkar", Role: "Outreach, Volunteer", Image: Priyanka, Email: "mailto:paradpri000@hsestudents.org"},
        {Name: "Anish Kambhampati", Role: "Outreach, Judge, Volunteer", Image: Anish, Email: "mailto:kambhani000@hsestudents.org"},
        {Name: "Tom Chilson", Role: "Outreach, Judge", Image: Tom, Email: "mailto:thomasmchilson@gmail.com"}
    ]

    const sponsors = [
        {src: HCBLogo, height: 60},
        {src: SEPLogo, height: 60},
        {src: LaunchFishers, height: 50},
        {src: Counterpart, height: 40}
    ]

    const [taxModal, setTaxModal] = useState(false)

    return(
        <div id="team" className='mt-20'>

            <Modal
                open={taxModal}
                setOpen={setTaxModal}
            >
                <button onClick={() => setTaxModal(false)} className='mb-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition duration-200 ease-in'>
                    <XIcon className='w-6 h-6' />
                </button>
                <div className='text-center'>
                    <p>Indiana Hax is fiscally sponsored by Hack Club Bank, a project by the The Hack Foundation (d.b.a Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).</p>
                </div>
                <button onClick={() => setTaxModal(false)} className='font-semibold ml-auto block bg-primary hover:opacity-80 transition duration-200 ease-in text-white px-4 py-2 rounded-md mt-2'>
                    Ok
                </button>
            </Modal>

            <motion.div 
                variants={containerVariant} 
                initial="hidden" 
                animate="visible"
                className='flex flex-col items-center'
            >

                <div className='my-20'>
                    
                    <motion.div variants={textVariant}>
                        <p className='text-3xl font-bold text-center mb-2'>Team</p>
                    </motion.div>

                    <motion.div variants={textVariant}>
                        <p className='text-center'>We're a small tight-knit team of creators</p>
                    </motion.div>
                    
                    <div className='gap-6 w-full mt-6 grid md:grid-cols-2 lg:grid-cols-4 justify-center'>

                        {teamMembers.map((person) => (
                            <motion.div
                                key={person.Name}
                                variants={teamVariant}  
                                className='relative flex flex-col w-[200px]'
                            >
                                <motion.div
                                    className='w-[200px] h-[200px] shadow-lg shadow-primary/40 rounded-2xl'
                                    whileHover={{scale: 1.02, transition: {duration:'0.2'}}}
                                >
                                    <Image alt={person.Name} src={person.Image} width={200} height={200} className='rounded-2xl' />
                                </motion.div>
                                <p className='font-semibold text-lg mt-3'>{person.Name}</p>
                                <p className='font-semibold text-primary text-sm mb-1'>{person.Role}</p>
                                <div className="flex items-center gap-2">
                                    <a href={person.Email} className='w-6 h-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition duration-200 ease-in'>
                                        <MailIcon className='w-6 h-6' />
                                    </a>
                                    <a href='#' className='w-5 h-5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition duration-200 ease-in'>
                                        <svg role="img" fill='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}

                    </div>
            
                </div>

                <div className='my-20'>
                
                    <div className='text-center'>
                        <motion.div variants={textVariant}>
                            <p className='font-bold text-3xl text-center mb-2'>Sponsors</p>
                        </motion.div>

                        <motion.div variants={textVariant}>
                            <p>The people who make us possible </p>
                            <div className="flex gap-2 justify-center divide-gray-200 my-2">
                                <p className='text-primary cursor-pointer font-semibold' onClick={() => setTaxModal(true)}>501(c)3 Tax Status</p>
                                <div className="h-6 w-[2px] bg-gray-200" />
                                <p className="font-semibold text-primary">
                                    <a className='font-semibold' href="mailto: contact@inhax.dev">Become a Sponsor</a>
                                </p>
                            </div>
                        </motion.div>

                    </div>

                    <div className='grid md:grid-cols-4 gap-10 justify-center items-center mt-6'>
                        
                        {sponsors.map((sponsor, idx) => (
                            <motion.div
                                key={idx}
                                variants={teamVariant} 
                                whileHover={{scale: 1.02, transition: {duration:'0.2'}}}  
                            >
                                <Image alt="sponsor" src={sponsor.src} width={200} height={sponsor.height} />
                            </motion.div>
                        ))}      

                    </div>

                </div>

            </motion.div>   
          
        </div>
    )
}


export default Team