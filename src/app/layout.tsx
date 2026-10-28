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
  title: "Smartland tuyển Giám đốc Dự án",
  description:
    "Dẫn dắt hoạt động kinh doanh của một hoặc nhiều dự án bất động sản, từ giai đoạn chuẩn bị, xây dựng lực lượng chuyên án đến triển khai bán hàng và tối ưu kết quả. Vị trí dành cho người có tư duy hệ thống, giỏi đào tạo đội ngũ, phối hợp đa phòng ban tốt và đủ bản lĩnh làm việc trực tiếp với Chủ đầu tư.",
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
