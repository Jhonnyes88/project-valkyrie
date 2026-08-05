"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderKanban, LayoutDashboard, Users } from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Characters",
    href: "/characters",
    icon: Users,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="border-b border-slate-800/70 px-8 py-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-lg font-bold text-white shadow-lg shadow-violet-900/30">
            V
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Valkyrie
            </h1>

            <p className="text-sm text-slate-400">
              AI Content Studio
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navigation.map(({ label, href, icon: Icon }) => {
          const isActive =
            pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              className={`group relative flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-violet-500/15 text-white shadow-lg shadow-violet-900/20"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-violet-500" />
              )}

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                  isActive
                    ? "bg-violet-500/20 text-violet-300"
                    : "bg-slate-900 group-hover:bg-violet-600/20 group-hover:text-violet-300"
                }`}
              >
                <Icon size={18} />
              </div>

              <span className="font-medium">
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800/70 p-5">
        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 p-4">
          <p className="text-xs uppercase tracking-widest text-violet-300">
            Valkyrie Studio
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Crea, organiza y administra tus personajes de IA desde un único lugar.
          </p>
        </div>
      </div>
    </aside>
  );
}