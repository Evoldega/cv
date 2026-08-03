"use client";

import Text from "@/components/ui/text";
import Link from 'next/link'
import ArrowIcon from "@/assets/icons/arrow_bar_right.svg"

import { useTranslations } from 'next-intl';

export default function SeeAllProjectsButton() {
    const t = useTranslations();

    return (
        <div 
            className="
                flex
                items-center
                gap-[4px]
                h-fit
                text-gray-300
                hover:text-indigo-400
                transition-all
                duration-300
                cursor-pointer
            "
            onClick={(e) => {
                e.stopPropagation()
            }}
        >
            <ArrowIcon
                className="text-inherit"
                width={20}
                height={20}
            />
            <Link href="/cv/projects" className="flex">
                <Text variant="sub1">{t("LastProjects.show_all")}</Text>
            </Link>
        </div>
    );
}