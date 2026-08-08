import Link from "next/link";
import Image from "next/image";
import Text from "@/components/ui/text";
import Chip from "@/components/ui/chip";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

import { getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";

export default async function Projects(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  const t = await getTranslations("Projects");

  const {
    cover = "",
    description = "",
    technologies = [[]],
    responsibilities = [""],
    link
  } = projects.find(project => slug === project.title) ?? {};  

  return (
    <main className="flex flex-col items-center gap-[32px] px-[24px]">
      <section className="max-w-[1444px]">
          <Image
              className="rounded-md shadow-md w-full max-w-[900px]"
              src={`/${cover}`}
              width={900}
              height={480}
              alt={cover}
          />          

        <div className="flex flex-col gap-[16px] p-[24px]">
            <div className="flex flex-col gap-[16px]">
              <Text variant="p">{t(description)}</Text>                
            </div>
            <div className="flex flex-col gap-[8px]">
              {
                responsibilities.map((tech, index) => (
                  <Text index={index} variant="btn">{tech}</Text>
                ))
              }
            </div>
            <div className="flex flex-col gap-[32px]">
              {
                technologies.map((direction, directionIndex) => (
                  <div key={directionIndex} className="flex flex-wrap gap-[8px]">
                    {direction.map((group, groupIndex) => (
                      <Fragment key={groupIndex}>
                        {group.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            className="bg-[linear-gradient(90deg,rgba(164,120,232,1)_0%,rgba(81,108,247,1)_100%)]"
                          >
                            <Text variant="cap2" className="text-white">
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
            {
              link && (
                <div className="flex items-center gap-[8px]">
                  <div className="flex justify-center items-center bg-gray-100 rounded-[50%] w-[34px] h-[34px]">
                    <Image
                      src={`/link.svg`}
                      width={22}
                      height={22}
                      alt={cover}
                    />
                  </div>
                  <Text variant="btn">
                    <Link 
                        className="hover:text-indigo-400 text-indigo-500 animate-in fade-in duration-200"
                        target="_blank"
                        href={link.href}
                    >
                      {link.name !== link.href ? t(`${link.name}`) : link.name}
                    </Link>                    
                  </Text>
                </div>
              )
            }
        </div>        
      </section>


    </main>
  );
}