import Project from "@/components/common/project";

import { getTranslations } from 'next-intl/server';

import { projects } from "@/data/projects";


export default async function Projects() {
    const t = await getTranslations("Projects");

    return (
        <div className="flex flex-wrap gap-[32px] px-[24px]">
            {
                projects.map((project, index) => (
                    <div 
                        className="
                            p-[16px] 
                            hover:bg-indigo-50  
                            rounded-md 
                            shadow-md
                            cursor-pointer
                            transition-all
                            duration-500
                        "
                        key={index}
                    >
                        <Project
                            image={project.image}
                            title={t(project.title)}
                            desc={t(project.desc)}
                            link={{
                                name: project.link.name !== project.link.href ? t(project.link.name) : project.link.name,
                                href: project.link.href
                            }}

                        />
                    </div>
                ))
            }
        </div>
    );
}
