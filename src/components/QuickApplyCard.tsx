"use client";

import { useState } from "react";

export default function QuickApplyCard() {
  const [toast, setToast] = useState("");
  const rawPhone = "0967833991";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawPhone);
      setToast("Đã sao chép 0967 833 991.");
    } catch {
      setToast("Đã chọn số, nhấn giữ hoặc Ctrl+C để sao chép.");
    }
    setTimeout(() => {
      setToast("");
    }, 4000);
  };

  return (
    <aside className="w-full lg:w-[300px] flex-none">
      <div className="lg:sticky lg:top-24 bg-[var(--surface)] rounded-xl p-[22px] border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] shadow-[0_10px_30px_rgba(60,20,24,0.08)]">
        <h3 className="text-lg font-bold text-[var(--ink)]">
          Ứng tuyển nhanh qua Zalo
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Gửi CV và một vài dòng giới thiệu về dự án anh/chị đã dẫn dắt.
        </p>
        <div
          id="phone"
          className="text-2xl font-semibold mt-3.5 tracking-tight tabular-nums select-all text-[var(--ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          0967 833 991
        </div>
        <div className="grid gap-2.5 mt-4">
          <a
            className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-[var(--accent-ink)] font-semibold rounded-md py-2.5 px-4 text-[15px] hover:brightness-110 transition-all text-center"
            href="https://zalo.me/0967833991"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mở Zalo
          </a>
          <button
            className="inline-flex items-center justify-center gap-2 bg-transparent text-[var(--ink)] border border-[var(--gold-line)] hover:border-[var(--gold)] font-semibold rounded-md py-2.5 px-4 text-[15px] cursor-pointer transition-all"
            onClick={handleCopy}
            type="button"
          >
            Sao chép số điện thoại
          </button>
        </div>
        <div
          className="text-[13px] text-[var(--brass)] min-h-[1.2em] mt-1.5 font-medium transition-opacity"
          aria-live="polite"
        >
          {toast}
        </div>
        <div className="mt-5 pt-4 border-t border-[var(--line)] text-sm text-[var(--muted)]">
          <b className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold mb-1">
            Nơi làm việc
          </b>
          <span className="text-[var(--ink)]">
            Tòa nhà Sao Mai, 19 Lê Văn Lương, Thanh Xuân, Hà Nội
          </span>
          <br />
          <a
            href="https://www.google.com/maps/search/?api=1&query=19+L%C3%AA+V%C4%83n+L%C6%B0%C6%A1ng+Thanh+Xu%C3%A2n+H%C3%A0+N%E1%BB%99i"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brass)] hover:underline inline-block mt-1 font-medium"
          >
            Xem bản đồ
          </a>
        </div>
      </div>
    </aside>
  );
}

