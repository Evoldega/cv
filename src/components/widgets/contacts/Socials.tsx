import Contact from "@/components/common/contact";
import Image from "next/image";
import { socials } from "@/data/socials";

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
                            <div className="flex justify-center items-center w-[34px] h-[34px]">
                                <Image
                                    className="rounded-[50%]"
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