import Text from "@/components/ui/text";
import Chip from "@/components/ui/chip";
import { Separator } from "@/components/ui/separator";
import { Carousel } from "@/components/widgets/project/components/Carousel";

import { Fragment } from "react";

import { getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";
import { Links } from "@/components/widgets/project/components/Links";


export async function Project(
  { slug }: { slug: string }
) {
  const t = await getTranslations("Projects");

  const {
    description = "",
    screenshots = [],
    technologies = [],
    responsibilities = [],
    links = {}
  } = projects.find(project => slug === project.title) ?? {};

  return (
    <main className="flex flex-col items-center gap-[32px] md:px-[24px] pb-[24px]">
      <section className="flex justify-center items-center px-[24px] md:p-[32px] md:shadow-lg">
        <div className="max-w-[900px]">         
            <Carousel images={screenshots} delay={4000} />
            <div className="flex flex-col w-full gap-[32px] py-[24px] md:p-[24px]">
                <div className="w-full text-justify">
                    <Links links={links}/>              
                    <Text variant="p">{t(description)}</Text>  
                </div>
                {
                    !!responsibilities.length && (
                        <div className="flex flex-wrap gap-[16px]">
                            {
                                responsibilities.map((tech, index) => (           
                                    <Chip key={index} className="flex-shrink-0">
                                        <Text variant="sub1">{tech}</Text>
                                    </Chip>
                                ))
                            }
                        </div>
                    )
                }
                {
                    !!technologies.length && (
                        <div className="flex flex-col gap-[16px]">
                            {
                                technologies.map((direction, directionIndex) => (
                                    <div key={directionIndex} className="flex flex-wrap gap-[8px]">
                                        {direction.map((group, groupIndex) => (
                                            <Fragment key={groupIndex}>
                                                {group.map((skill, skillIndex) => (
                                                <Chip
                                                    key={skillIndex}
                                                    className="
                                                        bg-[linear-gradient(90deg,rgba(164,120,232,1)_0%,rgba(81,108,247,1)_100%)]
                                                        hover:bg-[linear-gradient(90deg,rgba(177,135,240,1)_0%,rgba(91,119,250,1)_100%)]
                                                        hover:shadow-[0_0_20px_rgba(120,105,245,0.45)]
                                                        transition-all duration-500
                                                    "
                                                >
                                                    <Text 
                                                        variant="cap2" 
                                                        className="text-white"
                                                    >
                                                    {skill}
                                                    </Text>
                                                </Chip>
                                                ))}

                                                {groupIndex !== direction.length - 1 && (
                                                <Separator
                                                    orientation="vertical"
                                                    className="w-[1px] bg-indigo-100"
                                                />
                                                )}
                                            </Fragment>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
      </section>
    </main>
  );
}