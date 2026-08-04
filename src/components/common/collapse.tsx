'use client';

import { useState } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import Liner from "@/components/ui/liner";

interface ICollapse {
    title: React.ReactNode;
    content: React.ReactNode;
    expanded?: boolean;
}

export default function Collapse({ 
    title, content, expanded = false
}: ICollapse): React.ReactElement {

    const [isOpen, setIsOpen] = useState(expanded);

    const fadeIn = "animate-in fade-in slide-in-from-top-2 duration-500";
    const fadeOut = "animate-out fade-out duration-350";

    const animation = isOpen ? fadeIn : fadeOut;

    return (
        <Collapsible className="w-full" open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex flex-row w-full">
                <Liner expanded={isOpen} className={animation} />
                <div className="flex flex-col items-start w-full">
                    <CollapsibleTrigger className={`${fadeIn} flex justify-start w-full cursor-pointer ${isOpen ? "text-indigo-500 hover:text-indigo-300" : "hover:text-indigo-700"}`}>{ title }</CollapsibleTrigger>
                    <CollapsibleContent className={`${animation} w-full`}>
                        { content }
                    </CollapsibleContent>
                </div>
            </div>
        </Collapsible>
    )
}