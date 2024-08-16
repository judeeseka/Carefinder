import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect("/sign-in");
  return (
    <main className="flex flex-col md:flex-row h-screen w-full">
      <>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="md:hidden">
          <Header type="dashboard" />
        </div>
      </>

      {children}
    </main>
  );
}
