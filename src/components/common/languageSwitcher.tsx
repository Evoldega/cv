'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Image from "next/image";

export function LanguageSwitcher() {

    const { locales } = routing;
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const iconWidth = 32;

    return (
    <Popover>
        <PopoverTrigger render={
            <button>
                <Image
                    src={`/flags/${locale}.svg`}
                    className="cursor-pointer rounded-[4px]"
                    width={iconWidth}
                    height={1}
                    alt={locale}

                />                   
            </button>
        }>
        </PopoverTrigger>
        <PopoverContent className="w-fit h-fit p-[8px] rounded-[12px] gap-2">
            {
                locales.map((locale, index) => (

                        <Image
                            key={index}
                            className="cursor-pointer rounded-[4px]"
                            src={`/flags/${locale}.svg`}
                            onClick={() => router.replace(pathname, { locale })}
                            width={iconWidth}
                            height={1}
                            alt={locale}
                        />                                
                ))
            }
        </PopoverContent>
    </Popover>
    );
}