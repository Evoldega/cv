'use client';

import { useState } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import Liner from "@/components/ui/liner";

interface ICollapse {
    title: React.ReactNode,
    content: React.ReactNode,
    expanded?: boolean,
}

export default function Collapse({ 
    title, content, expanded = false
}: ICollapse): React.ReactElement {

    const [isOpen, setIsOpen] = useState(expanded);

    const fade = isOpen ? "animate-in fade-in slide-in-from-top-2 duration-500" : "animate-out fade-out slide-in-to-top-2 duration-300"

    return (
        <Collapsible className="w-full" open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex flex-row w-full">
                <Liner expanded={isOpen} className={fade} />
                <div className="flex flex-col items-start w-full">
                    <CollapsibleTrigger className={`flex justify-start w-full cursor-pointer hover:text-violet-500 ${isOpen ? "text-violet-500 mb-[12px]" : ""} sticky top-0 z-10 bg-white`}>{ title }</CollapsibleTrigger>
                    <CollapsibleContent className={`${fade} w-full`}>
                        { content }
                    </CollapsibleContent>
                </div>
            </div>
        </Collapsible>
    )
}