export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <div>
        <h2 className="text-xl font-semibold text-slate-100">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
          T
        </div>

        <div>
          <p className="text-sm text-slate-100">Tony</p>
          <p className="text-xs text-slate-400">Administrador</p>
        </div>
      </div>
    </header>
  );
}