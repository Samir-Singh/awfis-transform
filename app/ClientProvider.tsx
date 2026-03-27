"use client";

import SideBar from "@/components/Sidebar";
import { StyleProvider } from "@ant-design/cssinjs";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ConfigProvider from "antd/es/config-provider";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NO_LAYOUT_PATHS = ["/"];

const ClientProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const shouldHideLayout = NO_LAYOUT_PATHS.includes(pathname);

  return (
    <StyleProvider hashPriority="high">
      <AntdRegistry>
        <ConfigProvider
          theme={{
            components: {
              Dropdown: {
                paddingBlock: 0,
              },
            },
            token: {
              fontFamily: "inherit",
              colorPrimary: "#ed3324",
            },
          }}
        >
          <div className="flex h-screen">
            {!shouldHideLayout && <SideBar />}
            <div className="h-full flex-1 bg-[#FAFAFA] overflow-y-auto">
              {children}
            </div>
          </div>
        </ConfigProvider>
      </AntdRegistry>
    </StyleProvider>
  );
};

export default ClientProvider;
