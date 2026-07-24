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
    <div className="flex flex-col gap-[4px] w-fit py-[12px] px-[8px] bg-gray-100 rounded-[6px]">
        <div className="flex justify-between">
            <div>
                <Image
                    className="mr-[8px] rounded-[50%]"
                    src={`/${image}.${ext}`}
                    alt={image}
                    width={24}
                    height={24}
                />
            </div>
            <div className="max-w-[103px]">
                <p className="font-[500] text-[6px] leading-[8px]">
                    {institution}
                </p>
            </div>
        </div>
        <div className="max-w-[135px]">
            <p className="font-[500] text-[7px] leading-[9px]">
                {course}
            </p>
            <p className="font-[400] text-[5px] text-gray-400 leading-[7px]">
                {date}
            </p>
        </div>
    </div>
  );
}
