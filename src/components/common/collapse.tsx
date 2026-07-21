'use client';

import { useState } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface ICollapse {
    title: React.ReactNode,
    content: React.ReactNode,
    expanded?: boolean,
    variant: "m" | "l"
}

export default function Collapse({ title, content, expanded = false, variant = "m" }: ICollapse): React.ReactElement {

    const fadeIn = "animate-in fade-in slide-in-from-top-2 duration-500";

    const [open, setOpen] = useState(expanded)

    return (
        <Collapsible open={open} onOpenChange={setOpen}>
            <div className="flex flex-row cursor-pointer mt-[8px]">
                <div className="flex flex-col justify-start items-center mr-[16px]">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        height: "16px",
                        width: "16px",
                        borderRadius: "12px",
                        boxShadow: "inset 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 6px 24px 0px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.05)",
                        background: "rgba(255, 255, 255, 1)",

                    }}>
                        <Image
                            src="/dot.svg"
                            width={10}
                            height={10}
                            alt="dot"
                        />
                    </div>
                    {
                        open &&                     
                        <div className="flex flex-1 justify-center items-center">
                            <Separator orientation="vertical" className={`${fadeIn} h-[100%] w-[1px] bg-gray-300`} />
                        </div>
                    }

                </div >

                <div className="flex flex-col items-start">
                    <CollapsibleTrigger className="cursor-pointer">{ title }</CollapsibleTrigger>
                    <CollapsibleContent className={fadeIn}>
                        { content }
                    </CollapsibleContent>    
                </div>
            </div>


        </Collapsible>
    )
}