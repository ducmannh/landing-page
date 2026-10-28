import Image from "next/image";
import QuickApplyCard from "@/components/QuickApplyCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[var(--surface)] border-b border-[var(--line)] shadow-[0_1px_12px_rgba(60,20,24,0.05)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <a
            className="inline-flex items-center rounded-lg leading-none"
            href="https://smartland.vn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Smartland"
          >
            <Image
              src="/images/logo.png"
              alt="Smartland, thành lập năm 2004"
              width={160}
              height={44}
              className="h-11 w-auto block object-contain"
              priority
            />
          </a>
          <a
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--accent-ink)] font-semibold rounded-md py-2 px-3.5 sm:py-2.5 sm:px-4 text-sm sm:text-[15px] hover:brightness-110 transition-all no-underline whitespace-nowrap"
            href="https://zalo.me/0967833991"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ứng tuyển qua Zalo
          </a>
        </div>
      </header>

      {/* Hero Band */}
      <div className="hero-band-bg hero-band-circles text-[var(--ink)] relative overflow-hidden border-b border-[var(--line)]">
        <section className="max-w-[1120px] mx-auto px-4 sm:px-6 py-10 sm:py-14 relative z-10">
          <div className="text-xs tracking-[0.14em] uppercase text-[var(--brass)] font-semibold">
            Tuyển dụng · Khối Kinh doanh và Dự án
          </div>
          <h1 className="text-[34px] sm:text-5xl lg:text-[64px] font-bold mt-3 text-[var(--ink)] leading-[1.15]">
            Giám đốc <span className="text-[var(--brass)]">Dự án</span>
          </h1>
          <p className="max-w-[62ch] text-[var(--muted)] text-base sm:text-lg mt-4.5 leading-relaxed">
            Dẫn dắt hoạt động kinh doanh của một hoặc nhiều dự án bất động sản, từ giai đoạn chuẩn bị, xây dựng lực lượng chuyên án đến triển khai bán hàng và tối ưu kết quả. Vị trí dành cho người có tư duy hệ thống, giỏi đào tạo đội ngũ, phối hợp đa phòng ban tốt và đủ bản lĩnh làm việc trực tiếp với Chủ đầu tư.
          </p>

          <dl className="grid grid-cols-2 lg:grid-cols-4 mt-8 border border-[var(--line)] border-t-2 border-t-[var(--gold)] rounded-lg overflow-hidden bg-[var(--surface)] shadow-[0_8px_24px_rgba(60,20,24,0.06)]">
            <div className="p-4 border-r border-b lg:border-b-0 border-[var(--line)] min-w-0">
              <dt className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold">
                Địa điểm
              </dt>
              <dd className="mt-1 font-semibold text-[var(--ink)] text-sm sm:text-base">
                Thanh Xuân, Hà Nội
              </dd>
            </div>
            <div className="p-4 border-b lg:border-b-0 lg:border-r border-[var(--line)] min-w-0">
              <dt className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold">
                Báo cáo
              </dt>
              <dd className="mt-1 font-semibold text-[var(--ink)] text-sm sm:text-base">
                Ban Giám đốc
              </dd>
            </div>
            <div className="p-4 border-r border-[var(--line)] min-w-0">
              <dt className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold">
                Kinh nghiệm
              </dt>
              <dd className="mt-1 font-semibold text-[var(--ink)] text-sm sm:text-base">
                Từ 3 năm quản lý
              </dd>
            </div>
            <div className="p-4 min-w-0">
              <dt className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold">
                Thu nhập
              </dt>
              <dd className="mt-1 font-semibold text-[var(--ink)] text-sm sm:text-base">
                Cạnh tranh, theo kết quả
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--accent-ink)] font-semibold rounded-md py-2.5 px-4 text-[15px] hover:brightness-110 transition-all no-underline"
              href="https://zalo.me/0967833991"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gửi hồ sơ qua Zalo
            </a>
            <a
              className="inline-flex items-center gap-2 bg-transparent text-[var(--ink)] border border-[var(--gold-line)] hover:border-[var(--gold)] font-semibold rounded-md py-2.5 px-4 text-[15px] transition-all no-underline"
              href="#mo-ta"
            >
              Xem mô tả công việc
            </a>
          </div>
        </section>
      </div>

      {/* Company Section */}
      <section className="bg-[var(--bg)] border-b border-[var(--line)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-11 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">
          <div>
            <div className="text-xs tracking-[0.14em] uppercase text-[var(--brass)] font-semibold">
              Về Smartland
            </div>
            <h2 className="text-2xl sm:text-[26px] font-bold text-[var(--ink)] mt-2">
              21 năm phân phối bất động sản trên cả nước
            </h2>
            <p className="mt-3 text-[var(--muted)] max-w-[60ch] leading-relaxed">
              Công ty TNHH Bất động sản Smartland là cầu nối của nhiều chủ đầu tư lớn như Masterise Homes, Vingroup, Keppel Land, Phú Long, Refico, đưa những sản phẩm có vị trí đẹp, chất lượng cao, pháp lý rõ ràng và giá tốt đến tay khách hàng. Smartland hiện có văn phòng tại TP.HCM, Hà Nội, Đà Nẵng, Nha Trang, Phú Quốc, Bắc Ninh, Hải Phòng và nhiều tỉnh thành khác.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 content-start">
            <div>
              <b className="block text-[28px] sm:text-[30px] text-[var(--brass)] tabular-nums leading-tight font-bold" style={{ fontFamily: "var(--font-display)" }}>
                21
              </b>
              <span className="text-[13px] text-[var(--muted)]">năm hoạt động</span>
            </div>
            <div>
              <b className="block text-[28px] sm:text-[30px] text-[var(--brass)] tabular-nums leading-tight font-bold" style={{ fontFamily: "var(--font-display)" }}>
                300+
              </b>
              <span className="text-[13px] text-[var(--muted)]">dự án đã triển khai</span>
            </div>
            <div>
              <b className="block text-[28px] sm:text-[30px] text-[var(--brass)] tabular-nums leading-tight font-bold" style={{ fontFamily: "var(--font-display)" }}>
                10.000+
              </b>
              <span className="text-[13px] text-[var(--muted)]">sản phẩm bán ra</span>
            </div>
            <div>
              <b className="block text-[28px] sm:text-[30px] text-[var(--brass)] tabular-nums leading-tight font-bold" style={{ fontFamily: "var(--font-display)" }}>
                3.000+
              </b>
              <span className="text-[13px] text-[var(--muted)]">nhân viên</span>
            </div>
            <div>
              <b className="block text-[28px] sm:text-[30px] text-[var(--brass)] tabular-nums leading-tight font-bold" style={{ fontFamily: "var(--font-display)" }}>
                100+
              </b>
              <span className="text-[13px] text-[var(--muted)]">đối tác</span>
            </div>
            <div>
              <b className="block text-[28px] sm:text-[30px] text-[var(--brass)] tabular-nums leading-tight font-bold" style={{ fontFamily: "var(--font-display)" }}>
                15+
              </b>
              <span className="text-[13px] text-[var(--muted)]">văn phòng trên cả nước</span>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-wrap gap-2 pt-2">
            <span className="inline-flex items-center border border-[var(--line)] rounded-full px-3 py-1.5 text-[13px] bg-[var(--surface)] text-[var(--ink)]">
              <em className="not-italic text-[var(--brass)] font-semibold mr-1.5">2025</em>
              Top 1 đại lý phân phối Essensia Sky · Phú Long
            </span>
            <span className="inline-flex items-center border border-[var(--line)] rounded-full px-3 py-1.5 text-[13px] bg-[var(--surface)] text-[var(--ink)]">
              <em className="not-italic text-[var(--brass)] font-semibold mr-1.5">2025</em>
              Top 1 dự án Eco Village Saigon River · Ecopark
            </span>
            <span className="inline-flex items-center border border-[var(--line)] rounded-full px-3 py-1.5 text-[13px] bg-[var(--surface)] text-[var(--ink)]">
              <em className="not-italic text-[var(--brass)] font-semibold mr-1.5">2025</em>
              Top 5 đại lý xuất sắc miền Nam · Masterise Homes
            </span>
            <span className="inline-flex items-center border border-[var(--line)] rounded-full px-3 py-1.5 text-[13px] bg-[var(--surface)] text-[var(--ink)]">
              <em className="not-italic text-[var(--brass)] font-semibold mr-1.5">2025</em>
              Top 2 đại lý The Filmore Đà Nẵng
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-13 pb-4">
        <div className="text-xs tracking-[0.14em] uppercase text-[var(--brass)] font-semibold">
          Con người và hoạt động
        </div>
        <h2 className="text-2xl sm:text-[26px] font-bold text-[var(--ink)] mt-2">
          Đội ngũ, đào tạo và dự án tại Smartland
        </h2>
        <p className="text-[var(--muted)] max-w-[62ch] mt-2.5">
          Những hình ảnh từ các chuyến khảo sát dự án, chương trình đào tạo chuyên sâu và hoạt động hợp tác cùng Chủ đầu tư.
        </p>

        {/* Team block */}
        <div className="mt-7">
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--muted)] mb-3">
            Đội ngũ
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-3.5">
            <figure className="relative rounded-[10px] overflow-hidden bg-[var(--line)] md:row-span-2 group">
              <Image
                src="/images/team_1.jpeg"
                alt="Đội ngũ Smartland áo đỏ chụp ảnh tập thể trước tòa tháp căn hộ"
                width={800}
                height={600}
                className="w-full h-full object-cover min-h-[260px] md:min-h-full block"
              />
              <figcaption className="absolute inset-x-0 bottom-0 pt-7 px-4 pb-3 text-white text-sm font-medium bg-gradient-to-t from-black/80 to-transparent">
                Đội ngũ chuyên án khảo sát dự án Eco Central Park
              </figcaption>
            </figure>
            <figure className="relative rounded-[10px] overflow-hidden bg-[var(--line)] aspect-[3/2] group">
              <Image
                src="/images/team_2.jpeg"
                alt="Đội ngũ đứng trên sân thượng nhìn ra hồ và khu đô thị"
                width={600}
                height={400}
                className="w-full h-full object-cover block"
              />
              <figcaption className="absolute inset-x-0 bottom-0 pt-7 px-4 pb-3 text-white text-sm font-medium bg-gradient-to-t from-black/80 to-transparent">
                Trải nghiệm thực tế sản phẩm từ trên cao
              </figcaption>
            </figure>
            <figure className="relative rounded-[10px] overflow-hidden bg-[var(--line)] aspect-[3/2] group">
              <Image
                src="/images/team_3.jpeg"
                alt="Đội ngũ ngồi trên bậc thang vườn cảnh quan, tay tạo hình trái tim"
                width={600}
                height={400}
                className="w-full h-full object-cover block"
              />
              <figcaption className="absolute inset-x-0 bottom-0 pt-7 px-4 pb-3 text-white text-sm font-medium bg-gradient-to-t from-black/80 to-transparent">
                Tinh thần gắn kết của đội ngũ
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Training block */}
        <div className="mt-7">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-7 items-center bg-[var(--surface)] border border-[var(--line)] border-l-[3px] border-l-[var(--gold)] rounded-xl p-6">
            <figure className="relative rounded-[10px] overflow-hidden bg-[var(--line)] max-w-[360px] mx-auto lg:max-w-none w-full">
              <Image
                src="/images/training.jpeg"
                alt="Poster chương trình đào tạo chuyên sâu Vinhomes Green Paradise của Smart Property"
                width={400}
                height={600}
                className="w-full aspect-[2/3] object-cover block"
              />
            </figure>
            <div>
              <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold block mb-1.5">
                Đào tạo chuyên sâu
              </span>
              <h3 className="text-xl sm:text-[22px] font-bold text-[var(--ink)]">
                Đội ngũ được đào tạo bài bản cho từng dự án
              </h3>
              <p className="text-[var(--muted)] mt-2.5 max-w-[52ch] leading-relaxed">
                Trước mỗi đợt triển khai, đội ngũ chuyên án tham gia các buổi đào tạo chuyên sâu về sản phẩm, thị trường và thông điệp tư vấn. Đây cũng là phần việc Giám đốc Dự án sẽ trực tiếp xây dựng và dẫn dắt.
              </p>
              <p className="text-[var(--muted)] mt-2 max-w-[52ch] leading-relaxed">
                Ví dụ: chương trình đào tạo dự án Vinhomes Green Paradise do Smart Property tổ chức.
              </p>
            </div>
          </div>
        </div>

        {/* Projects and Partnership block */}
        <div className="mt-7">
          <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--muted)] mb-3">
            Dự án và hợp tác
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Wide card */}
            <figure className="md:col-span-2 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] bg-[var(--surface)] border border-[var(--line)] rounded-[10px] overflow-hidden">
              <Image
                src="/images/partnership.jpeg"
                alt="Lễ ký kết hợp tác phát triển tổ hợp khách sạn Eco Central Park và Harmony Living Suite"
                width={700}
                height={466}
                className="w-full aspect-[3/2] object-cover block h-full"
              />
              <figcaption className="p-4 sm:p-6 self-center">
                <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold block mb-1.5">
                  Hoạt động
                </span>
                <h3 className="text-lg font-bold text-[var(--ink)]">
                  Lễ ký kết hợp tác Eco Central Park &amp; Harmony Living Suite
                </h3>
                <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                  Lễ ký kết hợp tác phát triển tổ hợp khách sạn giữa Eco Central Park và Modern Village Lifestyle.
                </p>
              </figcaption>
            </figure>

            {/* Product card 1 */}
            <figure className="bg-[var(--surface)] border border-[var(--line)] rounded-[10px] overflow-hidden">
              <Image
                src="/images/resort.jpeg"
                alt="Toàn cảnh khu biệt thự nghỉ dưỡng ven biển"
                width={600}
                height={450}
                className="w-full aspect-[4/3] object-cover block"
              />
              <figcaption className="p-4 sm:p-4.5">
                <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold block mb-1.5">
                  Dòng sản phẩm
                </span>
                <h3 className="text-lg font-bold text-[var(--ink)]">
                  Dự án nghỉ dưỡng
                </h3>
                <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                  Bộ sưu tập biệt thự biển được bảo chứng bởi các thương hiệu quốc tế như Marriott, Hyatt, Banyan Tree.
                </p>
              </figcaption>
            </figure>

            {/* Product card 2 */}
            <figure className="bg-[var(--surface)] border border-[var(--line)] rounded-[10px] overflow-hidden">
              <Image
                src="/images/urban.jpeg"
                alt="Cụm tháp căn hộ cao tầng ven sông Sài Gòn"
                width={600}
                height={450}
                className="w-full aspect-[4/3] object-cover block"
              />
              <figcaption className="p-4 sm:p-4.5">
                <span className="text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold block mb-1.5">
                  Dòng sản phẩm
                </span>
                <h3 className="text-lg font-bold text-[var(--ink)]">
                  Dự án đô thị
                </h3>
                <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                  Dự án có vị trí đẹp, pháp lý rõ ràng, tiện ích tốt và tiềm năng sinh lời lâu dài.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Main Content & Aside (id="mo-ta") */}
      <div
        id="mo-ta"
        className="max-w-[1120px] mx-auto px-4 sm:px-6 py-13 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-12 w-full"
      >
        <div className="min-w-0">
          {/* MỤC 01 */}
          <section className="py-7 border-t-0 pt-0">
            <div className="flex items-baseline gap-3.5 mb-3">
              <span className="text-xs font-semibold tracking-[0.1em] text-[var(--brass)] tabular-nums whitespace-nowrap">
                MỤC 01
              </span>
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Thông tin vị trí
              </h2>
            </div>
            <ul className="diamond-list text-[var(--ink)] max-w-[68ch]">
              <li><b>Chức danh:</b> Giám đốc Dự án</li>
              <li><b>Khối:</b> Kinh doanh và Dự án</li>
              <li><b>Báo cáo:</b> Ban Giám đốc</li>
              <li><b>Phạm vi quản lý:</b> đội ngũ kinh doanh chuyên án và các nguồn lực hỗ trợ liên quan</li>
              <li><b>Đối tác phối hợp:</b> Chủ đầu tư, các phòng ban nội bộ và đối tác phân phối</li>
            </ul>
          </section>

          {/* MỤC 02 */}
          <section className="py-7 border-t border-[var(--line)]">
            <div className="flex items-baseline gap-3.5 mb-3">
              <span className="text-xs font-semibold tracking-[0.1em] text-[var(--brass)] tabular-nums whitespace-nowrap">
                MỤC 02
              </span>
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Mục tiêu công việc
              </h2>
            </div>
            <p className="max-w-[65ch] text-[var(--ink)] leading-relaxed">
              Chuyển hóa định hướng kinh doanh và thông tin dự án thành kế hoạch triển khai rõ ràng; xây dựng đội ngũ chuyên án đủ năng lực; điều phối hoạt động bán hàng, marketing và vận hành; đồng thời bảo đảm tiến độ, chất lượng tư vấn và mục tiêu doanh số của dự án.
            </p>
          </section>

          {/* MỤC 03 */}
          <section className="py-7 border-t border-[var(--line)]">
            <div className="flex items-baseline gap-3.5 mb-3">
              <span className="text-xs font-semibold tracking-[0.1em] text-[var(--brass)] tabular-nums whitespace-nowrap">
                MỤC 03
              </span>
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Trách nhiệm chính
              </h2>
            </div>
            <ul className="diamond-list text-[var(--ink)] max-w-[68ch]">
              <li>Xây dựng kế hoạch triển khai dự án theo từng giai đoạn, xác định mục tiêu, nguồn lực, tiến độ và các ưu tiên kinh doanh.</li>
              <li>Làm việc với Chủ đầu tư để cập nhật chính xác thông tin sản phẩm, chính sách bán hàng, kế hoạch mở bán và các nội dung cần thiết cho hoạt động kinh doanh.</li>
              <li>Tổ chức, điều phối và chuẩn hóa tài liệu bán hàng, nội dung đào tạo và thông điệp tư vấn dành cho đội ngũ chuyên án.</li>
              <li>Đào tạo, huấn luyện, đánh giá năng lực và phát triển đội ngũ quản lý kinh doanh, chuyên viên kinh doanh tham gia dự án.</li>
              <li>Phân bổ mục tiêu, theo dõi kết quả, nhận diện điểm nghẽn và đưa ra giải pháp thúc đẩy hiệu suất bán hàng kịp thời.</li>
              <li>Phối hợp với Marketing, Vận hành, Nhân sự và các bộ phận liên quan để bảo đảm dự án được triển khai đồng bộ.</li>
              <li>Quản trị thông tin sản phẩm và nguồn hàng; hỗ trợ đội ngũ xử lý các tình huống tư vấn, đàm phán và chốt giao dịch phức tạp.</li>
              <li>Báo cáo tiến độ, kết quả kinh doanh, rủi ro và đề xuất phương án xử lý với Ban Giám đốc.</li>
              <li>Xây dựng môi trường làm việc kỷ luật, tích cực, minh bạch; duy trì tinh thần phối hợp và văn hóa hướng đến kết quả.</li>
            </ul>
          </section>

          {/* MỤC 04 */}
          <section className="py-7 border-t border-[var(--line)]">
            <div className="flex items-baseline gap-3.5 mb-3">
              <span className="text-xs font-semibold tracking-[0.1em] text-[var(--brass)] tabular-nums whitespace-nowrap">
                MỤC 04
              </span>
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Yêu cầu ứng viên
              </h2>
            </div>
            <ul className="diamond-list text-[var(--ink)] max-w-[68ch]">
              <li>Tối thiểu 3 năm kinh nghiệm quản lý hoặc dẫn dắt kinh doanh dự án bất động sản, ưu tiên phân khúc trung và cao cấp.</li>
              <li>Có kinh nghiệm triển khai dự án từ giai đoạn chuẩn bị đến mở bán và bán hàng sau mở bán.</li>
              <li>Hiểu thị trường bất động sản, quy trình phân phối dự án, hành vi khách hàng và hoạt động vận hành đội ngũ chuyên án.</li>
              <li>Có năng lực xây dựng kế hoạch kinh doanh, quản trị mục tiêu, theo dõi dữ liệu và ra quyết định dựa trên kết quả thực tế.</li>
              <li>Kỹ năng thuyết trình và đào tạo tốt; có khả năng xây dựng hoặc chuẩn hóa tài liệu bằng PowerPoint.</li>
              <li>Có khả năng truyền cảm hứng, thúc đẩy đội ngũ và xử lý tình huống dưới áp lực cao.</li>
              <li>Giao tiếp, đàm phán và phối hợp đa phòng ban hiệu quả; chủ động, quyết liệt, có tinh thần chịu trách nhiệm.</li>
              <li>Sẵn sàng di chuyển hoặc công tác theo yêu cầu triển khai dự án.</li>
            </ul>
          </section>

          {/* MỤC 05 */}
          <section className="py-7 border-t border-[var(--line)]">
            <div className="flex items-baseline gap-3.5 mb-3">
              <span className="text-xs font-semibold tracking-[0.1em] text-[var(--brass)] tabular-nums whitespace-nowrap">
                MỤC 05
              </span>
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Tiêu chí thành công
              </h2>
            </div>
            <ul className="diamond-list text-[var(--ink)] max-w-[68ch]">
              <li>Hoàn thành mục tiêu kinh doanh và các mốc triển khai đã được thống nhất.</li>
              <li>Đội ngũ chuyên án nắm vững sản phẩm, tư vấn nhất quán và đáp ứng yêu cầu năng lực của dự án.</li>
              <li>Thông tin, tài liệu và hoạt động phối hợp được triển khai chính xác, đúng tiến độ.</li>
              <li>Các vấn đề phát sinh được nhận diện sớm, xử lý chủ động và báo cáo minh bạch.</li>
              <li>Duy trì được hiệu suất, kỷ luật và tinh thần chiến đấu của đội ngũ trong suốt vòng đời dự án.</li>
            </ul>
          </section>

          {/* MỤC 06 */}
          <section className="py-7 border-t border-[var(--line)]">
            <div className="flex items-baseline gap-3.5 mb-3">
              <span className="text-xs font-semibold tracking-[0.1em] text-[var(--brass)] tabular-nums whitespace-nowrap">
                MỤC 06
              </span>
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Quyền lợi và cơ hội
              </h2>
            </div>
            <ul className="diamond-list text-[var(--ink)] max-w-[68ch]">
              <li>Thu nhập cạnh tranh theo năng lực và kết quả kinh doanh, trao đổi cụ thể trong quá trình tuyển dụng.</li>
              <li>Cơ hội trực tiếp dẫn dắt các dự án quy mô lớn và làm việc với những Chủ đầu tư uy tín.</li>
              <li>Được trao quyền trong phạm vi phụ trách, có đội ngũ và các phòng ban chuyên môn phối hợp triển khai.</li>
              <li>Môi trường đề cao hiệu quả, tốc độ, tinh thần chủ động và cơ hội phát triển lên các vị trí quản lý cao hơn.</li>
              <li>Các chế độ khác thực hiện theo chính sách của Công ty và quy định pháp luật hiện hành.</li>
            </ul>
          </section>

          {/* MỤC 07 */}
          <section className="py-7 border-t border-[var(--line)]">
            <div className="flex items-baseline gap-3.5 mb-3">
              <span className="text-xs font-semibold tracking-[0.1em] text-[var(--brass)] tabular-nums whitespace-nowrap">
                MỤC 07
              </span>
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Quy trình tuyển chọn
              </h2>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4.5">
              <li className="bg-[var(--surface)] border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] rounded-lg p-3.5 font-medium text-[15px] leading-snug">
                <span className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold mb-1.5">
                  Bước 1
                </span>
                Gửi hồ sơ qua Zalo
              </li>
              <li className="bg-[var(--surface)] border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] rounded-lg p-3.5 font-medium text-[15px] leading-snug">
                <span className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold mb-1.5">
                  Bước 2
                </span>
                Phỏng vấn chuyên môn
              </li>
              <li className="bg-[var(--surface)] border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] rounded-lg p-3.5 font-medium text-[15px] leading-snug">
                <span className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold mb-1.5">
                  Bước 3
                </span>
                Bài test tình huống và trình bày phương án triển khai dự án
              </li>
              <li className="bg-[var(--surface)] border border-[var(--line)] border-t-[3px] border-t-[var(--gold)] rounded-lg p-3.5 font-medium text-[15px] leading-snug">
                <span className="block text-[11px] tracking-[0.1em] uppercase text-[var(--brass)] font-semibold mb-1.5">
                  Bước 4
                </span>
                Trao đổi chính sách và nhận việc
              </li>
            </ol>
            <p className="mt-4 text-[var(--muted)] text-sm">
              Thông tin chi tiết về dự án phụ trách và chính sách thu nhập sẽ được trao đổi trực tiếp với ứng viên.
            </p>
          </section>
        </div>

        {/* Aside Sticky Card */}
        <QuickApplyCard />
      </div>

      {/* Footer */}
      <footer className="bg-[var(--surface)] text-[var(--muted)] border-t border-[var(--line)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-6 text-[13px] flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
          <span>
            Công ty TNHH Bất động sản Smartland ·{" "}
            <a
              href="https://smartland.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brass)] hover:underline"
            >
              smartland.vn
            </a>
          </span>

          <div className="flex items-center gap-3.5">
            <Image
              src="/images/hr_thu.jpeg"
              alt="Ảnh Ms Thu, Trưởng phòng Nhân sự Smartland"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border-2 border-[var(--gold)] flex-none"
            />
            <div className="grid leading-snug">
              <b className="text-[15px] text-[var(--ink)]">Ms Thu</b>
              <span className="text-[13px]">Trưởng phòng Nhân sự</span>
              <span className="font-semibold text-[var(--ink)] tabular-nums">
                0967 833 991 ·{" "}
                <a
                  href="https://zalo.me/0967833991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brass)] hover:underline"
                >
                  Nhắn Zalo
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
