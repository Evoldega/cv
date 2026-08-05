import Image from "next/image";
import Text from "@/components/ui/text";
import { getTranslations } from 'next-intl/server';
import { LanguageSwitcher } from "@/components/common/language-switcher";
import Contacts from "@/components/widgets/contacts/Contacts";

export default async function Hero() {
  const t = await getTranslations();
  
  return (
    <section className="flex flex-row items-stretch justify-start">
      <div className="flex gap-[32px] flex-row flex-wrap lg:flex-nowrap grow items-stretch justify-start">
        <Image
            src="/avatar.png"
            width={600}
            height={1}
            alt="developer"
            className="rounded-md"
            loading="eager"
        />
        <div className="flex flex-col gap-[32px] grow items-between">
          <div className="flex flex-col gap-[12px]">
            <div className="flex justify-between">
              <Text variant="h1">{t("Hero.fullName")}</Text>
              <div className="flex gap-[8px]">
                <LanguageSwitcher />
              </div>
            </div>
            <Text className="text-indigo-500" variant="h2">{t("Common.frontend")}</Text>            
          </div>
          <Contacts className="flex flex-col flex-wrap gap-[24px] max-w-[640px]" />
        </div>
      </div>
    </section>
  );
}