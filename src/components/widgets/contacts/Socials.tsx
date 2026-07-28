import Contact from "@/components/common/Contact";
import Image from "next/image";

const socials = [
    {
        image: "inst.svg",
        title: "Instagram",
        content: "evoldega",
        href: "https://www.instagram.com/"
    }, {
        image: "linkedin.png",
        title: "Linkedin",
        content: "dmitriy-lukyanov-a97015107",
        href: "https://www.linkedin.com/in/"
    }
]

interface ISocials {
    className: string;
    [key: string]: any
}

export default async function Socials({ className, ...props }: ISocials) {
    return(
        <div className={className ?? "flex flex-wrap gap-[8px]"} {...props}>
            {
                socials.map((soc, index) => (
                    <Contact
                        key={index}
                        customImage={
                            <div className="flex justify-center items-center rounded-[50%] w-[34px] h-[34px]">
                                <Image
                                    src={`/${soc.image}`}
                                    width={34}
                                    height={34}
                                    alt={soc.content}
                                />
                            </div>
                        }
                        title={soc.title}
                        content={soc.content}
                        href={soc.href}
                    />
                ))
            }
        </div>
    )
}