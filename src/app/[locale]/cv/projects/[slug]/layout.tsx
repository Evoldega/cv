import { getTranslations } from 'next-intl/server';

import { getMetadata } from '@/lib/utils';

interface ISlugLayout {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
    slug: string;
}>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
    const { slug } = await params;    
    return await getMetadata(`Projects.${slug}`, "Dmitry Lukyanov CV - Projects - " + slug);
}


export default async function SlugLayout(
    { children }: ISlugLayout
) {
    const t = await getTranslations();
        

    return (
        <>
            {children}
        </>
    );
}