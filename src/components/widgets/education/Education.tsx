import Text from "@/components/ui/text";
import Collapse from "@/components/common/collapse";
import Card from "@/components/widgets/education/Card";

import { education as edus } from "@/data/education"

import { getTranslations } from 'next-intl/server';

export default async function Education({
    expanded = false
}: { expanded?: boolean }) {
    const t = await getTranslations("Education");

    return (
        <section className="flex flex-row">
            <Collapse
                expanded={expanded}
                title={
                    <Text variant="h2" className="mb-[32px]">
                        {t("title")}
                    </Text>
                }
                content={
                    <div className="flex justify-center flex-wrap gap-[16px]">
                        {
                            edus.map((edu, index) => (
                                <Card
                                    key={index}
                                    image={edu.image}
                                    ext={edu.ext}
                                    institution={t(edu.institution)}
                                    course={t(edu.course)}
                                    date={t(edu.date)}
                                />
                            ))
                        }

                    </div>
                }
            />
        </section>
    );
}
