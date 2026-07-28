import { getTranslations } from 'next-intl/server';
import Contact from "@/components/common/Contact";

interface IContacts {
    className?: string;
    [key: string]: any
}

export default async function Contacts({ className, ...props }: IContacts) {

    const t = await getTranslations();
  
    const contacts = [
        {
            image: "mail",
            ext: "svg",
            title: t("Contacts.mail"),
            content: "gwinp@yandex.ru",
            href: "mailto:"
        }, {
            image: "link",
            ext: "svg",
            title: "Github",
            content: "https://github.com/Evoldega",
            href: "https://github.com/Evoldega"
        }, {
            image: "phone",
            ext: "svg",
            title: t("Contacts.phone"),
            content: "+7 (977) 399-01-05",
            href: "tel:"
        }, {
            image: "location",
            ext: "svg",
            title: t("Contacts.adress"),
            content: `${t("Common.russia")}, ${t("Common.moscow")}`
        },
    ]

    return (
        <div className={className ?? "flex flex-wrap gap-[24px]"} {...props}>
            {
                contacts.map((cont, index) => (
                    <Contact
                        key={index}
                        image={cont.image}
                        ext={cont.ext}
                        title={cont.title}
                        content={cont.content}
                        href={cont.href}
                    />
                ))
            }
        </div>
    );
}