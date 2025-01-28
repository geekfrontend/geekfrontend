import Header from "@/components/layout/public/header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main
        id="skipMain"
        className="max-w-5xl px-4 py-24 mx-auto mb-16 sm:px-8"
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
