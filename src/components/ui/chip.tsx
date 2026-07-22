interface IChip {
    children?: React.ReactNode,
    className?: string,
}

export default function Chip({children, className = "", ...props}: IChip): React.ReactElement {
    return (
        <div className={`flex items-center justify-center w-fit h-[13px] px-[6px] rounded-[6px] ${className}`} {...props}>
            {children}
        </div >
    )
}