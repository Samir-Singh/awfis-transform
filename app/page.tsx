import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <Image src="/logo.svg" width={112} height={32} alt="logo" />
      <h1 className="mt-5 font-extrabold font-inter">
        Welcome to Transform by AWFIS
      </h1>
      <p className="font-inter font-medium text-sm">
        Login to access Dashboard
      </p>
      <Link
        href="/project"
        className="flex items-center justify-center bg-[#eb3b00] mt-14 text-white text-sm gap-4 h-[52px] font-inter min-w-96"
      >
        <Image
          src="/ms-office-icon.png"
          width={19}
          height={23}
          alt="ms-office"
        />
        Login with Office 365
      </Link>
    </div>
  );
}
