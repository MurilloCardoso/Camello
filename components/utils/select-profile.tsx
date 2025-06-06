import { ChevronDown } from "lucide-react";
import { Avatar } from "./avatar";

export function SelectProfile() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Avatar
        size="sm"
        name="Murillo"
        imageUrl="https://avatars.githubusercontent.com/u/111089912?v=4"
      />
      <h2 className="text-sm">Murillo Cardoso</h2>
      <ChevronDown className=" w-5 h-5 ml-2 text-gray-500 dark:text-gray-400" />
    </div>
  );
}
