import StepBackButton from "@/components/common/step-back-button";
import Text from "@/components/ui/text";
import Breadcrumbs from '@/components/common/breadcrumbs';

interface IMenuBar {
    title: string;
    breadcrumbs: { name: string; href?: string }[];
    sticky?: boolean;
}

export default async function MenuBar({
    title,
    breadcrumbs,
    sticky = false
}: IMenuBar) {

    return (
        <menu className={`
            flex 
            justify-between 
            grow gap-[16px] 
            p-[24px]
            mb-[24px]
            ${sticky ? "sticky top-0 z-10 bg-white" : ""}
            shadow-sm
        `}>
            <div className="flex grow gap-[16px]">
                <StepBackButton />
                <Text variant="h2">
                    {title}
                </Text>
            </div>
            <div className="flex items-end">
                <Breadcrumbs list={breadcrumbs}/>
            </div>
            
        </menu>
    )
}