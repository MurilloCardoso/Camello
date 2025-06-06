import { Input } from "../utils/input";
import { SelectProfile } from "../utils/select-profile";
import { AvatarWithNotification } from "../utils/avatar-with-notification";
import { Avatar } from "../utils/avatar";
import { Calendar, Moon, Sun, Search, Bell } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between w-full p-4 ">
      <div className="w-1/2">
        <Input icon={Search} size={"lg"} variant={"default"} />
      </div>
      <div className="flex items-center justify-end gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-600 transition-colors dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
        <AvatarWithNotification Icon={Bell} hasNotification size="sm" />
        <Avatar size={"sm"} name="Calendar" Icon={Calendar} />
        <SelectProfile />
      </div>
    </header>
  );
}
