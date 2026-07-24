import { getTranslations } from 'next-intl/server';
import Contact from "@/components/widgets/contacts/components/Contact";


export default async function Contacts() {

    const t = await getTranslations();
  
    const contacts = [
        {
            image: "mail",
            ext: "svg",
            title: "Email",
            content: "gwinp@yandex.ru"
        }, {
            image: "link",
            ext: "svg",
            title: "Github",
            content: "https://github.com/Evoldega"
        }, {
            image: "phone",
            ext: "svg",
            title: "Phone",
            content: "+7 (977) 399-01-05"
        }, {
            image: "location",
            ext: "svg",
            title: "Adress",
            content: "Moscow, Russia"
        },
    ]

    return (
        <div className="flex flex-wrap gap-[4px]">
            {
                contacts.map((cont, index) => (
                    <Contact
                        key={index}
                        image={cont.image}
                        ext={cont.ext}
                        title={cont.title}
                        content={cont.content}
                    />                                
                ))
            }
        </div>
    );
}