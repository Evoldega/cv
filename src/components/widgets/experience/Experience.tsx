import Image from "next/image";
import Text from "@/components/ui/text";
import Collapse from "@/components/common/collapse";

import { getTranslations } from 'next-intl/server';


export default async function Experience() {

  const t = await getTranslations();
  
  return (
    <section className="flex flex-row items-start">
        <Collapse 
            title={
                <Text variant="h4" className="font-[500] text-[12px]">
                    {t("Experience.title")}
                </Text>
            }
            content={
                <Text variant="p">
                    A bunch of unnecessary crap that makes no sense, but looks beautiful and stylish.
                </Text>
            }
            variant="l"
        />
    </section>
  );
}
