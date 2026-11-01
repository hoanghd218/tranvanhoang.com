import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Cpu, Database, FileText, Layers3, Workflow } from "lucide-react"
import { editorialContent, localizedPath } from "@/lib/editorial-content"

/** Agency card art: data and tools connected around one AI core (decorative). */
function AgencyDiagram() {
  return <div className="rl-integrations" aria-hidden="true">
    <svg className="rl-integration-links" viewBox="0 0 200 113" fill="none"><path className="rl-connection" d="M44 32 L67 42 M156 32 L133 42 M44 81 L67 71 M156 81 L133 71" /><path className="rl-connection-arrows" d="M61 36 L67 42 L59 43 M139 36 L133 42 L141 43 M59 70 L67 71 L61 77 M141 70 L133 71 L139 77" /></svg>
    <span><Database /></span><span><FileText /></span><div className="rl-core"><Cpu size={32} /></div><span><Layers3 /></span><span><Workflow /></span>
  </div>
}

/**
 * "My AI solutions": two whole-card links, mirroring the reference homepage structure —
 * join the community (/community) or work with the AI agency (contact).
 */
export function HomeAiSolutions({ locale }: { locale: string }) {
  const en = locale === "en"
  return <section className="rl-section rl-container" id="solutions" aria-labelledby="solutions-title">
    <div className="rl-section-head rl-centered" data-reveal>
      <div>
        <span className="rl-tag">{en ? "Choose your path" : "Chọn con đường của bạn"}</span>
        <h2 id="solutions-title">{en ? "My AI solutions." : "Giải pháp AI của tôi."}</h2>
      </div>
    </div>
    <div className="hl-offers">
      <Link className="rl-card hl-offer" href={localizedPath("/community", locale)}>
        <div className="hl-offer-art hl-offer-art--image">
          <Image src="/images/freedombuilder-courses.png" alt="" width={640} height={640} sizes="(max-width: 760px) 100vw, 540px" />
        </div>
        <div className="rl-card-body">
          <span className="rl-tag">FREEDOM BUILDERS COMMUNITY</span>
          <h3>{en ? "Join my AI community." : "Tham gia cộng đồng AI của tôi."}</h3>
          <p>{en
            ? "5,000+ members using AI to build sustainable businesses. Weekly live Zoom workshops, real support, no hype."
            : "5.000+ thành viên dùng AI để xây business bền vững. Workshop Zoom trực tiếp mỗi tuần, hỗ trợ thật, không hype."}</p>
          <span className="rl-button hl-offer-cta">{en ? "See what's inside" : "Xem bên trong"}<ArrowUpRight size={18} aria-hidden="true" /></span>
        </div>
      </Link>
      <a className="rl-card hl-offer" href={editorialContent.contactHref} target="_blank" rel="noopener noreferrer">
        <div className="hl-offer-art"><AgencyDiagram /></div>
        <div className="rl-card-body">
          <span className="rl-tag">AI AGENCY</span>
          <h3>{en ? "Work with my AI agency." : "Làm việc với AI Agency của tôi."}</h3>
          <p>{en
            ? "AI automation, custom tools and training designed around your business, from the first idea to a working system."
            : "Tự động hoá, công cụ AI theo nhu cầu và đào tạo cho doanh nghiệp của bạn, từ ý tưởng đầu tiên đến hệ thống chạy được."}</p>
          <span className="rl-button hl-offer-cta">{en ? "Work with us" : "Làm việc cùng chúng tôi"}<ArrowUpRight size={18} aria-hidden="true" /></span>
        </div>
      </a>
    </div>
  </section>
}
