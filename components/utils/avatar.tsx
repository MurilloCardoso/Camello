import type { LucideIcon } from "lucide-react";

interface AvatarProps {
  name: string;
  imageUrl?: string;
  Icon?: LucideIcon;
  className?: "string";
  size?: "sm" | "md" | "lg";
}

export function Avatar({
  name,
  imageUrl,
  size = "md",
  Icon,
  className,
}: AvatarProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-10 h-10 text-sm";
      case "lg":
        return "w-20 h-20 text-lg";
      default:
        return "w-14 h-14 text-base";
    }
  };

  const getBackgroundColor = () => {
    const colors = [
      "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
      "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
      "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
    ];

    // Use the name to consistently select a color
    const index =
      name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      colors.length;
    return colors[index];
  };
  if (Icon) {
    return (
      <div className={`relative inline-block w-10 h-10 text-sm ${className}`}>
        {/* Avatar Circle */}
        <div className="w-full h-full rounded-full bg-gray-800 border-2 border-gray-500 flex items-center justify-center overflow-hidden">
          <Icon className="text-white w-4 h-4" />
        </div>
      </div>
    );
  } else if (imageUrl) {
    return (
      <div
        className={
          `${getSizeClasses()} border-solid border-blue-600 border-3 rounded-full overflow-hidden flex-shrink-0 ` +
          className
        }
      >
        <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
      </div>
    );
  }

  return (
    <div
      className={`${getSizeClasses()} ${getBackgroundColor()} rounded-full flex items-center justify-center font-medium flex-shrink-0`}
    >
      {getInitials(name)}
    </div>
  );
}
