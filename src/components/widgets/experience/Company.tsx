import Contact from "@/components/common/contact";
import HighlightText from "@/components/common/highlight-text";
import Text from "@/components/ui/text";
import Image from "next/image";
import Collapse from "@/components/common/collapse";

interface ICompany {
    image: {
        name: string,
        ext: string
    },
    role: string,
    company: string,
    date: string,
    location: string,
    description: {
        text: string,
        boldWords: string[]
    }[],
    stack: string,
    expanded?:boolean;
} 

export default function Company({
    image,
    role,
    company,
    date,
    location,
    description,
    stack,
    expanded
}: ICompany): React.ReactElement {
  
  return (
    <section className="flex ">
        <div className="grow">
            <Collapse
                expanded={expanded}
                lineSize="m"
                title={
                    <section className="flex flex-row flex-wrap grow max-xs:gap-[8px] items-between justify-between">
                        <div className="flex-shrink-0 ">
                            <Contact
                                customImage={
                                    <Image
                                        className="rounded-[50%]"
                                        src={`/${image.name}.${image.ext}`}
                                        width={34}
                                        height={1}
                                        alt={image.name}
                                    />
                                }
                                title={role}
                                content={company}
                            />                    
                        </div>
                        <div className="flex flex-col justify-between xs:items-end items-start">
                            <Text variant="cap1">{date}</Text>
                            <div className="flex flex-row">
                                <Image
                                    className="mr-[2px]"
                                    src="/location.svg"
                                    width={14}
                                    height={14}
                                    alt="location"
                                />
                                <Text variant="cap1">{location}</Text>
                            </div>
                        </div>
                    </section>
                }
                content={
                    <section className="grow mt-[24px] text-justify">
                        {
                            description.map((desc, index) => (
                                <div key={index} className="flex flex-row items-start mb-[4px]">
                                    <div className="flex-shrink-0 flex justify-center w-[24px] h-[20px]">
                                        <Image
                                            className="stroke-gray-200"
                                            src="/gray_dot.svg"
                                            width={3}
                                            height={3}
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
                        <div className="my-[24px]">
                            <Text variant="btn">{stack}</Text>
                        </div>
                    </section>
                }
            />
        </div>

    </section>

  );
}
