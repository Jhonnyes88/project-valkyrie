import Header from "./Header";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-slate-800 bg-slate-900 text-slate-100">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Valkyrie</h1>
        <p className="text-sm text-slate-400">AI Studio</p>
      </div>

      <nav className="px-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition hover:bg-slate-800">
          <span>Dashboard</span>
        </button>
      </nav>
    </aside>
  );
}





