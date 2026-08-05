import { Bell, Search, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-end border-b border-slate-800/70 bg-slate-950/70 px-8 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <Search size={18} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <Bell size={18} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <Settings size={18} />
        </button>

        <div className="mx-2 h-8 w-px bg-slate-800" />

        <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 font-semibold text-white">
            T
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Tony
            </p>

            <p className="text-xs text-slate-400">
              Administrador
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}