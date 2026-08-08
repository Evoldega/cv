import { getTranslations } from 'next-intl/server';

import MenuBar from "@/components/common/menu-bar";
import { getMetadata } from '@/lib/utils';

interface IProjectsLayout {
  children: React.ReactNode;
}

export async function generateMetadata() {
    return await getMetadata("Projects.title", "Dmitry Lukyanov CV - Projects");
}

export default async function ProjectsLayout(
    { children }: IProjectsLayout
) {
    const t = await getTranslations();
    
    return (
        <section className="flex flex-col w-full">
            <MenuBar
                sticky
                title={t("Projects.title")}
            />
            {children}
        </section>
    );
}