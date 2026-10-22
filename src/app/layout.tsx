import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Background3D from "@/components/Background/Background3D";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVS Max | Tax Consultancy & Business Advisors",
  description: "Tax consultancy and business advisory services in India.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-[#202B3C] antialiased bg-transparent">
        {/* <Background3D/> */}
        
        {/* Ensure this wrapper and main are transparent */}
        <div className="relative z-10 min-h-screen bg-transparent">
          <Navbar />
          <main className="bg-transparent">{children}</main>
        </div>
      </body>
    </html>
  );
}