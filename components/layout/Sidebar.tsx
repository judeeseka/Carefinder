import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import React from "react";
import { FileChartLine, Hospital, House, Settings } from "lucide-react";
import DashboardLinks from "./DashboardLinks";
import SidebarFooter from "./SidebarFooter";
import { getLoggedInUser } from "@/lib/actions/user.action";

const Sidebar = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="cursor-pointer flex items-center gap-3 py-1 md:p-3 2xl:p-4"
        >
          <Image src={logo} alt="Carefinder logo" className="w-6 h-auto " />
          <h1 className="text-2xl font-bold max-xl:hidden">Carefinder</h1>
        </Link>

        <DashboardLinks icon={<House />} link="/dashboard" label="Home" />
        <DashboardLinks
          icon={<Hospital />}
          link="/manage-hospitals"
          label="Manage Hospitals"
        />
        <DashboardLinks
          icon={<FileChartLine />}
          link="/analytics"
          label="Analytics/Reports"
        />
        <DashboardLinks icon={<Settings />} link="/settings" label="Settings" />
      </nav>

      <SidebarFooter user={loggedIn} />
    </section>
  );
};

export default Sidebar;
