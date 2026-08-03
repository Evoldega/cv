import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

import MenuBar from "@/components/common/menu-bar";

interface IProjectsLayout {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("Projects.title"),
    description: "Dmitry Lukyanov CV - Projects",
  };
}

export default async function ProjectsLayout(
    { children, params }: IProjectsLayout
) {
    const t = await getTranslations();
    const { locale } = await params;

    const breadcrumbsList = [
        {
            name: "CV",
            href: `/${locale}/cv`
        },
        {
            name: t("Projects.title"),
        },
    ];

    return (
        <section className="flex flex-col w-full">
            <MenuBar
                title={t("Projects.title")}
                breadcrumbs={breadcrumbsList} 
            />
            {children}
        </section>
    );
}