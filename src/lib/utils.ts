import type { Metadata } from "next";

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getTranslations } from 'next-intl/server';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDescription(count: number, t: any, keyPrefix: string = "Experience.exp"): { text: string, boldWords: string[] }[] {
    const description = [];

    for(let i = 0; i < count; i++) {
        description.push({
            text: t(`${keyPrefix}${i + 1}`),
            boldWords: [t(`${keyPrefix}${i + 1}_bold`)]
        })
    }

    return description
}


export async function getMetadata(titleKey: string, description: string): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t(titleKey),
    description: description,
  };
}