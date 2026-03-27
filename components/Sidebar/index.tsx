"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[102px] border-r border-[#E5E6E6]">
      <div className="p-4 border-b border-[#E5E6E6]">
        <Image src="/logo.svg" width={70} height={20} alt="logo" />
      </div>

      <div className="py-4 flex justify-center flex-col font-noto gap-2 text-sm">
        <Link
          href="/project"
          className={`py-2 px-3 rounded flex flex-col items-center gap-2 ${pathname?.startsWith("/project") ? "text-primary bg-[#FDEBEA] font-medium" : ""}`}
        >
          <Image
            src="/primary-folder.svg"
            width={20}
            height={20}
            alt="folder-icon"
          />
          <span className="font-medium">Projects</span>
        </Link>

        <Link
          href="/help-and-support"
          className={`py-2 px-3 rounded flex flex-col items-center gap-2 ${pathname?.startsWith("/help-and-support") ? "text-primary bg-[#FDEBEA] font-medium" : ""}`}
        >
          <Image src="/question.svg" width={20} height={20} alt="help-icon" />
          <span className="font-medium text-[#59595C]">Help</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
