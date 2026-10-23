"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  LogOutIcon,
  MenuIcon,
  LayoutDashboardIcon,
  Share2Icon,
  UploadIcon,
  FolderCogIcon,
} from "lucide-react";

const sidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Dashboard" },
  { href: "/social-share", icon: Share2Icon, label: "Social Share" },
  { href: "/video-upload", icon: UploadIcon, label: "Video Upload" },
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleLogoClick = () => {
    router.push("/home");
  };

  const handleSignOut = async () => {
    await signOut({ redirectUrl: "/sign-in" });
  };

  return (
    <div className="drawer min-h-screen bg-slate-950 text-slate-50 lg:drawer-open">
      <input
        id="sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="drawer-content flex flex-col">
        <header className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex-none lg:hidden">
              <label htmlFor="sidebar-drawer" className="btn btn-square btn-ghost drawer-button border border-white/10 text-white">
                <MenuIcon />
              </label>
            </div>
            <div className="flex-1">
              <Link href="/home" onClick={handleLogoClick} className="flex items-center gap-3 text-xl font-bold tracking-tight text-white">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-violet-400/40 bg-slate-900/70">
                  <Image src="/cloud-vault-logo.svg" alt="Cloud Vault logo" fill className="object-cover" sizes="40px" />
                </div>
                <span className="hidden sm:inline">Cloud Vault</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {user && (
                <>
                  <div className="hidden items-center gap-3 md:flex">
                    <div className="avatar">
                      <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-violet-500/60">
                        <Image
                          src={user.imageUrl}
                          alt={user.username || user.emailAddresses[0].emailAddress}
                          fill
                          className="object-cover"
                          sizes="36px"
                        />
                      </div>
                    </div>
                    <span className="max-w-xs truncate text-sm text-slate-200">
                      {user.username || user.emailAddresses[0].emailAddress}
                    </span>
                  </div>
                  <button onClick={handleSignOut} className="btn btn-ghost btn-circle border border-white/10 text-white hover:border-violet-400">
                    <LogOutIcon className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </header>

        <main className="flex-grow">
          <div className="mx-auto my-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      <div className="drawer-side">
        <label htmlFor="sidebar-drawer" className="drawer-overlay" />
        <aside className="flex h-full w-64 flex-col border-r border-white/10 bg-slate-900/95">
          <div className="flex items-center justify-center gap-3 py-6 text-white">
            <FolderCogIcon className="h-8 w-8 text-violet-300" />
            <span className="text-lg font-semibold">Control Center</span>
          </div>

          <ul className="menu w-full flex-grow p-4 text-slate-100">
            {sidebarItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-base transition ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-950 shadow-lg shadow-violet-500/25"
                      : "text-slate-200 hover:bg-slate-800"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {user && (
            <div className="p-4">
              <button onClick={handleSignOut} className="btn btn-outline btn-error w-full">
                <LogOutIcon className="mr-2 h-5 w-5" />
                Sign Out
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
