import Link from "next/link";
import Project from "@/components/common/project";

import { getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";

export default async function Projects() {
  const t = await getTranslations("Projects");

  return (
    <div className="flex flex-wrap gap-[32px] px-[24px]">
    </div>
  );
}