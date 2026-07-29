interface IChip {
    children?: React.ReactNode,
    className?: string,
}

export default function Chip({children, className = "", ...props}: IChip): React.ReactElement {
    return (
        <div className={`flex items-center justify-center w-fit py-[6px] px-[12px] rounded-[12px] ${className}`} {...props}>
            {children}
        </div >
    )
}