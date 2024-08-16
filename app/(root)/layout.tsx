import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header type="home" />
      {children}
      <Footer />
    </>
  );
}
