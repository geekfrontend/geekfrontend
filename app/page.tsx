import Introduction from "@/components/introduction";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Inter } from "next/font/google";
import Hello from "@/components/common/Hello";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} `}>
      <Hello />
      <ActiveSectionContextProvider>
        <div>
          <Introduction />
        </div>
      </ActiveSectionContextProvider>
    </main>
  );
}
