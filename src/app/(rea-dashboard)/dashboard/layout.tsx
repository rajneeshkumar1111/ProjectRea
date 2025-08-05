"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChatbubbleEllipsesOutline, IoLayersOutline, IoSettingsOutline, IoClose } from "react-icons/io5";
import { LuSquareUser, LuCircleUserRound } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { HiOutlineMenuAlt2 } from "react-icons/hi"; // New icon for the menu button

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for sidebar toggle
  const [activeTab, setActiveTab] = useState("account");

  const navItems = [
    { href: "/dashboard/chatBox", icon: <IoChatbubbleEllipsesOutline size={20} /> },
    { href: "/dashboard/user", icon: <LuSquareUser size={20} /> },
    { href: "/dashboard/notifications", icon: <FiBell size={20} /> },
    { href: "/dashboard/chat", icon: <IoLayersOutline size={20} /> },
  ];

  const bottomItems = [
    { href: "#", icon: <IoSettingsOutline size={20} onClick={() => setShowModal(true)} /> },
    { href: "/dashboard/profile", icon: <FaRegUserCircle size={20} /> },
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

  const Sidebar = () => (
    <aside className="w-16 h-screen sticky top-0 flex flex-col justify-between items-center py-4 bg-gray-100 border-r border-gray-200">
      <div className="flex flex-col items-center gap-6">
        <div className="w-11 h-11 flex items-center justify-center rounded-[14px] border border-gray-300 bg-[#FFFFFF] text-lg text-[#1B1B08] font-medium">
          R
        </div>
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              active={pathname === item.href}
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on item click
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 pt-4">
        {bottomItems.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            active={pathname === item.href}
            onClick={() => {
              if (item.href === "#") {
                setShowModal(true);
              }
              setIsSidebarOpen(false); // Close sidebar on item click
            }}
          />
        ))}
      </div>
    </aside>
  );

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Toggle button for small screens */}
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <HiOutlineMenuAlt2 size={24} />
        </button>

        {/* Sidebar for medium and larger screens */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        {/* Mobile sidebar overlay and content */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
            <div className="absolute top-0 left-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
              <button
                className="absolute top-4 right-4 text-gray-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                <IoClose size={24} />
              </button>
              <Sidebar />
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 m-2 md:m-4 bg-white border border-gray-300 rounded-lg shadow overflow-y-auto">{children}</main>
      </div>

      {/* Settings Modal - kept separate for clarity */}
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
                <SettingsTabItem
                  active={activeTab === "account"}
                  onClick={() => setActiveTab("account")}
                  icon={<LuCircleUserRound className="h-5 w-5" />}
                  label="Account"
                />
                <SettingsTabItem
                  active={activeTab === "general"}
                  onClick={() => setActiveTab("general")}
                  icon={<IoSettingsOutline className="h-5 w-5" />}
                  label="General"
                />
                <SettingsTabItem
                  active={activeTab === "notifications"}
                  onClick={() => setActiveTab("notifications")}
                  icon={<IoNotificationsOutline className="h-5 w-5" />}
                  label="Notifications"
                />
                <SettingsTabItem
                  active={activeTab === "DataControl"}
                  onClick={() => setActiveTab("DataControl")}
                  icon={<GoDatabase className="h-5 w-5" />}
                  label="Data controls"
                />
                <SettingsTabItem
                  active={activeTab === "Security"}
                  onClick={() => setActiveTab("Security")}
                  icon={<AiOutlineSecurityScan className="h-5 w-5" />}
                  label="Security"
                />
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
  onClick
}: {
  href: string;
  icon: React.ReactNode;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${active
        ? "text-orange-500"
        : "text-gray-500 hover:text-orange-500"
      }`}
    >
      {icon}
    </Link>
  );
}

// Reusable component for settings tabs
type SettingsTabItemProps = {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};

function SettingsTabItem({ active, onClick, icon, label }: SettingsTabItemProps) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${
        active ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium text-[#868C98]">{label}</span>
    </div>
  );
}
