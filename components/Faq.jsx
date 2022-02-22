import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'

const Faq = () => {

    //todo: add actual q&a's

    const questions = [
        {
            question: "What is a hackathon?", 
            answer: "A hackathon is an event where several groups come up with a unique project, and code it within the relatively short timeframe. Additionally, unique to Indiana Hax, there will be 3 programming questions (optional), which participants may complete on their own to win a small prize."
        },
        {
            question: "Do I need a team?", 
            answer: "Nope! There's no need to worry if you don't have a team. You may compete as a solo participant if that suits your best interests. If you choose to have a team though, they are limited to 4 people per group."
        },
        {
            question: "Who can participate?", 
            answer:  "We allow anyone to participate! For those just writing their first lines of code, or those who have built out products, our hackathons are a place for you to learn and create."
        },
        {
            question: "Will there be swag or food?", 
            answer: "Everyone who participates will get our general Indiana Hax swag, and a sticker with this event's logo. Additionally, there will be free t-shirts and food for anyone who shows up to the in-person portions of the event, thanks to our sponsors!"
        },
        {
            question: "What are the prizes?", 
            answer: "The top three projects of the event will be awarded with subscriptions to a service (TBD) and potentially a sum of money."
        }
    ]

    return (
        <div className='my-20'>
            <p className='font-bold text-3xl text-center mb-8'>FAQ</p>
            <div className='max-w-xl w-full mx-auto divide-y divide-gray-200'>
                {questions.map((question, idx) => (
                    <Disclosure key={idx}>
                        {({ open }) => (
                            <div className='p-4'>
                                <Disclosure.Button className={`flex justify-between w-full py-2 font-medium text-left transition duration-200 ease-in bg-transparent hover:text-primary focus:outline-none`}>
                                    <p className={`${open ? 'text-primary' : ''}`}>{question.question}</p>
                                    <ChevronUpIcon
                                        className={`${
                                        open ? 'transform rotate-180 text-primary' : ''
                                        } w-5 h-5 transition-all duration-200 ease-in`}
                                    />
                                </Disclosure.Button>
                    
                                <Transition
                                    enter="transition duration-200 ease-in"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-200 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="mt-2">{question.answer}</Disclosure.Panel>
                                </Transition>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    )
}

export default Faq