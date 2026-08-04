import Project from "@/components/common/project";
import Link from "next/link";

import { getTranslations } from 'next-intl/server';

import { projects } from "@/data/projects";


export default async function Projects() {
    const t = await getTranslations("Projects");

    return (
        <div className="flex flex-wrap gap-[32px] px-[24px]">
            {projects.map((project) => (
                <Link
                    href={`/cv/projects/${project.title}`}
                    key={project.title}
                    className="
                        p-[16px]
                        hover:bg-indigo-50
                        rounded-md
                        shadow-md
                        cursor-pointer
                        transition-all
                        duration-500
                    "
                >
                    <Project
                        image={project.image}
                        title={t(project.title)}
                        desc={t(project.desc)}
                    />
                </Link>
            ))}
        </div>
    );
}
