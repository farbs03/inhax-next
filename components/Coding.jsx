import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';

const Coding = () => {
    return (
        <div className='w-[350px] md:w-[500px] mx-auto md:mx-0 text-left overflow-x-auto h-[350px] rounded-xl p-6 bg-gray-800 text-white font-mono font-semibold'>
            <div className='w-full flex gap-2 mb-4'>
                <div className="rounded-full bg-red-500 w-3 h-3"></div>
                <div className="rounded-full bg-yellow-500 w-3 h-3"></div>
                <div className="rounded-full bg-green-500 w-3 h-3"></div>
            </div>
            <div className='select-none text-gray-400'>
                <Typewriter
                    options={{loop: true}}
                    onInit={(typewriter) => {
                        typewriter
                        
                        .typeString('<')
                        .typeString("<span class='text-indigo-500'>html</span>")
                        .typeString('>')

                        .pauseFor(200)
                        .typeString("<br>")
                        
                        .pasteString("<span class='text-gray-800'>xxxx</span>")
                        .typeString('<')
                        .typeString("<span class='text-indigo-500'>head</span>")
                        .typeString('>')

                        .pauseFor(200)
                        .typeString("<br>")

                        .pasteString("<span class='text-gray-800'>xxxxxxxx</span>")
                        .typeString('<')
                        .typeString("<span class='text-indigo-500'>title</span>")
                        .typeString('>')
                        .typeString("<span class='text-white'>Indiana Hax</span>")
                        .typeString('</')
                        .typeString("<span class='text-indigo-500'>title</span>")
                        .typeString('>')

                        .pauseFor(200)
                        .typeString("<br>")
                        
                        .pasteString("<span class='text-gray-800'>xxxx</span>")
                        .typeString('<')
                        .typeString("<span class='text-indigo-500'>head</span>")
                        .typeString('>')

                        .pauseFor(200)
                        .typeString("<br>")
                        
                        .pasteString("<span class='text-gray-800'>xxxx</span>")
                        .typeString('<')
                        .typeString("<span class='text-indigo-500'>body</span>")
                        .typeString('>')
                        
                        .pauseFor(200)
                        .typeString("<br>")

                        .pasteString("<span class='text-gray-800'>xxxxxxxx</span>")
                        .typeString('<')
                        .typeString("<span class='text-indigo-500'>ul</span>")
                        .typeString('>')

                        .pauseFor(200)
                        .typeString("<br>")

                        .pasteString("<span class='text-gray-800'>xxxxxxxxxxxx</span>")
                        .typeString('<')
                        .typeString("<span class='text-indigo-500'>li</span>")
                        .typeString('>')
                        .typeString("<span class='text-white'>Create a unique project</span>")
                        .typeString('</')
                        .typeString("<span class='text-indigo-500'>li</span>")
                        .typeString('>')

                        .pauseFor(200)
                        .typeString("<br>")

                        .pasteString("<span class='text-gray-800'>xxxxxxxxxxxx</span>")
                        .typeString('<')
                        .typeString("<span class='text-indigo-500'>li</span>")
                        .typeString('>')
                        .typeString("<span class='text-white'>Show off your coding skills</span>")
                        .typeString('</')
                        .typeString("<span class='text-indigo-500'>li</span>")
                        .typeString('>')

                        .pauseFor(200)
                        .typeString("<br>")

                        .pasteString("<span class='text-gray-800'>xxxxxxxxxxxx</span>")
                        .typeString('<')
                        .typeString("<span class='text-indigo-500'>li</span>")
                        .typeString('>')
                        .typeString("<span class='text-white'>Win prizes</span>")
                        .typeString('</')
                        .typeString("<span class='text-indigo-500'>li</span>")
                        .typeString('>')

                        .pauseFor(200)
                        .typeString("<br>")

                        .pasteString("<span class='text-gray-800'>xxxxxxxx</span>")
                        .typeString('</')
                        .typeString("<span class='text-indigo-500'>ul</span>")
                        .typeString('>')


                        .pauseFor(200)
                        .typeString("<br>")
                        
                        .pasteString("<span class='text-gray-800'>xxxx</span>")
                        .typeString('</')
                        .typeString("<span class='text-indigo-500'>body</span>")
                        .typeString('>')

                        .pauseFor(200)
                        .typeString("<br>")

                        .typeString('</')
                        .typeString("<span class='text-indigo-500'>html</span>")
                        .typeString('>')
                        
                        .pauseFor(1000)
                        .deleteAll(20)
                        .start()
                    }}
                />
            </div>
        </div>
    )
}

export default Coding