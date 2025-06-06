interface AvatarWithNotificationProps {
  Icon: React.ElementType;
  size?: "sm" | "md" | "lg";
  hasNotification?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "w-10 h-10 text-sm",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

export function AvatarWithNotification({
  Icon,
  size = "md",
  hasNotification = false,
  className = "",
}: AvatarWithNotificationProps) {
  return (
    <div className={`relative inline-block ${sizeMap[size]} ${className}`}>
      {/* Avatar Circle */}
      <div className="w-full h-full rounded-full bg-gray-800 border-2 border-gray-500 flex items-center justify-center overflow-hidden">
        <Icon className="text-white w-4 h-4" />
      </div>

      {/* Notification Dot */}
      {hasNotification && (
        <span className="absolute top-0 right-0 w-3 h-3   bg-red-500 rounded-full border-1 border-white" />
      )}
    </div>
  );
}
