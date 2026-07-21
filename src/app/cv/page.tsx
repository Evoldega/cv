import Experience from "@/components/widgets/experience/Experience";
import Hero from "@/components/widgets/hero/Hero";

export default function CV() {
  return (
    <section className="flex flex-col flex-1 items-center justify-center">
        <div className="w-[480px]">
          <Hero />
          <Experience />          
        </div>
    </section>
  );
}
