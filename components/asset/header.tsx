import { SelectProfile } from "../utils/select-profile";
import { Avatar } from "../utils/avatar";
import { Calendar, Search } from "lucide-react";
import { Bell } from "lucide-react";
import { AvatarWithNotification } from "../utils/avatar-with-notification";
import Logo from "../utils/logo";
import { Input } from "../utils/input";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-900 text-white p-4 w-full ">
      <Logo imageSrc="public/LOGO.png" text="CAMELLO" />
      <Input icon={Search} variant={"default"} />
      <nav className="flex gap-4  items-center">
        <div className=" flex justify-end">
          <AvatarWithNotification Icon={Bell} hasNotification size="sm" />
        </div>
        <div className=" flex justify-end">
          <Avatar size={"sm"} name="Calendar" Icon={Calendar} />
        </div>
        <SelectProfile />
      </nav>
    </header>
  );
}
