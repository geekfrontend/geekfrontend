import Contact from "@/components/visitor/contact";
import Experience from "@/components/visitor/experience";
import Introduction from "@/components/visitor/introduction";
import Projects from "@/components/visitor/project";
import SectionDivider from "@/components/visitor/section/SectionDivider";
import Skills from "@/components/visitor/skills";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/visitor/header";
import Footer from "@/components/visitor/footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/common/theme/theme-switch";
import LanguageSwitch from "@/components/common/scroll/scroll-to-top";
import ScrollToTop from "@/components/common/scroll/scroll-to-top";
import { Inter } from "next/font/google";
import About from "@/components/visitor/about";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
    >
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <ActiveSectionContextProvider>
        <Header />
        <div className="flex flex-col items-center px-4">
          <Introduction />
          <SectionDivider />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </div>
        <Footer />

        <Toaster position="top-right" />
        <div className="fixed flex flex-col space-y-3 bottom-5 right-5">
          <ThemeSwitch />
          <LanguageSwitch />
          <ScrollToTop />
        </div>
      </ActiveSectionContextProvider>
    </main>
  );
}
