import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type StatCardProps = {
  title: string;
  value: number;
  subtitle?: string;
  icon?: ReactNode;
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-900/20">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-300">
          {icon ?? <ArrowUpRight size={22} />}
        </div>

        <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
          Resumen
        </span>
      </div>

      <div className="relative mt-8">
        <p className="text-sm font-medium text-slate-400">
          {title}
        </p>

        <h2 className="mt-2 text-5xl font-bold tracking-tight text-white">
          {value}
        </h2>

        {subtitle && (
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}