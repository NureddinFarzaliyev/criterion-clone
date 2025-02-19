import Logo from '../../ui/Logo'
import { Link } from 'react-router-dom'
import SearchIcon from './SearchIcon'
import CartIcon from './CartIcon'
import ProfileIcon from './ProfileIcon'
import BurgerIcon from './BurgerIcon'
import NavHoverAnim from './NavHoverAnim'
import DarkLightSwitch from './DarkLightSwitch'
import StaticLang from '../../lang/StaticLang'

const  Nav = () => {
  const location = window.location.pathname

  return (
    <>
    <nav className={`fixed top-0 left-0 w-full dark:text-white text-gray p-5 lg:px-16 z-20 flex items-center justify-between bg-light/70 ${location === '/' ? "dark:bg-transparent" : "dark:bg-gray/70"}`}>
        <Link to={'/'}>
          <Logo width={58} height={58} />
        </Link>
        <div className='flex gap-5 items-center font-text text-xl'>
            <Link to={'/shop'}><NavHoverAnim><StaticLang en="Shop the Collection" az="Alış-veriş Edin" /></NavHoverAnim></Link>
            <Link to={'/blog'}><NavHoverAnim><StaticLang en="Check out The Blog" az="Bloqa Baxın" /></NavHoverAnim></Link>
            <DarkLightSwitch />
            <SearchIcon />
            <Link to={'/cart'}><CartIcon /></Link>
            <Link to={'/account'}><ProfileIcon /></Link>
            <BurgerIcon />
        </div>
    </nav>
    </>
  )
}

export default  Nav
