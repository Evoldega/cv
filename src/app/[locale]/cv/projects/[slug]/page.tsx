import { Project as ProjectWidget } from "@/components/widgets/project/Project"

export default async function Project(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  return (
    <ProjectWidget slug={slug} />
  );
}