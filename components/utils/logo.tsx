import { Link } from "react-router-dom";

interface LogoProps {
  imageSrc: string;
  text: string;
  to?: string;
  className?: string;
}

export default function Logo({
  imageSrc,
  text,
  to = "/",
  className = "",
}: LogoProps) {
  const content = (
    <div className={`flex items-center w-full gap-2 ${className}`}>
      <img src={imageSrc} alt="Logo" className="w-10 h-10 object-contain" />
      <span className="text-xl font-semibold ">{text}</span>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}
