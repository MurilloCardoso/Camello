import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

interface LogoProps {
  imageSrcLight: string;
  imageSrcDark: string;
  text: string;
  to?: string;
  className?: string;
}

export default function Logo({
  imageSrcLight,
  imageSrcDark,
  text,
  to = "/",
  className = "",
}: LogoProps) {
  const { theme } = useTheme();
  const content = (
    <div className={`flex items-center w-full gap-2 ${className}`}>
      {theme !== "light" ? (
        <img
          src={imageSrcLight}
          alt="Logo"
          className="object-contain w-10 h-10"
        />
      ) : (
        <img
          src={imageSrcDark}
          alt="Logo"
          className="object-contain w-10 h-10"
        />
      )}
      <span className="text-xl font-semibold text-black dark:text-white ">
        {text}
      </span>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}
