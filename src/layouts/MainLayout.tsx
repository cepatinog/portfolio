import { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main className="p-10">{children}</main>
    </div>
  );
}
