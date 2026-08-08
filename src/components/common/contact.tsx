import Image from "next/image";
import Link from 'next/link'
import Text from "@/components/ui/text";

interface IContact {
    title: string;
    content: string;
    image?: string;
    ext?: string;
    href?: string;
    customImage?: React.ReactNode;
}

export default async function Contact({
    title,
    content,
    image,
    ext,
    href,
    customImage
}: IContact) {  
  return (
    <div className="flex gap-[8px] flex-shrink-0">
        {
            customImage ??
            <div className="flex justify-center items-center bg-gray-100 rounded-[50%] w-[34px] h-[34px]">
                <Image
                    src={`/${image}.${ext}`}
                    width={22}
                    height={22}
                    alt={image ?? ""}
                />
            </div>
        }
        <div className="flex flex-col justify-between">
            <Text variant="cap1">{title}</Text>
            <Text variant="btn" className="flex">{
                href ?
                <Link 
                    className="hover:text-indigo-400 animate-in fade-in duration-200"
                    target="_blank"
                    href={href === content ? content : href + content}
                >
                    {content}
                </Link> :
                content
            }</Text>
        </div>
    </div>
  );
}