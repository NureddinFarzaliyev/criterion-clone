import React from 'react'
import { motion } from 'motion/react'

const FormInput = ({setData, data, placeholder, name, type}) => {

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

  return (
    <motion.input whileFocus={{borderBottomColor: `var(--color-gold)`}} 
        className="border-b-2 dark:border-b-light-gray/40 outline-none transition font-text p-2 text-md w-full mt-5" 
        placeholder={placeholder} type={type} name={name} onChange={(e) => {handleInput(e)}} />
  )
}

export default FormInput
