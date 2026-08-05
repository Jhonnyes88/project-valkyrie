import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <section className="mb-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-400">
            Workspace
          </span>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mt-4 text-base leading-7 text-slate-400">
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="flex shrink-0 items-center">
            {actions}
          </div>
        )}
      </div>

      <div className="mt-8 h-px bg-gradient-to-r from-violet-500/30 via-slate-700/40 to-transparent" />
    </section>
  );
}