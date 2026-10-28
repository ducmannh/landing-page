import Image from "next/image";
import QuickApplyCard from "@/components/QuickApplyCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[var(--surface)]/95 backdrop-blur-md border-b border-[var(--line)] shadow-[0_2px_16px_rgba(25,28,33,0.04)]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <a
            className="inline-flex items-center rounded-lg leading-none"
            href="https://smartland.vn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Smartland"
          >
            <Image
              src="/images/logo.png"
              alt="Smartland - 21 năm phân phối bất động sản"
              width={168}
              height={46}
              className="h-10 sm:h-11 w-auto block object-contain"
              priority
            />
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium text-[var(--muted)]">
            <a href="#gioi-thieu" className="hover:text-[var(--brass)] transition-colors no-underline">
              Về Smartland
            </a>
            <a href="#tam-nhin-su-menh" className="hover:text-[var(--brass)] transition-colors no-underline">
              Tầm nhìn &amp; Sứ mệnh
            </a>
            <a href="#hoat-dong" className="hover:text-[var(--brass)] transition-colors no-underline">
              Hoạt động &amp; Dự án
            </a>
            <a href="#chi-tiet-cong-viec" className="hover:text-[var(--brass)] transition-colors no-underline">
              Chi tiết công việc
            </a>
          </nav>

          <a
            className="btn-primary inline-flex items-center gap-2 !text-white font-semibold rounded-lg py-2 px-3.5 sm:py-2.5 sm:px-5 text-sm sm:text-[14px] hover:bg-[var(--accent-hover)] hover:!text-white transition-all no-underline whitespace-nowrap shadow-[0_2px_10px_rgba(163,29,36,0.22)]"
            href="https://zalo.me/0915531904"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ứng tuyển ngay
          </a>
        </div>
      </header>

      {/* Hero Band */}
      <div className="hero-band-bg hero-band-circles text-[var(--ink)] relative overflow-hidden border-b border-[var(--line)]">
        <section className="max-w-[1140px] mx-auto px-4 sm:px-6 py-10 sm:py-16 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs tracking-[0.14em] uppercase text-[var(--brass)] font-bold">
              Tuyển dụng · Khối Marketing &amp; Truyền thông
            </span>
            <span className="inline-block text-[11px] font-semibold text-[var(--brass)] bg-[var(--gold-light)] px-3 py-0.5 rounded-full border border-[var(--gold)]/35 uppercase tracking-wider">
              Smartland Miền Bắc
            </span>
          </div>

          <h1 className="text-[32px] sm:text-5xl lg:text-[58px] font-bold mt-3 text-[var(--ink)] leading-[1.18]">
            Chuyên Viên <span className="text-[var(--brass)]">Event MKT</span> (Hà Nội)
          </h1>

          {/* Recruitment status banner matching user's reference */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl border-2 border-dashed border-[var(--accent)]/45 bg-[var(--surface)] flex flex-wrap items-center justify-between gap-4 shadow-[0_4px_20px_rgba(163,29,36,0.06)] max-w-[720px]">
            <div>
              <div className="font-bold text-[var(--ink)] text-base sm:text-lg">
                Chuyên Viên Event MKT (Hà Nội)
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-[14px] text-[var(--muted)] mt-1.5">
                <span>Số lượng: <b className="text-[var(--ink)] font-semibold">1</b></span>
                <span className="text-[var(--line)]">|</span>
                <span>Thời hạn: <b className="text-[var(--accent)] font-semibold">Không thời hạn</b></span>
                <span className="text-[var(--line)]">|</span>
                <span>Địa điểm: <b className="text-[var(--ink)] font-semibold">Thanh Xuân, Hà Nội</b></span>
              </div>
            </div>
            <a
              className="btn-primary inline-flex items-center justify-center !text-white font-semibold rounded-lg py-2.5 px-5 text-sm hover:bg-[var(--accent-hover)] hover:!text-white transition-all no-underline shadow-md flex-none"
              href="https://zalo.me/0915531904"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ứng tuyển ngay
            </a>
          </div>

          <p className="max-w-[65ch] text-[var(--muted)] text-base sm:text-lg mt-5 leading-relaxed">
            Gia nhập Smartland – thương hiệu 21 năm uy tín phân phối bất động sản cao cấp tại Việt Nam. Đồng hành cùng các Chủ đầu tư hàng đầu (Masterise Homes, Vingroup, Ecopark, Phú Long...), chủ động đề xuất ý tưởng concept, điều phối tổ chức các sự kiện quy mô (Kick-off, Activation, Site tour), sản xuất tư liệu hình ảnh/flycam sắc nét và đại diện công ty tại thị trường miền Bắc.
          </p>

          <dl className="grid grid-cols-2 lg:grid-cols-4 mt-8 border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[0_8px_25px_rgba(25,28,33,0.04)]">
            <div className="p-4 sm:p-5 border-r border-b lg:border-b-0 border-[var(--line)] min-w-0">
              <dt className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold">
                Địa điểm
              </dt>
              <dd className="mt-1 font-bold text-[var(--ink)] text-sm sm:text-base">
                Thanh Xuân, Hà Nội
              </dd>
            </div>
            <div className="p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-[var(--line)] min-w-0">
              <dt className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold">
                Số lượng &amp; Hạn nộp
              </dt>
              <dd className="mt-1 font-bold text-[var(--ink)] text-sm sm:text-base">
                1 nhân sự · Không thời hạn
              </dd>
            </div>
            <div className="p-4 sm:p-5 border-r border-[var(--line)] min-w-0">
              <dt className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold">
                Kinh nghiệm
              </dt>
              <dd className="mt-1 font-bold text-[var(--ink)] text-sm sm:text-base">
                Từ 3 năm Marketing / Event
              </dd>
            </div>
            <div className="p-4 sm:p-5 min-w-0">
              <dt className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold">
                Thu nhập
              </dt>
              <dd className="mt-1 font-bold text-[var(--ink)] text-sm sm:text-base">
                Cạnh tranh theo năng lực
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              className="btn-primary inline-flex items-center gap-2 !text-white font-semibold rounded-lg py-2.5 px-5 text-[15px] hover:bg-[var(--accent-hover)] hover:!text-white transition-all no-underline shadow-sm"
              href="https://zalo.me/0915531904"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gửi hồ sơ qua Zalo
            </a>
            <a
              className="inline-flex items-center gap-2 bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] hover:border-[var(--gold)] hover:text-[var(--brass)] font-semibold rounded-lg py-2.5 px-5 text-[15px] transition-all no-underline shadow-sm"
              href="#chi-tiet-cong-viec"
            >
              Xem chi tiết công việc
            </a>
          </div>
        </section>
      </div>

      {/* About Smartland Section (Theo nội dung website smartland.vn) */}
      <section id="gioi-thieu" className="bg-[var(--surface)] border-b border-[var(--line)] scroll-mt-16">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold-light)] border border-[var(--gold)]/30 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brass)] mb-3">
                <span>Về Công ty TNHH Bất động sản Smartland</span>
              </div>
              <h2 className="text-2xl sm:text-[32px] font-bold text-[var(--ink)] leading-tight">
                21 năm tiên phong tư vấn &amp; phân phối bất động sản cao cấp
              </h2>
              <p className="mt-4 text-[var(--muted)] text-base sm:text-[17px] leading-relaxed">
                Được thành lập từ năm 2004, <b>Smartland</b> là một trong những đơn vị phân phối và tiếp thị bất động sản chuyên nghiệp uy tín hàng đầu tại Việt Nam. Trải qua hơn hai thập kỷ hình thành và phát triển vững chắc, Smartland tự hào là đối tác chiến lược tin cậy của các tập đoàn địa ốc danh tiếng hàng đầu như: <b>Masterise Homes, Vingroup, Ecopark, Phú Long, Keppel Land, Refico...</b>
              </p>
              <p className="mt-3 text-[var(--muted)] text-[15px] leading-relaxed">
                Với mạng lưới văn phòng trải dài từ TP. Hồ Chí Minh, Hà Nội, Đà Nẵng, Nha Trang, Phú Quốc, Bắc Ninh đến Hải Phòng, Smartland không ngừng kiến tạo những chuẩn mực dịch vụ cao nhất, đem lại tổ ấm an cư lý tưởng và giải pháp sinh lời bền vững cho hàng vạn khách hàng trên toàn quốc.
              </p>
            </div>

            {/* Impressive Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--bg)] border border-[var(--line)] shadow-inner">
              <div className="bg-[var(--surface)] py-4 px-2 sm:p-4 rounded-xl border border-[var(--line)] text-center shadow-sm flex flex-col items-center justify-center min-w-0">
                <b className="block text-2xl sm:text-[26px] xl:text-[28px] text-[var(--brass)] tabular-nums leading-none font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  21<span className="text-[0.75em] font-bold text-[var(--accent)] ml-0.5">+</span>
                </b>
                <span className="text-[12px] sm:text-[13px] text-[var(--muted)] font-medium mt-1.5 block leading-snug">Năm phát triển</span>
              </div>
              <div className="bg-[var(--surface)] py-4 px-2 sm:p-4 rounded-xl border border-[var(--line)] text-center shadow-sm flex flex-col items-center justify-center min-w-0">
                <b className="block text-2xl sm:text-[26px] xl:text-[28px] text-[var(--brass)] tabular-nums leading-none font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  300<span className="text-[0.75em] font-bold text-[var(--accent)] ml-0.5">+</span>
                </b>
                <span className="text-[12px] sm:text-[13px] text-[var(--muted)] font-medium mt-1.5 block leading-snug">Dự án đã triển khai</span>
              </div>
              <div className="bg-[var(--surface)] py-4 px-2 sm:p-4 rounded-xl border border-[var(--line)] text-center shadow-sm flex flex-col items-center justify-center min-w-0">
                <b className="block text-2xl sm:text-[24px] xl:text-[26px] text-[var(--brass)] tabular-nums leading-none font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  10.000<span className="text-[0.75em] font-bold text-[var(--accent)] ml-0.5">+</span>
                </b>
                <span className="text-[12px] sm:text-[13px] text-[var(--muted)] font-medium mt-1.5 block leading-snug">Sản phẩm bán ra</span>
              </div>
              <div className="bg-[var(--surface)] py-4 px-2 sm:p-4 rounded-xl border border-[var(--line)] text-center shadow-sm flex flex-col items-center justify-center min-w-0">
                <b className="block text-2xl sm:text-[26px] xl:text-[28px] text-[var(--brass)] tabular-nums leading-none font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  3.000<span className="text-[0.75em] font-bold text-[var(--accent)] ml-0.5">+</span>
                </b>
                <span className="text-[12px] sm:text-[13px] text-[var(--muted)] font-medium mt-1.5 block leading-snug">Nhân viên &amp; Chuyên viên</span>
              </div>
              <div className="bg-[var(--surface)] py-4 px-2 sm:p-4 rounded-xl border border-[var(--line)] text-center shadow-sm flex flex-col items-center justify-center min-w-0">
                <b className="block text-2xl sm:text-[26px] xl:text-[28px] text-[var(--brass)] tabular-nums leading-none font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  100<span className="text-[0.75em] font-bold text-[var(--accent)] ml-0.5">+</span>
                </b>
                <span className="text-[12px] sm:text-[13px] text-[var(--muted)] font-medium mt-1.5 block leading-snug">Đối tác chiến lược</span>
              </div>
              <div className="bg-[var(--surface)] py-4 px-2 sm:p-4 rounded-xl border border-[var(--line)] text-center shadow-sm flex flex-col items-center justify-center min-w-0">
                <b className="block text-2xl sm:text-[26px] xl:text-[28px] text-[var(--brass)] tabular-nums leading-none font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  15<span className="text-[0.75em] font-bold text-[var(--accent)] ml-0.5">+</span>
                </b>
                <span className="text-[12px] sm:text-[13px] text-[var(--muted)] font-medium mt-1.5 block leading-snug">Văn phòng toàn quốc</span>
              </div>
            </div>
          </div>

          {/* Tầm nhìn - Sứ mệnh - Giá trị cốt lõi */}
          <div id="tam-nhin-su-menh" className="mt-14 pt-12 border-t border-[var(--line)] scroll-mt-20">
            <div className="text-center max-w-[680px] mx-auto mb-10">
              <span className="text-xs tracking-[0.14em] uppercase text-[var(--brass)] font-bold block mb-1">
                Định hướng chiến lược
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--ink)]">
                Tầm nhìn, Sứ mệnh &amp; Giá trị cốt lõi
              </h3>
              <p className="text-[var(--muted)] text-sm sm:text-base mt-2">
                Nền tảng vững chắc làm nên thương hiệu Smartland uy tín trên thị trường bất động sản Việt Nam
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tầm nhìn */}
              <div className="bg-[var(--bg)] border border-[var(--line)] rounded-2xl p-6 sm:p-7 relative hover:border-[var(--gold)] transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--gold-light)] text-[var(--brass)] flex items-center justify-center font-bold text-lg mb-4 border border-[var(--gold)]/30">
                  🎯
                </div>
                <h4 className="text-lg font-bold text-[var(--ink)]">Tầm nhìn</h4>
                <p className="text-[var(--muted)] text-sm leading-relaxed mt-2.5">
                  Giữ vững vị thế dẫn đầu trong mảng tư vấn và phân phối bất động sản, trở thành đối tác chiến lược đáng tin cậy hàng đầu với mọi Chủ đầu tư, khách hàng và đối tác trên cả nước.
                </p>
              </div>

              {/* Sứ mệnh */}
              <div className="bg-[var(--bg)] border border-[var(--line)] rounded-2xl p-6 sm:p-7 relative hover:border-[var(--gold)] transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--gold-light)] text-[var(--brass)] flex items-center justify-center font-bold text-lg mb-4 border border-[var(--gold)]/30">
                  🌱
                </div>
                <h4 className="text-lg font-bold text-[var(--ink)]">Sứ mệnh</h4>
                <p className="text-[var(--muted)] text-sm leading-relaxed mt-2.5">
                  Vận dụng kinh nghiệm chuyên sâu, đội ngũ chuyên viên xuất sắc và tư duy tiếp thị hiện đại để nâng cao giá trị ngành bất động sản Việt Nam, mang đến giải pháp an cư và đầu tư bền vững.
                </p>
              </div>

              {/* Giá trị cốt lõi */}
              <div className="bg-[var(--bg)] border border-[var(--line)] rounded-2xl p-6 sm:p-7 relative hover:border-[var(--gold)] transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[var(--gold-light)] text-[var(--brass)] flex items-center justify-center font-bold text-lg mb-4 border border-[var(--gold)]/30">
                  💎
                </div>
                <h4 className="text-lg font-bold text-[var(--ink)]">Giá trị cốt lõi: Tâm – Tín</h4>
                <p className="text-[var(--muted)] text-sm leading-relaxed mt-2.5">
                  <b>Chất lượng, Đạo đức, Uy tín và Chuyên nghiệp</b> là kim chỉ nam trong mọi hành động. Sự minh bạch về thông tin và lợi ích khách hàng luôn là tôn chỉ hoạt động cao nhất.
                </p>
              </div>
            </div>
          </div>

          {/* Đối tác & Giải thưởng */}
          <div className="mt-10 flex flex-wrap gap-2.5 justify-center pt-2">
            <span className="inline-flex items-center border border-[var(--line)] rounded-full px-3.5 py-1.5 text-[13px] bg-[var(--bg)] text-[var(--ink)] font-medium shadow-2xs">
              <em className="not-italic text-[var(--accent)] font-bold mr-1.5">🏆 2025</em>
              Top 1 Đại lý phân phối Essensia Sky · Phú Long
            </span>
            <span className="inline-flex items-center border border-[var(--line)] rounded-full px-3.5 py-1.5 text-[13px] bg-[var(--bg)] text-[var(--ink)] font-medium shadow-2xs">
              <em className="not-italic text-[var(--accent)] font-bold mr-1.5">🏆 2025</em>
              Top 1 Đại lý dự án Eco Village Saigon River · Ecopark
            </span>
            <span className="inline-flex items-center border border-[var(--line)] rounded-full px-3.5 py-1.5 text-[13px] bg-[var(--bg)] text-[var(--ink)] font-medium shadow-2xs">
              <em className="not-italic text-[var(--accent)] font-bold mr-1.5">🏆 2025</em>
              Top 5 Đại lý xuất sắc toàn quốc · Masterise Homes
            </span>
            <span className="inline-flex items-center border border-[var(--line)] rounded-full px-3.5 py-1.5 text-[13px] bg-[var(--bg)] text-[var(--ink)] font-medium shadow-2xs">
              <em className="not-italic text-[var(--accent)] font-bold mr-1.5">🏆 2025</em>
              Đại lý chiến lược hàng đầu The Filmore Đà Nẵng
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="hoat-dong" className="max-w-[1140px] mx-auto px-4 sm:px-6 py-14 sm:py-16 scroll-mt-16">
        <div className="text-xs tracking-[0.14em] uppercase text-[var(--brass)] font-bold">
          Hình ảnh thực tế &amp; Văn hóa doanh nghiệp
        </div>
        <h2 className="text-2xl sm:text-[30px] font-bold text-[var(--ink)] mt-2">
          Sự kiện, đào tạo và dự án trọng điểm tại Smartland
        </h2>
        <p className="text-[var(--muted)] max-w-[65ch] mt-2.5 text-base">
          Những khoảnh khắc sinh động từ các chiến dịch Kick-off bùng nổ, Site tour khảo sát thực địa, hoạt động sản xuất hình ảnh flycam và lễ ký kết hợp tác cùng Chủ đầu tư.
        </p>

        {/* Team block */}
        <div className="mt-8">
          <p className="text-[13px] font-bold tracking-[0.08em] uppercase text-[var(--brass)] mb-3">
            Đội ngũ &amp; Hoạt động thực tế
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-4">
            <figure className="relative rounded-2xl overflow-hidden bg-[var(--line)] md:row-span-2 group shadow-sm border border-[var(--line)]">
              <Image
                src="/images/team_1.jpeg"
                alt="Đội ngũ Smartland áo đỏ chụp ảnh tập thể trước tòa tháp căn hộ"
                width={800}
                height={600}
                className="w-full h-full object-cover min-h-[260px] md:min-h-full block group-hover:scale-102 transition-transform duration-300"
              />
              <figcaption className="absolute inset-x-0 bottom-0 pt-8 px-5 pb-4 text-white text-sm font-medium bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                Đội ngũ chuyên án và marketing khảo sát thực địa dự án
              </figcaption>
            </figure>
            <figure className="relative rounded-2xl overflow-hidden bg-[var(--line)] aspect-[3/2] group shadow-sm border border-[var(--line)]">
              <Image
                src="/images/team_2.jpeg"
                alt="Đội ngũ đứng trên sân thượng nhìn ra hồ và khu đô thị"
                width={600}
                height={400}
                className="w-full h-full object-cover block group-hover:scale-102 transition-transform duration-300"
              />
              <figcaption className="absolute inset-x-0 bottom-0 pt-8 px-5 pb-4 text-white text-sm font-medium bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                Sản xuất hình ảnh, video &amp; góc quay flycam tại dự án
              </figcaption>
            </figure>
            <figure className="relative rounded-2xl overflow-hidden bg-[var(--line)] aspect-[3/2] group shadow-sm border border-[var(--line)]">
              <Image
                src="/images/team_3.jpeg"
                alt="Đội ngũ ngồi trên bậc thang vườn cảnh quan, tay tạo hình trái tim"
                width={600}
                height={400}
                className="w-full h-full object-cover block group-hover:scale-102 transition-transform duration-300"
              />
              <figcaption className="absolute inset-x-0 bottom-0 pt-8 px-5 pb-4 text-white text-sm font-medium bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                Tinh thần nhiệt huyết, gắn kết của đại gia đình Smartland
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Training block */}
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-8 items-center bg-[var(--surface)] border border-[var(--line)] border-l-4 border-l-[var(--gold)] rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(25,28,33,0.03)]">
            <figure className="relative rounded-xl overflow-hidden bg-[var(--line)] max-w-[360px] mx-auto lg:max-w-none w-full border border-[var(--line)] shadow-sm">
              <Image
                src="/images/training.jpeg"
                alt="Poster chương trình đào tạo chuyên sâu Vinhomes Green Paradise của Smart Property"
                width={400}
                height={600}
                className="w-full aspect-[2/3] object-cover block"
              />
            </figure>
            <div>
              <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-bold block mb-1.5">
                Sự kiện &amp; Đào tạo dự án
              </span>
              <h3 className="text-xl sm:text-[24px] font-bold text-[var(--ink)] leading-snug">
                Tổ chức các sự kiện Kick-off, Đào tạo &amp; Kích hoạt thương hiệu
              </h3>
              <p className="text-[var(--muted)] mt-3 max-w-[54ch] leading-relaxed">
                Trước mỗi chiến dịch mở bán hay ra mắt dự án mới, Smartland luôn tổ chức các sự kiện quy mô từ Kick-off bùng nổ, Activation sôi động đến các buổi đào tạo chuyên sâu và Site tour trải nghiệm cho đội ngũ kinh doanh và đối tác.
              </p>
              <p className="text-[var(--muted)] mt-2.5 max-w-[54ch] leading-relaxed">
                Chuyên viên Event MKT sẽ là người trực tiếp lên ý tưởng concept, điều phối tổ chức chỉn chu, giám sát nhận diện thương hiệu và bảo đảm chất lượng hình ảnh truyền thông lan tỏa rộng khắp.
              </p>
            </div>
          </div>
        </div>

        {/* Projects and Partnership block */}
        <div className="mt-8">
          <p className="text-[13px] font-bold tracking-[0.08em] uppercase text-[var(--brass)] mb-3">
            Hợp tác chiến lược &amp; Dòng sản phẩm
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Wide card */}
            <figure className="md:col-span-2 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/partnership.jpeg"
                alt="Lễ ký kết hợp tác phát triển tổ hợp khách sạn Eco Central Park và Harmony Living Suite"
                width={700}
                height={466}
                className="w-full aspect-[3/2] object-cover block h-full"
              />
              <figcaption className="p-6 self-center">
                <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-bold block mb-1.5">
                  Đối tác &amp; Sự kiện
                </span>
                <h3 className="text-lg font-bold text-[var(--ink)]">
                  Lễ ký kết hợp tác chiến lược cùng các Chủ đầu tư
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  Đại diện Smartland phối hợp chặt chẽ với Chủ đầu tư và các đối tác, chuẩn bị chu đáo khâu tổ chức, ấn phẩm và ghi lại các dấu mốc hợp tác quan trọng.
                </p>
              </figcaption>
            </figure>

            {/* Product card 1 */}
            <figure className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/resort.jpeg"
                alt="Toàn cảnh khu biệt thự nghỉ dưỡng ven biển"
                width={600}
                height={450}
                className="w-full aspect-[4/3] object-cover block"
              />
              <figcaption className="p-5">
                <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-bold block mb-1">
                  Dòng sản phẩm
                </span>
                <h3 className="text-lg font-bold text-[var(--ink)]">
                  Dự án nghỉ dưỡng cao cấp
                </h3>
                <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                  Bộ sưu tập biệt thự biển, căn hộ nghỉ dưỡng được bảo chứng bởi các thương hiệu khách sạn hàng đầu thế giới.
                </p>
              </figcaption>
            </figure>

            {/* Product card 2 */}
            <figure className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/urban.jpeg"
                alt="Cụm tháp căn hộ cao tầng ven sông"
                width={600}
                height={450}
                className="w-full aspect-[4/3] object-cover block"
              />
              <figcaption className="p-5">
                <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-bold block mb-1">
                  Dòng sản phẩm
                </span>
                <h3 className="text-lg font-bold text-[var(--ink)]">
                  Dự án đại đô thị hiện đại
                </h3>
                <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                  Các dự án đại đô thị có vị trí đắc địa, pháp lý hoàn chỉnh, tiện ích đồng bộ và giá trị sinh lời bền vững.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Main Content & Aside: CHI TIẾT CÔNG VIỆC */}
      <div
        id="chi-tiet-cong-viec"
        className="max-w-[1140px] mx-auto px-4 sm:px-6 py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-12 w-full scroll-mt-16"
      >
        <div id="mo-ta" className="min-w-0 scroll-mt-20">
          {/* Header Chi tiết công việc */}
          <div className="mb-8 pb-5 border-b border-[var(--line)]">
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-[var(--brass)] block mb-1">
              Thông tin tuyển dụng chính thức · Smartland
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[var(--ink)] leading-tight">
              Chi tiết công việc
            </h2>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-sm sm:text-base text-[var(--muted)] mt-2">
              <span>Vị trí: <b className="text-[var(--ink)]">Chuyên Viên Event MKT (Hà Nội)</b></span>
              <span className="text-[var(--line)]">·</span>
              <span>Số lượng: <b className="text-[var(--ink)]">1</b></span>
              <span className="text-[var(--line)]">·</span>
              <span>Thời hạn: <b className="text-[var(--accent)] font-semibold">Không thời hạn</b></span>
            </div>
          </div>

          {/* PHẦN 1: MÔ TẢ CÔNG VIỆC */}
          <section className="mb-10">
            <div className="flex items-start sm:items-center gap-3 mb-5">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-[var(--gold-light)] text-[var(--brass)] text-xs font-bold uppercase tracking-wider border border-[var(--gold)]/30 whitespace-nowrap shrink-0 mt-0.5 sm:mt-0">
                Phần 1
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)] leading-snug">
                Mô tả công việc
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* 1 */}
              <div className="bg-[var(--surface)] border border-[var(--line)] border-l-4 border-l-[var(--gold)] rounded-xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(25,28,33,0.03)] hover:shadow-md transition-shadow">
                <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] flex items-start gap-2.5">
                  <span className="flex-none inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brass)] text-white text-xs font-bold mt-0.5">
                    1
                  </span>
                  <span>Quản lý và triển khai tổng thể hoạt động marketing khu vực</span>
                </h4>
                <ul className="diamond-list text-sm sm:text-[15px] mt-3 pl-1">
                  <li>Tiếp nhận chiến lược truyền thông từ trụ sở chính và xây dựng kế hoạch triển khai tại khu vực miền Bắc.</li>
                  <li>Quản lý tiến độ và hiệu quả triển khai các hạng mục marketing: sự kiện, truyền thông hình ảnh, POSM, hoạt động kích hoạt thương hiệu.</li>
                  <li>Phối hợp cùng các phòng ban (kinh doanh, đào tạo, truyền thông) đảm bảo hoạt động thống nhất và hiệu quả.</li>
                </ul>
              </div>

              {/* 2 */}
              <div className="bg-[var(--surface)] border border-[var(--line)] border-l-4 border-l-[var(--gold)] rounded-xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(25,28,33,0.03)] hover:shadow-md transition-shadow">
                <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] flex items-start gap-2.5">
                  <span className="flex-none inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brass)] text-white text-xs font-bold mt-0.5">
                    2
                  </span>
                  <span>Lên kế hoạch &amp; điều phối sự kiện</span>
                </h4>
                <ul className="diamond-list text-sm sm:text-[15px] mt-3 pl-1">
                  <li>Chủ động đề xuất concept, nội dung và kế hoạch tổ chức các sự kiện (Kick-off, Activation, đào tạo, site tour, v.v.) phù hợp từng dự án.</li>
                  <li>Trực tiếp giám sát toàn bộ quy trình tổ chức, từ chuẩn bị – vận hành – tổng kết, đảm bảo chuẩn mực tổ chức và chất lượng hình ảnh thương hiệu.</li>
                </ul>
              </div>

              {/* 3 */}
              <div className="bg-[var(--surface)] border border-[var(--line)] border-l-4 border-l-[var(--gold)] rounded-xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(25,28,33,0.03)] hover:shadow-md transition-shadow">
                <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] flex items-start gap-2.5">
                  <span className="flex-none inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brass)] text-white text-xs font-bold mt-0.5">
                    3
                  </span>
                  <span>Sản xuất hình ảnh &amp; tư liệu truyền thông</span>
                </h4>
                <ul className="diamond-list text-sm sm:text-[15px] mt-3 pl-1">
                  <li>Chụp ảnh, quay video và bay flycam phục vụ cho sự kiện, dự án, nhà mẫu và báo cáo tiến độ.</li>
                  <li>Phối hợp với bộ phận truyền thông trung tâm trong việc biên tập và bàn giao tư liệu để sử dụng đồng nhất trên các kênh truyền thông.</li>
                </ul>
              </div>

              {/* 4 */}
              <div className="bg-[var(--surface)] border border-[var(--line)] border-l-4 border-l-[var(--gold)] rounded-xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(25,28,33,0.03)] hover:shadow-md transition-shadow">
                <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] flex items-start gap-2.5">
                  <span className="flex-none inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brass)] text-white text-xs font-bold mt-0.5">
                    4
                  </span>
                  <span>Quản lý đội ngũ &amp; nhà cung cấp</span>
                </h4>
                <ul className="diamond-list text-sm sm:text-[15px] mt-3 pl-1">
                  <li>Phân công, hướng dẫn và kiểm soát công việc của Event Executive và cộng tác viên.</li>
                  <li>Tìm kiếm, làm việc và giám sát nhà cung cấp trong các hạng mục thi công, nhân sự sự kiện, quà tặng, hậu cần,... đảm bảo tiến độ và chi phí.</li>
                </ul>
              </div>

              {/* 5 */}
              <div className="bg-[var(--surface)] border border-[var(--line)] border-l-4 border-l-[var(--gold)] rounded-xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(25,28,33,0.03)] hover:shadow-md transition-shadow">
                <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] flex items-start gap-2.5">
                  <span className="flex-none inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brass)] text-white text-xs font-bold mt-0.5">
                    5
                  </span>
                  <span>Hỗ trợ hành chính &amp; thiết kế cơ bản</span>
                </h4>
                <ul className="diamond-list text-sm sm:text-[15px] mt-3 pl-1">
                  <li>Chuẩn bị và hoàn thiện hồ sơ, biên bản, thủ tục liên quan đến tổ chức sự kiện và marketing khu vực.</li>
                  <li>Thiết kế nhanh các ấn phẩm cơ bản (banner, poster, backdrop, bảng hiệu, thiệp mời...) khi cần gấp, đảm bảo tính thẩm mỹ và nhận diện thương hiệu.</li>
                </ul>
              </div>

              {/* 6 */}
              <div className="bg-[var(--surface)] border border-[var(--line)] border-l-4 border-l-[var(--gold)] rounded-xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(25,28,33,0.03)] hover:shadow-md transition-shadow">
                <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] flex items-start gap-2.5">
                  <span className="flex-none inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brass)] text-white text-xs font-bold mt-0.5">
                    6
                  </span>
                  <span>Đại diện khu vực &amp; phối hợp đối tác</span>
                </h4>
                <ul className="diamond-list text-sm sm:text-[15px] mt-3 pl-1">
                  <li>Là đầu mối đại diện công ty tại miền Bắc trong công tác sự kiện và marketing; trực tiếp làm việc với chủ đầu tư, đại lý, đối tác và các đơn vị phối hợp.</li>
                  <li>Đảm bảo mọi hoạt động quảng bá, sự kiện và truyền thông khu vực diễn ra thống nhất với định hướng tổng thể của công ty.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PHẦN 2: YÊU CẦU CÔNG VIỆC */}
          <section className="mb-10 pt-6 border-t border-[var(--line)]">
            <div className="flex items-start sm:items-center gap-3 mb-5">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-[var(--gold-light)] text-[var(--brass)] text-xs font-bold uppercase tracking-wider border border-[var(--gold)]/30 whitespace-nowrap shrink-0 mt-0.5 sm:mt-0">
                Phần 2
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)] leading-snug">
                Yêu cầu công việc
              </h3>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(25,28,33,0.03)]">
              <ul className="diamond-list text-sm sm:text-[15px] text-[var(--ink)] space-y-2.5">
                <li>Tốt nghiệp Cao đẳng/Đại học chuyên ngành Marketing, Truyền thông, Quản trị kinh doanh, Sự kiện hoặc các ngành liên quan.</li>
                <li>Có từ 3 năm kinh nghiệm trong lĩnh vực Marketing, Event, Activation hoặc Truyền thông; ưu tiên ứng viên từng phụ trách Marketing/Event khu vực hoặc ngành Bất động sản.</li>
                <li>Có kinh nghiệm lập kế hoạch, điều phối và triển khai sự kiện từ khâu lên ý tưởng, chuẩn bị, vận hành đến tổng kết.</li>
                <li>Có khả năng quản lý tiến độ, ngân sách, nhà cung cấp và đội ngũ trong các hoạt động Marketing/Event.</li>
                <li>Có kinh nghiệm làm việc và phối hợp với Chủ đầu tư, đối tác, agency, nhà cung cấp và các phòng ban nội bộ.</li>
                <li>Có khả năng chụp ảnh, quay video, sử dụng flycam phục vụ sự kiện và hoạt động dự án là lợi thế.</li>
                <li>Biết sử dụng các công cụ thiết kế cơ bản như Canva, Photoshop hoặc Illustrator để xử lý nhanh các ấn phẩm Marketing là lợi thế.</li>
                <li>Có tư duy hình ảnh, thẩm mỹ và nhận diện thương hiệu, đảm bảo chất lượng hình ảnh trong các hoạt động khu vực.</li>
                <li>Kỹ năng tổ chức, điều phối, giao tiếp và xử lý tình huống tốt; chủ động và chịu được áp lực tiến độ.</li>
                <li>Có khả năng làm việc độc lập và quản lý đội nhóm, sẵn sàng di chuyển và làm việc tại các tỉnh/thành khu vực miền Bắc khi cần.</li>
                <li>Tinh thần trách nhiệm cao, chủ động, linh hoạt và có khả năng đại diện công ty làm việc với đối tác tại khu vực.</li>
              </ul>
            </div>
          </section>

          {/* PHẦN 3: QUYỀN LỢI & CƠ HỘI PHÁT TRIỂN */}
          <section className="mb-10 pt-6 border-t border-[var(--line)]">
            <div className="flex items-start sm:items-center gap-3 mb-5">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-[var(--gold-light)] text-[var(--brass)] text-xs font-bold uppercase tracking-wider border border-[var(--gold)]/30 whitespace-nowrap shrink-0 mt-0.5 sm:mt-0">
                Phần 3
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)] leading-snug">
                Quyền lợi &amp; Chế độ đãi ngộ tại Smartland
              </h3>
            </div>

            <ul className="diamond-list text-sm sm:text-[15px] text-[var(--ink)] space-y-2">
              <li>Thu nhập cạnh tranh theo năng lực (Lương cứng thỏa thuận + Phụ cấp công tác + Thưởng hiệu quả sự kiện/dự án).</li>
              <li>Cơ hội trực tiếp phụ trách mảng marketing - sự kiện cho các siêu dự án bất động sản hàng đầu và làm việc với những Chủ đầu tư uy tín nhất Việt Nam.</li>
              <li>Được trao quyền chủ động, môi trường làm việc đề cao tính sáng tạo, linh hoạt và tôn trọng ý tưởng đóng góp.</li>
              <li>Được cung cấp đầy đủ trang thiết bị, ngân sách hoạt động và đội ngũ hỗ trợ (Event Executive, CTV).</li>
              <li>Cơ hội thăng tiến lên các vị trí Quản lý Marketing cấp cao tại hệ thống Smartland.</li>
              <li>Hưởng đầy đủ các chế độ BHXH, BHYT, thưởng lễ tết, teambuilding và du lịch nghỉ dưỡng hàng năm của Công ty.</li>
            </ul>
          </section>

          {/* PHẦN 4: QUY TRÌNH TUYỂN CHỌN */}
          <section className="pt-6 border-t border-[var(--line)]">
            <div className="flex items-start sm:items-center gap-3 mb-5">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-[var(--gold-light)] text-[var(--brass)] text-xs font-bold uppercase tracking-wider border border-[var(--gold)]/30 whitespace-nowrap shrink-0 mt-0.5 sm:mt-0">
                Phần 4
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)] leading-snug">
                Quy trình ứng tuyển
              </h3>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4">
              <li className="bg-[var(--surface)] border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] rounded-xl p-4 font-medium text-[15px] leading-snug shadow-sm">
                <span className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-bold mb-1.5">
                  Bước 1
                </span>
                Gửi CV &amp; Portfolio (hình ảnh/video sự kiện) qua Zalo
              </li>
              <li className="bg-[var(--surface)] border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] rounded-xl p-4 font-medium text-[15px] leading-snug shadow-sm">
                <span className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-bold mb-1.5">
                  Bước 2
                </span>
                Phỏng vấn chuyên môn &amp; trao đổi kinh nghiệm
              </li>
              <li className="bg-[var(--surface)] border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] rounded-xl p-4 font-medium text-[15px] leading-snug shadow-sm">
                <span className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-bold mb-1.5">
                  Bước 3
                </span>
                Trao đổi tình huống tổ chức sự kiện &amp; kế hoạch triển khai
              </li>
              <li className="bg-[var(--surface)] border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] rounded-xl p-4 font-medium text-[15px] leading-snug shadow-sm">
                <span className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-bold mb-1.5">
                  Bước 4
                </span>
                Thống nhất chế độ đãi ngộ &amp; tiếp nhận công việc
              </li>
            </ol>
            <p className="mt-4 text-[var(--muted)] text-sm">
              Thông tin chi tiết về các dự án phụ trách và chính sách thu nhập sẽ được trao đổi trực tiếp cùng ứng viên.
            </p>
          </section>
        </div>

        {/* Aside Sticky Card */}
        <QuickApplyCard />
      </div>

      {/* Footer (Theo chuẩn thông tin smartland.vn) */}
      <footer className="bg-[var(--surface)] text-[var(--muted)] border-t border-[var(--line)] mt-auto">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-10 text-[13px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[var(--line)]">
            {/* Col 1 */}
            <div>
              <Image
                src="/images/logo.png"
                alt="Smartland"
                width={140}
                height={38}
                className="h-8 w-auto block object-contain mb-3"
              />
              <p className="text-[var(--ink)] font-semibold text-sm leading-snug">
                CÔNG TY TNHH BẤT ĐỘNG SẢN SMARTLAND
              </p>
              <p className="mt-2 text-[var(--muted)] leading-relaxed">
                21 năm tiên phong trong tư vấn, tiếp thị và phân phối bất động sản cao cấp hàng đầu tại Việt Nam.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-2">
              <b className="text-[var(--ink)] uppercase text-xs tracking-wider block mb-1">
                Địa chỉ văn phòng
              </b>
              <p className="leading-relaxed">
                <strong className="text-[var(--ink)]">Trụ sở chính:</strong> Tầng 17, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, Bến Nghé, Quận 1, TP. Hồ Chí Minh
              </p>
              <p className="leading-relaxed">
                <strong className="text-[var(--ink)]">Chi nhánh Hà Nội:</strong> Tòa nhà Sao Mai, 19 Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội
              </p>
            </div>

            {/* Col 3: HR Contact */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/hr_phuong_avatar.jpg"
                alt="Ảnh Ms Phuong, Chuyên viên Nhân sự Smartland"
                width={60}
                height={60}
                className="w-14 h-14 rounded-full object-cover border-2 border-[var(--gold)] flex-none shadow-sm"
              />
              <div className="grid leading-snug">
                <b className="text-[15px] text-[var(--ink)]">Ms Phuong</b>
                <span className="text-[13px] text-[var(--muted)]">Chuyên viên Nhân sự Smartland</span>
                <span className="font-bold text-[var(--accent)] text-base tabular-nums mt-1">
                  0915 531 904
                </span>
                <a
                  href="https://zalo.me/0915531904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brass)] hover:underline text-xs font-semibold mt-1"
                >
                  Nhắn Zalo ứng tuyển ngay →
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
            <span>
              © 2004 - 2026 Smartland. Tất cả các quyền được bảo lưu.
            </span>
            <div className="flex items-center gap-4">
              <a href="https://smartland.vn" target="_blank" rel="noopener noreferrer" className="text-[var(--brass)] hover:underline">
                Website chính thức: smartland.vn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
