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

export default async function Skills() {

    const t = await getTranslations();
	const primaryGradient = "linear-gradient(90deg,rgba(164,120,232,1)_0%,rgba(81,108,247,1)_100%)";

	return (
		<section>
			<Collapse 
				title={
					<Text variant="h2">
						{t("Skills.title")}
					</Text>
				}
				content={
					<div className="flex flex-wrap gap-[8px]">
						{
							Object.keys(skills).map((direction) => (
								<div className="flex flex-wrap gap-[4px]">
									{
										skills[direction].map((group: string[], index: number) => (
											<div className="flex items-center" key={`${direction}-${index}`}>
												{
													group.map((skill: string, index: number ) => (
														<Chip
															key={index}
															className={`bg-[${primaryGradient}] mr-[4px]`}
														>
															<p className="font-[500] text-[7px] text-white">
																{ skill }
															</p>
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