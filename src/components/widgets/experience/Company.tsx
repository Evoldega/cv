import HighlightText from "@/components/common/highlightText";
import Liner from "@/components/ui/liner";
import Image from "next/image";

interface ICompany {
    image: string,
    role: string,
    company: string,
    date: string,
    location: string,
    description: {
        text: string,
        boldWords: string[]
    }[],
    stack: string
} 

export default function Company({
    image,
    role,
    company,
    date,
    location,
    description,
    stack
}: ICompany): React.ReactElement {
  
  return (
    <section className="flex">
        <Liner size="m" expanded={true} />
        <div>
            <section className="flex flex-row items-between justify-between">
                <div className="flex flex-row ">
                    <Image
                        className="mr-[8px] rounded-[50%]"
                        src={`/${image}`}
                        width={20}
                        height={20}
                        alt={image}
                    />
                    <div className="flex flex-col justify-between">
                        <p className="font-[400] text-[6px]">
                            {role}
                        </p>
                        <p className="font-[500] text-[7px]">
                            {company}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <p className="font-[400] text-[5px]">
                        {date}
                    </p>
                    <div className="flex flex-row">
                        <Image
                            className="mr-[2px]"
                            src="/location.svg"
                            width={6}
                            height={6}
                            alt="location"
                        />
                        <p className="font-[400] text-[5px]">
                            {location}
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-100 mt-[8px]">
                {
                    description.map((desc, index) => (
                        <div key={index} className="flex flex-row items-start mb-[4px]">
                            <div className="flex justify-center w-[12px] h-[14px]">
                                <Image
                                    className="stroke-gray-200"
                                    src="/gray_dot.svg"
                                    width={2}
                                    height={2}
                                    alt="dot"
                                />                                
                            </div>
                            <HighlightText 
                                key={index}
                                text={desc.text}
                                boldWords={desc.boldWords}
                            />
                        </div>
                    ))
                }
                <p className="font-[400] text-[8px] mb-[16px]">
                    {stack}
                </p>
            </section>            
        </div>

    </section>

  );
}
