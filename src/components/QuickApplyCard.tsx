"use client";

import { useState } from "react";
import Image from "next/image";

export default function QuickApplyCard() {
  const [toast, setToast] = useState("");
  const rawPhone = "0915531904";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawPhone);
      setToast("Đã sao chép 0915 531 904.");
    } catch {
      setToast("Đã chọn số, nhấn giữ hoặc Ctrl+C để sao chép.");
    }
    setTimeout(() => {
      setToast("");
    }, 4000);
  };

  return (
    <div className="w-full bg-[var(--surface)] rounded-2xl p-6 border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] shadow-[0_10px_35px_rgba(25,28,33,0.06)]">
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brass)] bg-[var(--gold-light)] px-2.5 py-0.5 rounded-full border border-[var(--gold)]/30">
          Tuyển dụng Hà Nội
        </span>
        <span className="text-xs text-[var(--muted)] font-semibold">SL: 1</span>
      </div>

      <h3 className="text-lg font-bold text-[var(--ink)]">
        Ứng tuyển nhanh
      </h3>
      <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
        Vị trí: <b className="text-[var(--ink)]">Chuyên Viên Event MKT</b>
      </p>
      <p className="mt-1 text-[13px] text-[var(--muted)] leading-relaxed">
        Gửi CV và Portfolio / hình ảnh, video sự kiện bạn từng thực hiện trực tiếp cho phòng Nhân sự qua Zalo.
      </p>

      <div className="flex items-center gap-3.5 mt-4">
        <Image
          src="/images/hr_phuong_avatar.jpg"
          alt="Ảnh Ms Phuong, Chuyên viên Nhân sự Smartland"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover border-2 border-[var(--gold)] flex-none shadow-sm"
        />
        <div>
          <div
            id="phone"
            className="text-2xl font-bold tracking-tight tabular-nums select-all text-[var(--accent)] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            0915 531 904
          </div>
          <div className="text-xs text-[var(--muted)] mt-0.5">
            Ms Phuong · Chuyên viên Nhân sự
          </div>
        </div>
      </div>

      <div className="grid gap-2.5 mt-5">
        <a
          className="btn-primary inline-flex items-center justify-center gap-2 !text-white font-semibold rounded-lg py-2.5 px-4 text-[15px] hover:bg-[var(--accent-hover)] hover:!text-white transition-all text-center shadow-[0_2px_8px_rgba(163,29,36,0.25)]"
          href="https://zalo.me/0915531904"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ứng tuyển ngay qua Zalo
        </a>
        <button
          className="inline-flex items-center justify-center gap-2 bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)] hover:text-[var(--brass)] font-semibold rounded-lg py-2.5 px-4 text-[14px] cursor-pointer transition-all"
          onClick={handleCopy}
          type="button"
        >
          Sao chép số điện thoại
        </button>
      </div>

      <div
        className="text-[13px] text-[var(--brass)] min-h-[1.2em] mt-2 font-medium transition-opacity text-center"
        aria-live="polite"
      >
        {toast}
      </div>

      <div className="mt-5 pt-4 border-t border-[var(--line-light)] text-sm text-[var(--muted)]">
        <b className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold mb-1">
          Địa điểm làm việc
        </b>
        <span className="text-[var(--ink)] text-xs sm:text-[13px] leading-relaxed block">
          Tòa nhà Sao Mai, 19 Lê Văn Lương, P. Nhân Chính, Q. Thanh Xuân, Hà Nội
        </span>
        <a
          href="https://www.google.com/maps/search/?api=1&query=19+L%C3%AA+V%C4%83n+L%C6%B0%C6%A1ng+Thanh+Xu%C3%A2n+H%C3%A0+N%E1%BB%99i"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brass)] hover:underline inline-block mt-1.5 text-xs font-semibold"
        >
          Xem vị trí trên bản đồ →
        </a>
      </div>
    </div>
  );
}
