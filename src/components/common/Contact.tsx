import Image from "next/image";
import Link from 'next/link'

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
    <div className="flex w-fit h-max-[20px] gap-[8px]">
        {
            customImage ??
            <div className="flex justify-center items-center bg-gray-100 rounded-[50%] w-[16px] h-[16px]">
                <Image
                    src={`/${image}.${ext}`}
                    width={10}
                    height={10}
                    alt={image ?? ""}
                    className="rounded-md"
                />
            </div>
        }
        <div className="flex flex-col items-between">
            <p className="h-fit font-[400] text-[6px] leading-[8px] text-gray-500">{title}</p>
            {
                href ?
                <Link 
                    className="h-fit font-[500] text-[7px] leading-[9px] hover:text-violet-500 animate-in fade-in duration-200"
                    target="_blank"
                    href={href === content ? content : href + content}
                >
                    {content}
                </Link> :
                <p className="h-fit font-[500] text-[7px] leading-[9px]">{content}</p>
            }
        </div>
    </div>
  );
}