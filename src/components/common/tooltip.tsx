'use client';

import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ITooltip {
    title: string;
    children: React.ReactNode;
    align?: "start" | "center" | "end";
    side?: "top" | "bottom" | "left" | "right";
    className?: string;
    disabled?: boolean;
}

export function Tooltip({ 
    title,
    children,
    align = "end",
    side = "top",
    className = "",
    disabled = false,
}: ITooltip) {

  if (disabled) {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <TooltipPrimitive>
      <TooltipTrigger className={className}>
        {children}
      </TooltipTrigger>

      <TooltipContent align={align} side={side}>
        {title}
      </TooltipContent>
    </TooltipPrimitive>
  );
}