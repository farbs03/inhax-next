import { CodeIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { containerVariant, textVariant, illustrationVariant } from '../utils/variants'
import Coding from './Coding'

const Actions = () => {
    return (
        <div>

            <motion.div variants={containerVariant}  initial="hidden" animate="visible" className='my-20 flex items-center text-center md:text-left flex-col md:flex-row justify-center md:justify-between gap-6'>
                <motion.div variants={textVariant} className='max-w-xl'>
                    <div className="w-12 h-12 rounded-md bg-primary inline-flex flex-shrink-0 items-center justify-center">
                        <CodeIcon className='text-white w-6 h-6' />
                    </div>
                    <p className="text-3xl font-bold my-2">Code Cool Stuff</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis animi eum repellat debitis pariatur sed quos quidem qui laborum?</p>
                </motion.div>
                <motion.div className='w-fit drop-shadow-xl' variants={illustrationVariant}>
                    <Coding />
                </motion.div>
            </motion.div>

            <motion.div variants={containerVariant}  initial="hidden" animate="visible" className='my-20 flex md:flex-row-reverse items-center text-center md:text-left flex-col justify-center md:justify-between gap-6'>
                
                <motion.div variants={textVariant} className='max-w-xl'>
                    <div className="w-12 h-12 rounded-md bg-primary inline-flex flex-shrink-0 items-center justify-center">
                        <CodeIcon className='text-white w-6 h-6' />
                    </div>
                    <p className="text-3xl font-bold my-2">Code Cool Stuff</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis animi eum repellat debitis pariatur sed quos quidem qui laborum?</p>
                </motion.div>

                <motion.div variants={illustrationVariant} className="w-[500px] h-[500px] rounded-2xl drop-shadow-xl bg-primary">

                </motion.div>

            </motion.div>

            <motion.div variants={containerVariant}  initial="hidden" animate="visible" className='my-20 flex items-center text-center md:text-left flex-col md:flex-row justify-center md:justify-between gap-6'>
                <motion.div variants={textVariant} className='max-w-xl'>
                    <div className="w-12 h-12 rounded-md bg-primary inline-flex flex-shrink-0 items-center justify-center">
                        <CodeIcon className='text-white w-6 h-6' />
                    </div>
                    <p className="text-3xl font-bold my-2">Code Cool Stuff</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis animi eum repellat debitis pariatur sed quos quidem qui laborum?</p>
                </motion.div>
                <motion.div variants={illustrationVariant} className="w-[500px] h-[500px] rounded-2xl drop-shadow-xl bg-primary">

                </motion.div>
            </motion.div>

        </div>
    )
}

export default Actions