import { Home, Gamepad, User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-[calc(100vh-4rem)] bg-gray-900 text-white flex flex-col justify-between p-4">
      {/* Topo */}
      <nav className="flex flex-col gap-2">
        <SidebarItem to="/" icon={<Home />} label="Início" />
        <SidebarItem to="/game" icon={<Gamepad />} label="Jogos" />
        <SidebarItem to="/profile" icon={<User />} label="Perfil" />
      </nav>

      {/* Rodapé */}
      <div className="flex flex-col gap-2">
        <SidebarItem to="/settings" icon={<Settings />} label="Configurações" />
        <SidebarItem to="/logout" icon={<LogOut />} label="Sair" />
      </div>
    </aside>
  );
}

function SidebarItem({
  to,
  icon,
  label,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 hover:bg-blue-700"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-base">{label}</span>
    </Link>
  );
}
