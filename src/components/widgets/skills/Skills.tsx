import Text from "@/components/ui/text";
import Collapse from "@/components/common/collapse";
import { Separator } from "@/components/ui/separator";
import Chip from "@/components/ui/chip";

import { getTranslations } from 'next-intl/server';

const skills: any = {
	frontend: [
		["HTML", "CSS", "SCSS", "JS", "TS"],
		["React", "Next", "MUI", "Redux", "MobX", "Zustand", "GraphQL"],
		["Bun", "Webpack", "Vite"],
		["WebSocket", "PWA", "FSD"],
		["D3.js", "i18n", "C3D Toolkit"]
	],
	backend: [
		["Node.js", "Nest.js"],
		["MongoDB", "PostgreSQL"],
		["Grafana", "Prisma", "Swagger", "Telegraf"],
		["REST API"]
	],
	other: [
		["Git", "Jenkins", "Docker"],
		["Linux", "Bash"],
		["Figma", "Jira"],
		["Scrum", "Lean"]
	]
};

export default async function Skills({
    expanded = false
}: { expanded?: boolean }) {
    const t = await getTranslations();

	return (
		<section>
			<Collapse 
				expanded={expanded}
				title={
					<Text variant="h2" className="mb-[32px]">
						{t("Skills.title")}
					</Text>
				}
				content={
					<div className="flex flex-wrap flex-col gap-[32px] mb-[32px]">
						{
							Object.keys(skills).map((direction, index) => (
								<div key={index} className="flex flex-wrap gap-[8px]">
									{
										skills[direction].map((group: string[], index: number) => (
											<div className="flex flex-wrap items-center" key={`${direction}-${index}`}>
												{
													group.map((skill: string, index: number ) => (
														<Chip
															key={index}
															className={`bg-[linear-gradient(90deg,rgba(164,120,232,1)_0%,rgba(81,108,247,1)_100%)] mr-[8px]`}
														>
															<Text variant="cap2" className="text-white">{skill}</Text>
														</Chip>
													))
												}

												{index !== skills[direction].length - 1 && (
													<Separator
														orientation="vertical"
														className="h-full w-[1px] bg-gray-100"
													/>
												)}
											</div>
										))
									}
								</div>
							))
						}
					</div>
				}
			/>
		</section>
	);
}