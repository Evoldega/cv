"use client";

import { usePathname } from "@/i18n/navigation";

import StepBackButton from "@/components/common/step-back-button";
import Text from "@/components/ui/text";
import Breadcrumbs from '@/components/common/breadcrumbs';
import { projects } from "@/data/projects";
import { useLocale, useTranslations } from 'next-intl';


interface IMenuBar {
    title: string;
    sticky?: boolean;
}

export default function MenuBar({
    title,
    sticky = false,
}: IMenuBar) {

    const pathname = usePathname();

    const parts = pathname
        .split("/")
        .filter(Boolean);

    const t = useTranslations();
    const locale = useLocale();

    const currentProject = projects.find((item) => item.title === parts[parts.length - 1]);
    
    const breadcrumbsList = [
        {
            slug: "cv",
            name: "CV",
            href: `/${locale}/`
        },
        {
            slug: "projects",
            name: t("Projects.title"),
            href: `/${locale}/cv/projects`
        },
    ];

    if (currentProject) {
        breadcrumbsList.push({
            slug: currentProject.title,
            name: t(`Projects.${currentProject.title}`),
            href: `/${locale}/cv/projects/${currentProject.title}`
        });
    }

    return (
        <menu className={`
            flex 
            justify-between
            flex-wrap
            grow gap-[16px] 
            p-[24px]
            mb-[24px]
            ${sticky ? "sticky top-0 z-10 bg-white" : ""}
            shadow-sm
        `}>
            <div className="flex grow gap-[16px]">
                <StepBackButton />
                <Text variant="h2">
                    {currentProject ? t(`Projects.${currentProject.title}`) : title}
                </Text>
            </div>
            <div className="flex items-end">
                <Breadcrumbs list={breadcrumbsList}/>
            </div>
            
        </menu>
    )
}