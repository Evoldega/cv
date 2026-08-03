import Text from "@/components/ui/text";
import Collapse from "@/components/common/collapse";
import Project from "@/components/common/project";
import SeeAllProjectsButton from "@/components/widgets/last_projects/SeeAllProjectsButton";

import { getTranslations } from 'next-intl/server';

import { projects } from "@/data/projects";

export default async function LastProjects({
    expanded = false
}: { expanded?: boolean }) {

    const t = await getTranslations("LastProjects");

    return (
        <section className="flex flex-row">
            <Collapse
                expanded={expanded}
                title={
                    <div className="flex flex-wrap gap-[16px] justify-between grow mb-[32px]">
                        <Text variant="h2">
                            {t("title")}
                        </Text>
                        <SeeAllProjectsButton />
                    </div>
                }
                content={
                    <div className="flex justify-center flex-wrap gap-[32px]">
                        {
                            projects.map((project, index) => (
                                <Project
                                    key={index}
                                    image={project.image}
                                    title={t(project.title)}
                                    desc={t(project.desc)}
                                    link={{
                                        name: project.link.name !== project.link.href ? t(project.link.name) : project.link.name,
                                        href: project.link.href
                                    }}

                                />
                            ))
                        }
                    </div>
                }
            />
        </section>
    );
}