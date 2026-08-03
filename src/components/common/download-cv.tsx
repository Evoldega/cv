'use client';

import { useLocale, useTranslations } from 'next-intl';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


import Image from "next/image";

export function DownloadCV() {
    const t = useTranslations();
    const locale = useLocale();

    return (
        <Tooltip>
            <TooltipTrigger>
                <a
                    href={`/api/pdf?locale=${locale}`}
                    download
                >
                    <Image
                        className="cursor-pointer"
                        src="/download.svg"
                        width={24}
                        height={1}
                        alt="developer"
                    />
                </a>
            </TooltipTrigger>
            <TooltipContent align="end">
                {t("Common.download_cv")}
            </TooltipContent>
        </Tooltip>
    );
}