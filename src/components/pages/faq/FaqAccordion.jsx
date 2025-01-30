import React from 'react'
import { Disclosure, DisclosureButton } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import { AnimatePresence, motion } from 'motion/react'

const FaqAccordion = ({title, text}) => {
  return (
    <Disclosure>
        {({ open }) => (
        <div className="w-full lg:w-1/2 overflow-hidden mb-3 text-gray dark:text-white shadpw-md bg-white dark:bg-light-gray">
            <DisclosureButton className="group flex items-center justify-between cursor-pointer gap-2 w-full px-10 py-7 text-display font-bold text-left">
                {title}
                <BiChevronDown className="w-5 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <AnimatePresence>
                {open && (
                    <motion.div className='w-full'
                    initial={{height: 0}} animate={{height: 'auto'}} exit={{height: 0}} >
                        <div className='pb-7 pt-2 pl-16 pr-7 font-text xl:text-md'>
                            {text}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        )}
    </Disclosure>
  )
}

export default FaqAccordion
