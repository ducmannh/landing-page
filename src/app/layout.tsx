import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Lexend } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const lexend = Lexend({
  weight: ["500", "600", "700"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smartland tuyển Chuyên Viên Event MKT (Hà Nội)",
  description:
    "Smartland tuyển dụng Chuyên Viên Event MKT (Hà Nội). Số lượng: 1 - Thời hạn: Không thời hạn. Quản lý và triển khai hoạt động marketing khu vực, điều phối sự kiện (Kick-off, Activation, Site tour), sản xuất tư liệu hình ảnh flycam và làm việc với đối tác, Chủ đầu tư.",
  icons: {
    icon: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#921F27",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${beVietnamPro.variable} ${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
