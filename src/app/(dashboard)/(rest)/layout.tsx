import AppHeaders from "@/components/app-headers";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppHeaders />
      <main className="flex-1">{children}</main>
    </>
  );
};

export default Layout;
