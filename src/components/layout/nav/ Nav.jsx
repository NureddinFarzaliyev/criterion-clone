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
    <nav className='fixed top-0 left-0 w-full text-white p-4 lg:p-8 lg:px-16 z-20 flex items-center justify-between'>
        <Logo width={58} height={58} color={`var(--color-white)`} />
        <div className='flex gap-5 items-center font-text text-xl'>
            <Link to={'/shop'} className={`hidden md:block var(--color-white)`}><NavHoverAnim>Shop the Collection</NavHoverAnim></Link>
            <Link to={'/blog'} className={`hidden md:block var(--color-white)`}><NavHoverAnim>Check out The Blog</NavHoverAnim></Link>
            <SearchIcon color={`var(--color-white)`} />
            <Link to={'/cart'}><CartIcon color={`var(--color-white)`} /></Link>
            <Link to={'/profile'}><ProfileIcon color={`var(--color-white)`} /></Link>
            <BurgerIcon color={`var(--color-white)`} />
        </div>
    </nav>
    </>
  )
}

export default  Nav
