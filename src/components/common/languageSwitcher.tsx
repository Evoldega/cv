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

    return (
    <Popover>
        <PopoverTrigger render={
            <button>
                <Image
                    src={`/flags/${locale}.svg`}
                    className="cursor-pointer"
                    width={16}
                    height={12}
                    alt={locale}

                />                   
            </button>
        }>
        </PopoverTrigger>
        <PopoverContent className="w-fit h-fit p-[8px] rounded-[12px] gap-2">
            {
                locales.map((locale, index) => (

                    <div 
                        className="flex justify-center cursor-pointer w-[24px] h-[16px] hover:bg-gray-400 rounded-[4px]"
                        key={index}
                    >
                        <Image
                            src={`/flags/${locale}.svg`}
                            onClick={() => router.replace(pathname, { locale })}
                            width={16}
                            height={12}
                            alt={locale}
                        />                                
                    </div>

                ))
            }
        </PopoverContent>
    </Popover>
    );
}