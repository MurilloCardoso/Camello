import Sidebar from "../asset/sidebar";
import Header from "../asset/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      {/* Sidebar fixa */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Header fixo */}
        <Header />

        {/* Conteúdo da página */}
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
