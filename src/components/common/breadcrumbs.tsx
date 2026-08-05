import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Text from "@/components/ui/text";
import { Tooltip } from "@/components/common/tooltip";

interface IBreadcrumbs {
    list: {
        name: string;
        href?: string;   
    }[];
}

const truncateText = (
    text: string,
    maxLength: number
) => {
    if (text.length <= maxLength) {
        return text;
    }

    return <Tooltip align="end" title={text}>
        {text.slice(0, maxLength - 3)}...
    </Tooltip>;
};

export default function Breadcrumbs(
    { list }: IBreadcrumbs
) {

    const getBreadcrumbName = (name: string, index: number) => {
        const isProtected =
            index === 0 || // Первая
            index === list.length - 2 || // Предпоследняя
            index === list.length - 1; // Последняя

        // Не режем меньше чем 32 символа
        if (isProtected) {
            return truncateText(name, 32);
        }

        // Остальные крошки можно резать сильнее
        return truncateText(name, 16);
    };

    return (
        <Breadcrumb>
            <BreadcrumbList className="flex-nowrap overflow-hidden">
                {
                    list.map((item, index) => (
                        <Fragment key={index}>
                            <BreadcrumbItem className="min-w-0">
                                {
                                    index !== list.length - 1 ? (
                                        <BreadcrumbLink
                                            href={item.href}
                                            className="max-w-full"
                                        >
                                            <Text
                                                variant="btn"
                                                className="
                                                    block
                                                    max-w-full
                                                    truncate
                                                    text-indigo-600
                                                    hover:text-indigo-400
                                                    transition-all
                                                    duration-300
                                                    cursor-pointer
                                                "
                                            >
                                                {getBreadcrumbName(item.name, index)}
                                            </Text>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage>
                                            <Text
                                                variant="btn"
                                                className="
                                                    block
                                                    max-w-full
                                                    truncate
                                                "
                                            >
                                                {getBreadcrumbName(item.name, index)}
                                            </Text>
                                        </BreadcrumbPage>
                                    )
                                }
                            </BreadcrumbItem>

                            {
                                index !== list.length - 1 && (
                                    <BreadcrumbSeparator />
                                )
                            }
                        </Fragment>
                    ))
                }
            </BreadcrumbList>
        </Breadcrumb>
    );
}