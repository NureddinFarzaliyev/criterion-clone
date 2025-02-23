import { Link } from "react-router-dom"

const ImageComponent = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="w-full h-full object-cover opacity-10 cursor-pointer hover:opacity-100 transition duration-800 hover:scale-105 three-colors-image" />
  )
}

const ParagraphComponent = ({ text }) => {
  return (
    <p className="absolute bottom-10 z-50 w-full text-center px-10 text-white font-text font-bold text-md transition duration-800 pointer-events-none">{text}</p>
  )
}

const HomeThreeColors = () => {
  return (
    <Link to="/shop/1741">
      <section className='h-dvh snap-start relative home-section bg-light dark:bg-gray flex items-center justify-center'>
        <div className='bg-[#002551] w-1/3 h-dvh overflow-hidden relative'>
          <ImageComponent src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/33wsWxzsNstI8N7dvuwzFmj1qBd.jpg" alt="white movie" />
          <ParagraphComponent text="The wife of a famous composer survives a car accident that kills her husband and daughter. Now alone, she shakes off her old identity and explores her newfound freedom but finds that she is unbreakably bound to other humans, including her husband’s mistress, whose existence she never suspected." />
        </div>
        <div className='bg-white w-1/3 h-dvh overflow-hidden relative'>
          <ImageComponent src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fdIet3NSa27gobMbaUml66oCQNT.jpg" alt="white movie" />
          <ParagraphComponent text="Polish immigrant Karol Karol finds himself out of a marriage, a job and a country when his French wife, Dominique, divorces him after six months due to his impotence. Forced to leave France after losing the business they jointly owned, Karol enlists fellow Polish expatriate Mikołaj to smuggle him back to their homeland." />
        </div>
        <div className='bg-[#CA1126] w-1/3 h-dvh overflow-hidden relative'>
          <ImageComponent src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/JHmsBiX1tjCKqAul1lzC20WcAW.jpg" alt="red movie" />
          <ParagraphComponent text="Part-time model Valentine unexpectedly befriends a retired judge after she runs over his dog. At first, the grumpy man shows no concern about the dog, and Valentine decides to keep it. But the two form a bond when she returns to his house and catches him listening to his neighbors’ phone calls." />
        </div>
      </section>
    </Link>
  )
}

export default HomeThreeColors
