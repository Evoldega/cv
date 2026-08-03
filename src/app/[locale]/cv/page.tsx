import Contacts from "@/components/widgets/contacts/Contacts";
import Socials from "@/components/widgets/contacts/Socials";
import Education from "@/components/widgets/education/Education";
import Experience from "@/components/widgets/experience/Experience";
import Hero from "@/components/widgets/hero/Hero";
import LastProjects from "@/components/widgets/last_projects/LastProjects";
import Skills from "@/components/widgets/skills/Skills";


export default function CV() {
  return (
    <section className="flex flex-col items-center justify-center pt-[24px] px-[24px] max-w-[1444px] min-h-screen w-full">
        <div className="flex flex-col grow w-full">
          <Hero />
          <div className="flex flex-col grow py-[64px]">
            <LastProjects expanded/>
            <Experience expanded />
            <Skills expanded />
            <Education expanded />
          </div>
          <footer className="relative">
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
            <div className="flex flex-wrap px-[8px] pb-[64px] gap-[24px]">
              <Contacts className="flex flex-col gap-[24px]"/>
              <Socials className="flex flex-col gap-[24px]"/>
            </div>
          </footer>
        </div>
    </section>
  );
}