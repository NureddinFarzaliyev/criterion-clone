import GeneralSection from '../../ui/GeneralSection'
import contactImg from '../../../assets/images/contact.jpg'
import BigLetter from '../../ui/BigLetter'
import WhiteBtn from '../../ui/WhiteBtn'
import StaticLang from '../../lang/StaticLang'
import { langFunc } from '../../lang/LangFunc'

const Contact = () => {
  return (
    <GeneralSection>
      <div className='flex items-center justify-center mt-10 flex-col'>
        <div className='text-center font-display'>
          <p className='opacity-20 text-xs md:text-sm'>THE CRITERION COLLECTION</p>
          <h1 className='mt-5 text-3xl md:text-5xl font-extrabold'> <StaticLang en="CONTACT US" az="BİZİMLƏ ƏLAQƏ" /> </h1>
        </div>

        <div className='px-4'>
          <img src={contactImg} alt="about our mission" className='h-96 mt-16 shadow-xl border-2 border-gold/75 rounded-sm object-cover' />
        </div>

        <div className='font-text w-[90%] md:w-[70%] lg:w-[50%] mt-20 text-md md:text-xl flex flex-col gap-5'>
          <p><BigLetter>W</BigLetter>e love to hear from our customers. Please let us know of any questions, comments, or product issues you may have. Below are ways you can reach us.</p>
          <p>For questions about orders placed at criterion.com, please visit: Order Support or email us at <span className='text-gold'>orders@criterion.com</span>.</p>
          <p>For questions about the Criterion Channel, please visit: Channel Support or email us at <span className='text-gold'>channelhelp@criterion.com</span>.</p>
          <p>For information on wholesale discounts, please e-mail: <span className='text-gold'>wholesale@criterion.com</span></p>
          <p>For press-related inquiries, please contact: <span className='text-gold'>press@criterion.com</span></p>
          <p>To suggest a title, please write to: <span className='text-gold'>suggestions@criterion.com</span></p>
          <p>To report a technical problem with your disc; for television, public performance, and nontheatrical sales; for queries, threats, or bribes related to our future release schedule; for praise and/or criticism of our releases or the state of the film world in general; to report that a DVD booklet has been mauled by a dog or baby; for clarification of the information on our FAQ page; to gripe about region encoding; or for any and all Criterion-related anecdotes or curiosities, please e-mail: Jon Mulvaney (he lives for this stuff!) <span className='text-gold'>mulvaney@criterion.com</span></p>

          <div className='h-0.5 w-full dark:bg-white/10 bg-black/10 my-5'></div>

          <h3 className='text-2xl'><StaticLang en="Sign Up for Our Newsletter" az="Xəbər Lentimizə Abunə Olun" /></h3>
          <p className='text-sm italic'><StaticLang en="Get info about new releases, sales, and our online publication, Current." az="Yeni buraxılışlar, endirimlər və onlayn nəşrimiz barədə məlumat əldə edin." /></p>
          <div className='flex gap-3 mt-2 flex-col md:flex-row'>
            <input type="text" className='dark:bg-white/10 bg-gray/20 font-display text-sm px-4 py-3 shadow-2xl' placeholder={langFunc("Enter Email Address", "Email Ünvanı Daxil Edin")} />
            <WhiteBtn textContent={<StaticLang en="SIGN UP" az="QEYDIYYAT" />} />
          </div>
        </div>

      </div>
    </GeneralSection>
  )
}

export default Contact
