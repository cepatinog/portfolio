import { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main> {/* Agregamos padding-top */}
    </div>
  );
}
