import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { ArrowUpRight } from "lucide-react"
import { RoboShell } from "@/components/editorial/robo-shell"
import { TaiLieuLibrary } from "@/components/tai-lieu/tai-lieu-library"
import { countGithubRepos, taiLieu } from "@/lib/data/tai-lieu"
import "./tai-lieu.css"

const ZALO_GROUP = "https://zalo.me/g/bajqpw602"

export const metadata: Metadata = {
  title: "Tài liệu & quà tặng trong video",
  description: "Toàn bộ repo GitHub, skill AI, câu lệnh mẫu, sơ đồ và app miễn phí Tony gửi trong các video Reels — gom về một trang.",
  alternates: { canonical: "https://tranvanhoang.com/tai-lieu", languages: {} },
  openGraph: {
    title: "Tài liệu & quà tặng trong video",
    description: "Repo GitHub, skill AI, câu lệnh mẫu, sơ đồ và app miễn phí từ các video của Tony — gom về một trang.",
    url: "https://tranvanhoang.com/tai-lieu",
    type: "website",
    locale: "vi_VN",
  },
}

export default async function TaiLieuPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const repoCount = countGithubRepos()
  const promptCount = taiLieu.reduce((sum, item) => sum + item.blocks.filter(block => block.type === "prompt").length, 0)

  return <RoboShell locale="vi"><div className="tl-page rl-container" lang="vi">
    <section className="tl-hero">
      <p className="tl-eyebrow">TONY HOANG / TÀI LIỆU</p>
      <h1>Quà trong video,<br /><span>gom về một chỗ.</span></h1>
      <p className="tl-lead">Mỗi video Tony hứa gửi gì — repo GitHub, skill, câu lệnh mẫu, sơ đồ, app — đều nằm ở đây. Anh chị lưu trang này lại, cần cái nào thì mở ra lấy, không phải chờ tin nhắn.</p>
      <dl className="tl-stats">
        <div><dt>Tài liệu</dt><dd>{taiLieu.length}</dd></div>
        <div><dt>Repo GitHub</dt><dd>{repoCount}</dd></div>
        <div><dt>Câu lệnh mẫu</dt><dd>{promptCount}</dd></div>
      </dl>
      <p className="tl-micro">Mới nhất ở trên cùng · Có video mới, Tony bổ sung tiếp vào trang này.</p>
    </section>

    <TaiLieuLibrary items={taiLieu} />

    <section className="tl-cta">
      <h2>Chưa thấy thứ anh chị cần?</h2>
      <p>Vào nhóm Zalo nhận quà của Tony.</p>
      <a className="rl-button" href={ZALO_GROUP} target="_blank" rel="noopener noreferrer">Vào nhóm Zalo <ArrowUpRight size={18} aria-hidden="true" /></a>
    </section>
  </div></RoboShell>
}
