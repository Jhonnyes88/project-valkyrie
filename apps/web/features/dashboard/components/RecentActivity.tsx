import {
  FolderKanban,
  UserPlus,
} from "lucide-react";

import { DashboardActivity } from "../types/activity";

interface RecentActivityProps {
  activities: DashboardActivity[];
}

function getActivityIcon(type: DashboardActivity["type"]) {
  switch (type) {
    case "character_created":
      return <UserPlus size={18} />;

    case "project_created":
      return <FolderKanban size={18} />;
  }
}

function getActivityIconStyle(type: DashboardActivity["type"]) {
  switch (type) {
    case "character_created":
      return "bg-violet-500/10 text-violet-400";

    case "project_created":
      return "bg-fuchsia-500/10 text-fuchsia-400";
  }
}

export default function RecentActivity({
  activities,
}: RecentActivityProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
      <div>
        <h2 className="text-lg font-semibold text-white">
          Actividad reciente
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Lo último que ha ocurrido en Valkyrie Studio.
        </p>
      </div>

      {activities.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 p-7 text-center">
          <p className="text-sm text-slate-400">
            Todavía no hay actividad reciente.
          </p>
        </div>
      ) : (
        <div className="mt-6 divide-y divide-slate-800/70">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${getActivityIconStyle(
                  activity.type,
                )}`}
              >
                {getActivityIcon(activity.type)}
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-medium text-white">
                  {activity.title}
                </p>

                {activity.description && (
                  <p className="mt-1 truncate text-sm text-slate-400">
                    {activity.description}
                  </p>
                )}
              </div>

              <time
                dateTime={activity.createdAt.toISOString()}
                className="hidden shrink-0 text-xs text-slate-500 sm:block"
              >
                {activity.createdAt.toLocaleDateString()}
              </time>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}