import Contacts from "@/components/widgets/contacts/Contacts";
import Socials from "@/components/widgets/contacts/Socials";
import Education from "@/components/widgets/education/Education";
import Experience from "@/components/widgets/experience/Experience";
import Hero from "@/components/widgets/hero/Hero";
import Skills from "@/components/widgets/skills/Skills";


export default function CV() {
  return (
    <section className="flex flex-col items-center justify-center pt-[24px] max-w-[480px] w-full">
        <div className="flex flex-col w-full">
          <Hero />
          <div className="py-[16px] grow">
            <Experience expanded />
            <Skills expanded />
            <Education expanded />            
          </div>
          <footer className="relative h-full">
            <div className="
              absolute 
              inset-y-0 
              left-1/2 
              w-screen 
              -translate-x-1/2 
              bg-gradient-to-b
              from-[#A478E8]/0
              to-[#516CF7]/35 
              -z-10"
            />
            <div className="flex px-[8px] py-[16px] gap-[8px] w-full">
              <Contacts className="flex flex-col gap-[8px]"/>
              <Socials className="flex flex-col gap-[8px]"/>
            </div>
          </footer>
        </div>
    </section>
  );
}
