

import Text from "@/components/ui/text";
import Collapse from "@/components/common/collapse";

import { getTranslations } from 'next-intl/server';
import Card from "./Card";

export default async function Education() {

    const t = await getTranslations();
  
    const edus = [
        {
            image: "training_center",
            ext: "jpeg",
            institution: t("Education.inst_name_1"),
            course: t("Education.course_1"),
            date: t("Education.date_1")
        }, {
            image: "training_center",
            ext: "jpeg",
            institution: t("Education.inst_name_1"),
            course: t("Education.course_2"),
            date: t("Education.date_2")
        },
    ];

    return (
        <section className="flex flex-row">
            <Collapse
                title={
                    <Text variant="h2">
                        {t("Education.title")}
                    </Text>
                }
                content={
                    <div className="flex f-row justify-center gap-[4px]">
                        {
                            edus.map((edu, index) => (
                                <Card
                                    key={index}
                                    image={edu.image}
                                    ext={edu.ext}
                                    institution={edu.institution}
                                    course={edu.course}
                                    date={edu.date}
                                />
                            ))
                        }

                    </div>
                }
            />
        </section>
    );
}
