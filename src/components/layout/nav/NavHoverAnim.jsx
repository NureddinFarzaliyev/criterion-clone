import { motion } from "motion/react"

const NavHoverAnim = ({children}) => {
  return (
    <motion.div whileHover={{color: `var(--color-gold)`}}>
        {children}
    </motion.div>
  )
}

export default NavHoverAnim
