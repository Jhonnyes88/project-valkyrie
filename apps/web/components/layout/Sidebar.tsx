import Link from "next/link";
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
  return (
    <aside className="min-h-screen w-64 border-r border-slate-800 bg-slate-900 text-slate-100">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Valkyrie</h1>

        <p className="text-sm text-slate-400">AI Studio</p>
      </div>

      <nav className="space-y-1 px-3">
        {navigation.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-slate-800"
          >
            <Icon size={18} />

            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}