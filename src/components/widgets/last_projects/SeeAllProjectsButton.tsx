"use client";

import Text from "@/components/ui/text";
import Link from 'next/link'
import ArrowIcon from "@/assets/icons/arrow_bar_right.svg"

import { useTranslations } from 'next-intl';

interface ISeeAllProjectsButton {
    count: number;
}

export default function SeeAllProjectsButton({ count }: ISeeAllProjectsButton) {
    const t = useTranslations();

    return (
        <Link href="/cv/projects" className="flex items-center">
            <div 
                className="
                    flex
                    items-center
                    h-fit
                    text-indigo-500
                    hover:text-indigo-700
                    transition-all
                    duration-300
                    cursor-pointer
                "
                onClick={(e) => e.stopPropagation()}
            >
                <div 
                    className="
                        flex
                        items-center
                        gap-[4px]
                        h-fit
                        hover:underline
                    "
                >
                    <ArrowIcon
                        className="text-inherit"
                        width={20}
                        height={20}
                    />
                    <Text variant="sub1">{t("LastProjects.show_all")}</Text>
                </div>
                &nbsp;
                <Text variant="cap3">{`+ ${count}`}</Text>
            </div>
        </Link>
    );
}