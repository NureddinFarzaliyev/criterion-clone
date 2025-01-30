import React from 'react'

const GeneralSection = ({children}) => {
  return (
    <section className='min-h-dvh dark:bg-gray bg-light pb-32 pt-24 md:pt-32 dark:text-white text-gray'>
      {children}
    </section>
  )
}

export default GeneralSection
