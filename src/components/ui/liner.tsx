import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface ILiner {
    size?: "m" | "l",
    expanded?: boolean,
    className?: string,
}

export default function Liner({size = "l", expanded = false, className = "", ...props}: ILiner): React.ReactElement {
    const marginRight = size === "l" ? "mr-[32px]" : "mr-[16px]";
    const color = size === "l" ? "bg-gray-200" : "bg-gray-100"

    return (
        <div className={`flex flex-col justify-start items-center ${marginRight}`} {...props}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                height: "20px",
                width: "20px",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 1)",
            }}>
                <Image
                    src={size === "l" ? "/dot.svg" : "/small_dot.svg"}
                    width={size === "l" ? 14 : 5}
                    height={size === "l" ? 14 : 5}
                    alt="dot"
                />
            </div>
            {
                expanded &&                     
                <div className={`${className} flex flex-1 justify-center items-center`}>
                    <Separator orientation="vertical" className={`h-[100%] w-[1px] ${color}`} />
                </div>
            }
        </div >
    )
}