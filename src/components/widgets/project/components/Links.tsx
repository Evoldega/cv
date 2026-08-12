import Link from "next/link";
import { Tooltip } from "@/components/common/tooltip";
import { getTranslations } from "next-intl/server";

import { 
  Newspaper as article,
  PenTool as figma,
  BookOpenText as docs
} from 'lucide-react';

const icons: any = {
  article,
  figma,
  docs,
};

export async function Links({ links }: { links: any }) {
  const t = await getTranslations("Common");

  const visibleLinks = Object.entries(links);
  
  return (
    <div className="flex items-center gap-3 h-fit ml-[16px] float-right">
      {visibleLinks.map(([key, value]) => {
        const Icon = icons[key];
        const disabled = "text-gray-400";
        const active = "hover:text-indigo-400 text-indigo-500 ";

        return (
            <Tooltip 
                key={key} 
                align="end" 
                title={t(key)}
                disabled={!value}
            >
                <Link
                    href={value ?? "#"}
                    target="_blank"
                    aria-disabled={!value}
                    className={`
                        ${value ? active : disabled}
                        ${!value ? "pointer-events-none" : ""}
                        transition-colors
                    `}
                >
                    <Icon className="w-5 h-5" />
                </Link>
            </Tooltip>
        );
      })}
    </div>
  );
}