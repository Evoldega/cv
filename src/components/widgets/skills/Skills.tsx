import { Fragment } from "react";

import { skills } from "@/data/skills"

import Text from "@/components/ui/text";
import Collapse from "@/components/common/collapse";
import Chip from "@/components/ui/chip";

import { Separator } from "@/components/ui/separator";

import { getTranslations } from 'next-intl/server';

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
											<Fragment key={index}>
												{
													group.map((skill: string, index: number ) => (
														<Chip
															key={index}
															className={`bg-[linear-gradient(90deg,rgba(164,120,232,1)_0%,rgba(81,108,247,1)_100%)]`}
														>
															<Text variant="cap2" className="text-white">{skill}</Text>
														</Chip>
													))
												}

												{index !== skills[direction].length - 1 && (
														<Separator
															orientation="vertical"
															className=" w-[1px] bg-indigo-100"
														/>
												)}
											</Fragment>
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