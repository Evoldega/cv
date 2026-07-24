import Image from "next/image";
import Text from "@/components/ui/text";
import { getTranslations } from 'next-intl/server';
import { LanguageSwitcher } from "@/components/common/languageSwitcher";
import Contacts from "../contacts/Contacts";


export default async function Hero() {
  const t = await getTranslations();
  
  return (
    <section className="flex flex-row items-stretch justify-start">
      <div className="flex flex-row w-full items-stretch justify-start gap-[16px]">
        <Image
            src="/avatar.png"
            width={156}
            height={80}
            alt="developer"
            className="rounded-md"
            loading="eager"
        />
        <div className="flex flex-col items-between justify-between">
          <div>
            <div className="flex w-full justify-between">
              <Text variant="h1">{t("Hero.fullName")}</Text>
              <LanguageSwitcher />
            </div>
            <Text className="text-violet-500" variant="h2">{t("Common.frontend")}</Text>            
          </div>
          <Contacts />
        </div>
      </div>
    </section>
  );
}