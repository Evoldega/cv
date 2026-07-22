

import Text from "@/components/ui/text";
import Collapse from "@/components/common/collapse";
import Company from "@/components/widgets/experience/Company";

import { getTranslations } from 'next-intl/server';
import { getDescription } from "@/lib/utils";


export default async function Experience() {

  const t = await getTranslations();
  
  return (
    <section className="flex flex-row mt-[16px]">
        <Collapse 
            title={
                <Text variant="h2">
                    {t("Experience.title")}
                </Text>
            }
            content={
                <>
                    <Company 
                        image="atom_logo.png"
                        role={t("Common.frontend")}
                        company={t("Experience.rosatom")}
                        date={t("Experience.rosatom_date")}
                        location={t("Common.moscow")}
                        description={getDescription(8, t, "Experience.ros_exp")}
                        stack={`${t("Experience.technologies")}: React, TypeScript, MobX, GraphQL, NestJS (BFF), i18n, C3D Toolkit, Prisma, PostgreSQL, WebSocket, PWA, SAFe.`}
                    />
                    <Company 
                        image="chrono_logo.jpg"
                        role={t("Common.fullstack")}
                        company={t("Experience.chrono")}
                        date={t("Experience.chrono_date")}
                        location={t("Common.moscow")}
                        description={getDescription(4, t, "Experience.chrono_exp")}
                        stack={`${t("Experience.technologies")}: Node.js, TypeScript, PostgreSQL, Telegram Bot API, React, Redux, Express.js.`}
                    />
                </>
            }
        />
    </section>
  );
}
