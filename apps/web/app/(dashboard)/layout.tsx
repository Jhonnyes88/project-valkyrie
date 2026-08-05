import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-violet-950/20">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Header />

          <main className="flex-1 p-6 lg:p-8">
            <div className="mx-auto w-full max-w-[1700px]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}