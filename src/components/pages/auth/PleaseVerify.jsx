import React from 'react'
import { PiEnvelopeSimpleOpen } from "react-icons/pi";
import Logo from '../../ui/Logo';

const PleaseVerify = () => {
  return (
    <div className='h-[60vh] w-dvw flex items-center justify-center'>
    <div className='relative w-fit flex flex-col items-center'>
      <PiEnvelopeSimpleOpen className='text-9xl text-gold' />
      <div className="absolute left-[50%] translate-x-[-50%] top-9">
        <Logo height={25} color={`var(--color-gold)`} />
      </div>
      <h1 className='text-sm md:text-lg font-display opacity-50 mt-5 mb-2'>You're registered successfully.</h1>
      <p className='text-sm opacity-30 font-display mb-10'>You can close this tab safely.</p>
      <p className='text-xl md:text-3xl w-[80%] sm:w-[50%] text-center font-text'>Please, click the link sent to your mail to activate your account.</p>
    </div>
    </div>
  )
}

export default PleaseVerify
