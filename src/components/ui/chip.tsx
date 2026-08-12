interface IChip {
    children?: React.ReactNode,
    className?: string,
    clickable?: boolean
}

export default function Chip({
    children, 
    className = "",
    clickable = false,
    ...props
}: IChip): React.ReactElement {
    return (
        <div 
            className={`
                flex 
                items-center 
                justify-center 
                w-fit 
                py-[6px] px-[12px] 
                rounded-[3px]
                bg-indigo-100
                text-indigo-500
                ${
                    clickable 
                    ?
                        `hover:bg-indigo-200
                        hover:text-indigo-700
                        hover:cursor-pointer`
                    :
                        "hover:cursor-default"
                }

                ${className}
            `} 
            {...props}
        >
            {children}
        </div >
    )
}