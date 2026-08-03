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

interface IBreadcrumbs {
    list: {
        name: string;
        href?: string;   
    }[];
}

export default function Breadcrumbs(
    { list }: IBreadcrumbs
) {

  return (
    <Breadcrumb>
        <BreadcrumbList>
            {
                list.map((item, index) => (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                            {
                                item.href ? (
                                    <BreadcrumbLink href={item.href}>
                                        <Text
                                            className="                
                                                text-indigo-600
                                                hover:text-indigo-400
                                                transition-all
                                                duration-300
                                                cursor-pointer
                                            "
                                            variant="btn"
                                        >{item.name}</Text>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>
                                        <Text variant="btn">{item.name}</Text>
                                    </BreadcrumbPage>
                                )
                            }
                        </BreadcrumbItem>
                        {
                            list.length - 1 !== index && (
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