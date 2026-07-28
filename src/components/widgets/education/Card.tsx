import Text from "@/components/ui/text";
import Image from "next/image";

interface ICard {
    image: string;
    ext: string;
    institution: string;
    course: string;
    date: string;
}

export default async function Card({
    image,
    ext = "png",
    institution,
    course,
    date
}: ICard) {
  return (
    <div className="flex flex-col gap-[8px] w-fit py-[24px] px-[16px] bg-gray-100 rounded-[6px]">
        <div className="flex flex-wrap gap-[24px] justify-between">
            <div>
                <Image
                    className="rounded-[50%]"
                    src={`/${image}.${ext}`}
                    alt={image}
                    width={48}
                    height={48}
                />
            </div>
            <div className="max-w-[300px]">
                <Text variant="sub2">{institution}</Text>
            </div>
        </div>
        <div className="flex flex-col gap-[8px]">
            <Text variant="sub1">{course}</Text>
            <Text variant="cap1">{date}</Text>
        </div>
    </div>
  );
}
