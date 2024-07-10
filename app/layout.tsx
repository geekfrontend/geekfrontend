import "./globals.css";
import { Inter } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";
import LanguageContextProvider from "@/context/language-context";
const inter = Inter({ subsets: ["latin"] });
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Yohanes Harke Wauran | Personal Portfolio",
  description: "Harke is a Frontend Developer with 1 year of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}`}>
        <AuthProvider>
          <LanguageContextProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </LanguageContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
