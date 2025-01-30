import Image from "next/image";
import LogoSvg from "../../public/shared/logo.svg";

export default function Logo() {
  return (
    <div className="logo">
      <Image src={LogoSvg} alt="" />
    </div>
  );
}
