import Text from "@/components/ui/text";
import Image from "next/image";
import Link from 'next/link'

interface IProject {
    image: string;
    title: string;
    desc: string;
    link: {
        name: string;
        href: string;
    };
}

export default async function Projects({
    image,
    title,
    desc,
    link,
}: IProject) {

    return (
        <div className="flex flex-col max-w-[420px]">
            <Image
                className="max-h-[200px] rounded-md shadow-md"
                src={`/${image}`}
                width={420}
                height={1}
                alt={image}
            />
            <div className="flex flex-col gap-[16px] p-[24px]">
                <div className="flex flex-col gap-[8px]">
                    <Text variant="sub1">{title}</Text>
                    <Text variant="p" className="text-gray-600">{desc}</Text>                
                </div>
                <div className="flex items-center gap-[8px]">
                    <div className="flex justify-center items-center bg-gray-100 rounded-[50%] w-[34px] h-[34px]">
                        <Image
                            src={`/link.svg`}
                            width={22}
                            height={22}
                            alt={image ?? ""}
                        />
                    </div>
                    <Text variant="btn">
                        <Link 
                            className="hover:text-indigo-400 text-indigo-500 animate-in fade-in duration-200"
                            target="_blank"
                            href={link.href}
                        >
                            {link.name}
                        </Link>                    
                    </Text>
                </div>
            </div>

        </div>
    );
}