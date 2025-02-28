import { icons } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

function Social({ containerStyle, iconStyle }) {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyle}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;
