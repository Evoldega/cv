'use client';

import { Tooltip } from "@/components/common/tooltip";

import ArrowIcon from "@/assets/icons/arrow_left.svg"

import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';

interface IStepBackButton {
    link?: string;
}

export default function StepBackButton({ link }: IStepBackButton) {

    const t = useTranslations("Common");
    const router = useRouter();

    return (
        <div
            className="
                flex
                items-center
                gap-[4px]
                h-full
                text-gray-400
                hover:text-indigo-400
                transition-all
                duration-400
            "
            onClick={(e) => {
                e.stopPropagation();
                link ? router.push(link) : router.back();
            }}
        >
            <Tooltip align="start" title={t("back")} className="cursor-pointer">
                <ArrowIcon 
                    className="text-inherit"
                    width={16}
                    height={16}
                />
            </Tooltip>
        </div>
    )
}