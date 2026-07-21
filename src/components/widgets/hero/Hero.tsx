import Image from "next/image";
import Text from "@/components/ui/text";
import { getTranslations } from 'next-intl/server';


export default async function Hero() {
  const t = await getTranslations();
  
  return (
    <section className="flex flex-row items-start justify-around">
      <div className="flex flex-row items-start justify-around">
        <Image
            src="/avatar.png"
            width={156}
            height={80}
            alt="developer"
            className="rounded-md"
        />
        <div className="flex flex-col items-start justify-start ml-4">
          <Text variant="h1">{t("Hero.fullName")}</Text>
          <Text className="text-violet-500" variant="h3">{t("Hero.role")}</Text>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start ml-8">
      </div>
    </section>
  );
}
