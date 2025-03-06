import GeneralSection from '../../ui/GeneralSection'
import aboutImg from '../../../assets/images/about.jpg'
import BigLetter from '../../ui/BigLetter'
import StaticLang from '../../lang/StaticLang'
import ScrollToTop from '../../ui/ScrollToTop'

const About = () => {
  return (
    <GeneralSection>
      <ScrollToTop />
      <div className='flex items-center justify-center mt-10 flex-col'>
        <div className='text-center font-display'>
          <p className='opacity-20 text-xs md:text-sm'>THE CRITERION COLLECTION</p>
          <h1 className='mt-5 text-3xl md:text-5xl font-extrabold'><StaticLang en="OUR MISSION" az="MİSSİYAMIZ" /></h1>
        </div>

        <div className='px-4'>
          <img src={aboutImg} alt="about our mission" className='h-96 mt-16 shadow-xl border-2 border-gold/75 rounded-sm object-cover' />
        </div>

        <p className='font-text w-[90%] md:w-[70%] lg:w-[50%] mt-20 text-md md:text-xl'>
          <StaticLang
            en={<>
              <BigLetter>S</BigLetter>
              ince 1984, the Criterion Collection has been dedicated to publishing important classic and contemporary films from around the world in editions that offer the highest technical quality and award-winning, original supplements. No matter the medium—from laserdisc to DVD, Blu-ray, 4K Ultra HD to streaming—Criterion has maintained its pioneering commitment to presenting each film as its maker would want it seen, in state-of-the-art restorations with special features designed to encourage repeated watching and deepen the viewer’s appreciation of the art of film.
            </>}
            az={<>
              <BigLetter>1</BigLetter>
              984-cü ildən bəri Criterion Kolleksiyası dünyanın hər yerindən mühüm klassik və müasir filmlərin ən yüksək texniki keyfiyyət və mükafat qazanmış, orijinal əlavələr təklif edən nəşrlərdə nəşrinə həsr edilmişdir. Vasitədən asılı olmayaraq – lazer diskindən DVD, Blu-ray, 4K Ultra HD-yə qədər – Criterion hər bir filmi, təkrar baxmağı təşviq etmək və tamaşaçının kino sənətinə verdiyi qiymətləri dərinləşdirmək üçün nəzərdə tutulmuş ən müasir restavrasiyalarda hər bir filmi onun görülməsini istədiyi kimi təqdim etmək üzrə qabaqcıl öhdəliyini davam etdirir.
            </>} />
        </p>
      </div>
    </GeneralSection>
  )
}

export default About
