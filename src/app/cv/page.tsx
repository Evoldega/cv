import Experience from "@/components/widgets/experience/Experience";
import Hero from "@/components/widgets/hero/Hero";
import Skills from "@/components/widgets/skills/Skills";

export default function CV() {
  return (
    <section className="flex flex-col items-center justify-center py-[24px] max-w-[480px] w-full">
        <div className="w-full">
          <Hero />
          <Experience />
          <Skills />      
        </div>
    </section>
  );
}
