import React from 'react'

const GeneralSection = ({children}) => {
  return (
    <section className='min-h-dvh dark:bg-gray bg-light py-32 dark:text-white text-gray'>
      {children}
    </section>
  )
}

export default GeneralSection
