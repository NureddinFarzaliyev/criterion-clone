const NavHoverAnim = ({children}) => {
  return (
    <div className={`hidden md:block dark:text-white text-gray hover:text-gold transition duration-500`}>{children}</div>
  )
}

export default NavHoverAnim
