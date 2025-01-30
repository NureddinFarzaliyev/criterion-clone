import React from 'react'
import GeneralSection from '../../ui/GeneralSection'
import aboutImg from '../../../assets/images/about.jpg'
import BigLetter from '../../ui/BigLetter'

const About = () => {
  return (
    <GeneralSection>
      <div className='flex items-center justify-center mt-10 flex-col'>
        <div className='text-center font-display'>
          <p className='opacity-20 text-sm'>THE CRITERION COLLECTION</p>
          <h1 className='mt-5 text-5xl font-extrabold'>OUR MISSION</h1>
        </div>

        <div className='px-4'>
          <img src={aboutImg} alt="about our mission" className='h-96 mt-16 shadow-xl border-2 border-gold/75 rounded-sm object-cover' />
        </div>

        <p className='font-text w-[90%] md:w-[70%] lg:w-[50%] mt-20 text-md md:text-xl'>
          <BigLetter>S</BigLetter>
          ince 1984, the Criterion Collection has been dedicated to publishing important classic and contemporary films from around the world in editions that offer the highest technical quality and award-winning, original supplements. No matter the medium—from laserdisc to DVD, Blu-ray, 4K Ultra HD to streaming—Criterion has maintained its pioneering commitment to presenting each film as its maker would want it seen, in state-of-the-art restorations with special features designed to encourage repeated watching and deepen the viewer’s appreciation of the art of film.
        </p>
      </div>
    </GeneralSection>
  )
}

export default About
