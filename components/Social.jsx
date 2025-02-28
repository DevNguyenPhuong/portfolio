import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DevNguyenPhuong" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/feed/" },
  { icon: <FaFacebookF />, path: "https://www.facebook.com/?locale=vi_VN" },
];

function Social({ containerStyle, iconStyle }) {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          className={iconStyle}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;
