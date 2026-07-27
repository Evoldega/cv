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
        <div className={className ?? "flex flex-wrap gap-[4px]"} {...props}>
            {
                socials.map((soc, index) => (
                    <Contact
                        key={index}
                        customImage={
                            <div className="flex justify-center items-center bg-gray-100 rounded-[50%] w-[16px] h-[16px]">
                                <Image
                                    src={`/${soc.image}`}
                                    width={16}
                                    height={16}
                                    alt={soc.content}
                                    className="rounded-md"
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