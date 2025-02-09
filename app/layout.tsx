import "./globals.css";

export const metadata = {
  title: "Yohanes Harke Wauran",
  description: "Yohanes Harke Wauran",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
