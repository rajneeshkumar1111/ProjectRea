"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChatbubbleEllipsesOutline, IoLayersOutline, IoSettingsOutline } from "react-icons/io5";
import { LuSquareUser } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import Account from "@/components/Account";
import Notifications from "@/components/Notifications";
import General from "@/components/General";
import DataControl from "@/components/DataControl";
import Security from "@/components/Security";

export default function SimpleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("account");
  const navItems = [
    { href: "/dashboard/chatBox", icon: <IoChatbubbleEllipsesOutline size={20} />, },
    { href: "/dashboard/user", icon: <LuSquareUser size={20} />, },
    { href: "/dashboard/notifications", icon: <FiBell size={20} />, },
    { href: "/dashboard/chat", icon: <IoLayersOutline size={20} />, },
  ];

  const bottomItems = [
    { href: "/dashboard", icon: <IoSettingsOutline size={20} onClick={() => setShowModal(true)} />, },
    { href: "/dashboard/profile", icon: <FaRegUserCircle size={20} />, },
    
  ];
   


  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return <Account />;
      case "general":
        return <General />;
      case "notifications":
        return <Notifications />;
      case "DataControl":
        return <DataControl />;
      case "Security":
        return <Security />;
      default:
        return <Account />;
    }
  };

  return (
    <>

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-16 h-screen sticky top-0 flex flex-col justify-between items-center py-4">
          {/* Top section with logo and nav */}
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <div className="w-11 h-11 flex items-center gap-[10px] rounded-[14px] border: 1px solid var(--stroke-soft-200, #E2E4E9);  font-medium text-[24.79px] leading-[41.31px] tracking-[0%] text-center p-[12px] border bg-[#FFFFFF] border-gray-300 justify-center  text-lg  text-[#1B1B08]">
             R
            </div>

            {/* Top navigation icons */}
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  active={pathname === item.href}
                />
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col items-center gap-6 pt-4">
            {bottomItems.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                active={pathname === item.href}
              />
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 m-2 bg-white border border-gray-300 rounded-lg shadow overflow-y-auto">{children}</main>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-[800px] bg-white rounded-xl border border-gray-200 shadow-md max-h-[90vh] flex flex-col overflow-hidden">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl z-10"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <div className="w-full h-[60px] flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white">
              <h2 className="font-inter font-medium text-[20px] leading-[28px] text-[#0A0D14]">Settings</h2>
            </div>

            <div className="flex flex-col md:flex-row w-full flex-1 overflow-auto">
              <div className="w-full md:w-[200px] border-r border-gray-200 bg-white px-2 py-5 space-y-3">
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "account" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("account")}
                >
                  <LuCircleUserRound className="h-5 w-5" />
                  <span className="text-sm hover:bg-blue-400 hover:text-white">Account</span>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "general" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("general")}
                >
                  <IoSettingsOutline className="h-5 w-5" />
                  <span className="text-sm font-medium text-[#868C98]">General</span>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "notifications" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  <IoNotificationsOutline className="h-5 w-5" />
                  <span className="text-sm font-medium text-[#868C98]">Notifications</span>
                </div>



                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "DataControl" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("DataControl")}
                >
                  <GoDatabase className="h-5 w-5" />
                  <span className="text-sm font-medium text-[#868C98]">Data controls</span>
                </div>





                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "Security" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("Security")}
                >

                  <AiOutlineSecurityScan className="h-5 w-5" />
                  <span className="text-sm font-medium text-[#868C98]">Security</span>
                </div>



              </div>
              <div className="w-full flex-1 p-0 overflow-y-auto">{renderContent()}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SidebarItem({
  href,
  icon,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${active
          ? " text-orange-500"
          : "text-gray-500  hover:text-orange-500"
        }`}
    >
      {icon}
    </Link>
  );

}
