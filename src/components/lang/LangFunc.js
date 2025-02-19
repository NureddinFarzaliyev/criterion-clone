import { useSelector } from "react-redux"

export const langFunc = (en, az) => {
    const currentLang = useSelector(state => state.lang)
    return currentLang === 'en' ? en : az
}