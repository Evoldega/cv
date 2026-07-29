'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";

export function LanguageSwitcher() {
    const t = useTranslations();

    const { locales } = routing;
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const iconWidth = 32;

    return (
        <Popover>
            <Tooltip>
                <PopoverTrigger
                    render={
                        <TooltipTrigger
                            render={
                                <button
                                    type="button"
                                    className="flex justify-center"
                                />
                            }
                        />
                    }
                >
                    <Image
                        src={`/flags/${locale}.svg`}
                        className="cursor-pointer rounded-[4px]"
                        width={iconWidth}
                        height={24}
                        alt={locale}
                    />
                </PopoverTrigger>

                <TooltipContent align="end">
                    {t("Common.change_lang")}
                </TooltipContent>
            </Tooltip>

            <PopoverContent className="w-fit h-fit p-[8px] rounded-[12px] gap-2">
                {locales.map((item) => (
                    <Image
                        key={item}
                        className="cursor-pointer rounded-[4px]"
                        src={`/flags/${item}.svg`}
                        onClick={() => router.replace(pathname, { locale: item })}
                        width={iconWidth}
                        height={24}
                        alt={item}
                    />
                ))}
            </PopoverContent>
        </Popover>
    );
}