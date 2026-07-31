"use client";

import AvatarUploader from "../components/AvatarUploader";

interface AvatarSectionProps {
  avatar: string;
  onAvatarChange: (avatar: string) => void;
}

export default function AvatarSection({
  avatar,
  onAvatarChange,
}: AvatarSectionProps) {
  return (
    <section className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
      <h2 className="text-lg font-semibold text-white">
        Avatar
      </h2>

      <AvatarUploader
        value={avatar}
        onChange={onAvatarChange}
      />
    </section>
  );
}