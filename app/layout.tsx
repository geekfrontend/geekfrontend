import "./globals.css";

export const metadata = {
  title: "Yohanes Harke Wauran | Personal Portfolio",
  description:
    "Explore the portfolio of Yohanes Harke Wauran, showcasing web development skills, creative projects, and professional experience in building innovative digital solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
