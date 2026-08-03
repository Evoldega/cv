import Text from "@/components/ui/text";
import Collapse from "@/components/common/collapse";
import Project from "@/components/widgets/last_projects/Project";
import ArrowIcon from "@/assets/arrow_bar_right.svg"

import { getTranslations } from 'next-intl/server';

export default async function LastProjects({
    expanded = false
}: { expanded?: boolean }) {

    const t = await getTranslations();
  
    const projects = [
        {
            image: "atomcode_sshot.png",
            title: t("LastProjects.atomcode"),
            desc: t("LastProjects.atomcode_desc"),
            link: {
                name: "https://atomkod.ru",
                href: "https://atomkod.ru"
            }
        }, {
            image: "dtwin_sshot.png",
            title: t("LastProjects.dt"),
            desc: t("LastProjects.dt_desc"),
            link: {
                name: t("LastProjects.dt_link"),
                href: "https://itrussia.media/ru/article/tsifrovoy-dvoynik-ot-rosatoma-revolyutsiya-v-atomnom-mashino"
            }    
        }
    ];

    return (
        <section className="flex flex-row">
            <Collapse
                expanded={expanded}
                title={
                    <Text variant="h2" className="mb-[32px]">
                        {t("LastProjects.title")}
                    </Text>
                }
                content={
                    <div className="flex justify-center flex-wrap gap-[32px]">
                        {
                            projects.map((project, index) => (
                                <Project
                                    key={index}
                                    image={project.image}
                                    title={project.title}
                                    desc={project.desc}
                                    link={{
                                        name: project.link.name,
                                        href: project.link.href
                                    }}

                                />
                            ))
                        }
                        <ArrowIcon className="gray-100" />
                    </div>
                }
            />
        </section>
    );
}