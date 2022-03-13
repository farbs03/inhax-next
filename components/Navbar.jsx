import React, {useState} from 'react'
import {MenuIcon, CalendarIcon, QuestionMarkCircleIcon, UserGroupIcon, MailIcon} from "@heroicons/react/outline"
import Drawer from "./Drawer"

import Link from "next/link"
import Image from "next/image"

import { motion } from 'framer-motion';

const Navbar = () => {

    const links = [
        {
            title: "Events",
            id: "events",
            icon: <CalendarIcon className='w-6 h-6' />
        },
        {
            title: "About",
            id: "about",
            icon: <QuestionMarkCircleIcon className='w-6 h-6' />
        },
        {
            title: "Team",
            id: "team",
            icon: <UserGroupIcon className='w-6 h-6' />
        },
    ]

    const [navV, setNavV] = useState(false)

    return(
        <div className='flex justify-between px-6 py-3 items-center w-full'>
            
            <Link href="/">
                <a>
                    <Image src="/logo.png" alt="logo" width={60} height={50} />
                </a>
            </Link>
             
            <div className="block md:hidden">
                <button  onClick={() => setNavV(true)}>
                    <MenuIcon className='w-6 h-6' />
                </button>
                <Drawer
                    open={navV}
                    onClose={()=> setNavV(false)}
                >
                    <div className="flex flex-col gap-4">

                        {links.map((link) => (
                            <p key={link.title}>
                                <a
                                    onClick={() =>{
                                        document.getElementById(link.id).scrollIntoView({behavior: 'smooth'})
                                        setNavV(false)
                                    }}
                                    className='flex gap-2 items-center text-primary'
                                > 
                                    {link.icon} {link.title} 
                                </a>
                            </p>
                        ))

                        }
                       
                        <a href="mailto: contact@inhax.dev" className='flex gap-2 items-center text-primary'>
                            <MailIcon className='w-6 h-6'/> Contact 
                        </a>
                    </div>

                </Drawer>
            </div>

            <div className='hidden md:block' >   
                <div className="flex items-center gap-4">

                    {links.map((link) => (
                        <motion.div key={link.id} whileHover={{y: 2}}>
                            <a 
                                onClick={() => {
                                    document.getElementById(link.id).scrollIntoView({behavior: 'smooth'})
                                }}
                            >
                                <p style={{letterSpacing: "0.1rem"}} className='hover:text-primary uppercase cursor-pointer transition duration-200 ease-in font-semibold text-sm cursor:pointer'>
                                    {link.title}
                                </p>
                            </a> 
                        </motion.div>
                    ))}

                    <motion.div whileHover={{y: 2}}>
                        <a href="mailto:contact@inhax.dev">
                            <p style={{letterSpacing: "0.1rem"}} className='hover:text-primary cursor-pointer transition duration-200 ease-in font-semibold text-sm cursor:pointer'>
                                CONTACT
                            </p>
                        </a>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Navbar