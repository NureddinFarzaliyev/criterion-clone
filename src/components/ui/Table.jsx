
export const TH = ({children, centered}) => {
    return (
        <th className={`py-3 px-4 dark:bg-black/50 bg-gray text-white text-left font-text`}>{children}</th>
    )
}

export const TD = ({children, centered}) => {
    return (
        <td className={`py-4 px-4 border-b border-b-white/20 text-sm opacity-70 ${centered && 'flex items-center justify-center'}`}>{children}</td>
    )
}

export const TR = ({children}) => {
    return (
        <tr className="hover:bg-gray/20 dark:hover:bg-black/20 transition">{children}</tr>
    )
}