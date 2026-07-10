import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}