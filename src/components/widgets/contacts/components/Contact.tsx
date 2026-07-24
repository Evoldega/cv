import Image from "next/image";

interface IContact {
    image: string;
    ext: string;
    title: string;
    content: string;
}

export default async function Contact({
    image,
    ext,
    title,
    content
}: IContact) {  
  return (
    <div className="flex w-fit h-max-[20px] gap-[8px]">
        <div className="flex justify-center items-center bg-gray-100 rounded-[50%] w-[16px] h-[16px]">
            <Image
                src={`/${image}.${ext}`}
                width={10}
                height={10}
                alt={image}
                className="rounded-md"
            />
        </div>
        <div className="flex flex-col items-between">
            <p className="h-fit font-[400] text-[6px] leading-[8px] text-gray-500">{title}</p>
            <p className="h-fit font-[500] text-[7px] leading-[9px]">{content}</p>
        </div>
    </div>
  );
}