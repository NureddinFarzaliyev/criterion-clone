import Logo from '../../ui/Logo'
import { Link } from 'react-router-dom'
import SearchIcon from './SearchIcon'
import CartIcon from './CartIcon'
import ProfileIcon from './ProfileIcon'
import BurgerIcon from './BurgerIcon'
import NavHoverAnim from './NavHoverAnim'

const  Nav = () => {
  return (
    <>
    <nav className='fixed top-0 left-0 w-full dark:text-white text-gray p-4 lg:dark:p-8 lg:px-16 z-20 flex items-center justify-between bg-light/70 dark:bg-transparent'>
        <Link to={'/'}>
          <Logo width={58} height={58} />
        </Link>
        <div className='flex gap-5 items-center font-text text-xl'>
            <Link to={'/shop'} className={`hidden md:block dark:text-white text-gray`}><NavHoverAnim>Shop the Collection</NavHoverAnim></Link>
            <Link to={'/blog'} className={`hidden md:block dark:text-white text-gray`}><NavHoverAnim>Check out The Blog</NavHoverAnim></Link>
            <SearchIcon />
            <Link to={'/cart'}><CartIcon /></Link>
            <Link to={'/profile'}><ProfileIcon /></Link>
            <BurgerIcon />
        </div>
    </nav>
    </>
  )
}

export default  Nav
