import Image from "next/image";
import LogoSvg from "../../public/shared/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo">
      <Link href={"/"}>
        <span className="visually-hidden">homepage</span>
        <Image src={LogoSvg} alt="" />
      </Link>
    </div>
  );
}
