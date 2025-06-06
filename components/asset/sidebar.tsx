import { Home, Gamepad, User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../utils/logo";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between h-screen p-4 text-white w-54">
      {/* Topo */}
      <div>
        <Logo
          imageSrcLight="public/imgs/LOGO.png"
          imageSrcDark="public/imgs/LOGOdark.png"
          text="Camello"
        />
        <nav className="flex flex-col gap-1 py-5">
          <SidebarItem to="/" icon={<Home />} label="Início" />
          <SidebarItem to="/game" icon={<Gamepad />} label="Jogos" />
          <SidebarItem to="/profile" icon={<User />} label="Perfil" />
        </nav>
      </div>
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
      className="flex items-center gap-3 p-3 transition-colors duration-200 rounded-lg hover:bg-blue-700"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-base">{label}</span>
    </Link>
  );
}
