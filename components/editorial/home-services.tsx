import Link from "next/link"
import { ArrowUpRight, Blocks, BrainCircuit, Check, Workflow } from "lucide-react"
import { editorialContent, localizedPath } from "@/lib/editorial-content"

export function HomeServices({ locale }: { locale: string }) {
  const english = locale === "en"
  const services = [
    {
      icon: Workflow,
      title: english ? "AI automation" : "Tự động hóa với AI",
      description: english
        ? "Connect repeatable tasks into practical workflows, from prompt queues to collecting and organizing data."
        : "Kết nối những thao tác lặp lại thành workflow thực tế, từ hàng đợi prompt đến thu thập và tổ chức dữ liệu.",
      note: english ? "Workflows that fit your work" : "Workflow phù hợp với công việc",
    },
    {
      icon: Blocks,
      title: english ? "Custom tools" : "Công cụ theo nhu cầu",
      description: english
        ? "Build focused apps, browser extensions and AI skills around a clear problem and the way people actually work."
        : "Xây dựng ứng dụng, tiện ích trình duyệt và AI skills từ một bài toán cụ thể và cách con người thực sự làm việc.",
      note: english ? "A clear problem. A focused tool." : "Bài toán rõ. Công cụ gọn.",
    },
    {
      icon: BrainCircuit,
      title: english ? "Systems design" : "Thiết kế hệ thống",
      description: english
        ? "Start with the outcome, then connect people, processes, technology and AI into a system you can put into practice."
        : "Bắt đầu từ đích đến, rồi kết nối con người, quy trình, công nghệ và AI thành hệ thống có thể đưa vào thực tế.",
      note: english ? "Designed from the desired outcome" : "Thiết kế từ trạng thái mong muốn",
    },
  ]

  return <section className="rl-section rl-container rl-services" id="services" aria-labelledby="services-title">
    <div className="rl-section-head rl-centered" data-reveal>
      <div>
        <span className="rl-tag">{english ? "What I do" : "Tôi làm gì"}</span>
        <h2 id="services-title">{english ? "Build better with AI." : "Ứng dụng AI vào việc thật."}</h2>
        <p>{english ? "Practical tools and systems, built around real work." : "Công cụ và hệ thống thực tế, xây từ công việc thật."}</p>
      </div>
    </div>
    <div className="rl-grid">
      {services.map(({ icon: Icon, title, description }) => <article className="rl-service-card" key={title} data-reveal>
        <div className="rl-service-visual" aria-hidden="true"><Icon size={56} strokeWidth={1} /></div>
        <div className="rl-service-copy"><h3>{title}</h3><p>{description}</p></div>
      </article>)}
    </div>
  </section>
}

export function HomeSolutions({ locale }: { locale: string }) {
  const english = locale === "en"
  const solutions = [
    {
      tag: english ? "EXPLORE AT YOUR PACE" : "CHỦ ĐỘNG KHÁM PHÁ",
      title: english ? "Start with a ready-made tool." : "Bắt đầu với công cụ có sẵn.",
      description: english
        ? "Explore the skills, apps and practical reading resources I have built and shared."
        : "Khám phá skills, ứng dụng và tài liệu thực hành tôi đã xây dựng và chia sẻ.",
      benefits: english
        ? ["AI skills with practical workflows", "Browser tools for everyday tasks", "Books and playbooks to learn by doing"]
        : ["AI skills cùng workflow thực tế", "Tiện ích trình duyệt cho công việc hằng ngày", "Sách và sổ tay để học qua thực hành"],
      href: localizedPath("/products", locale),
      action: english ? "Explore products" : "Khám phá sản phẩm",
    },
    {
      tag: english ? "DISCUSS YOUR CONTEXT" : "TRAO ĐỔI BÀI TOÁN CỦA BẠN",
      title: english ? "Think through your next system." : "Cùng định hình hệ thống tiếp theo.",
      description: english
        ? "Have a workflow or tool in mind? Share your context so we can discuss the problem and possible directions."
        : "Bạn có ý tưởng về workflow hoặc công cụ? Chia sẻ bối cảnh để cùng trao đổi bài toán và hướng tiếp cận.",
      benefits: english
        ? ["Start with your desired outcome", "Map the people, process and tools involved", "Discuss a practical scope and next step"]
        : ["Bắt đầu từ trạng thái bạn muốn đạt tới", "Làm rõ con người, quy trình và công cụ liên quan", "Trao đổi phạm vi thực tế và bước tiếp theo"],
      href: editorialContent.contactHref,
      action: english ? "Connect on LinkedIn" : "Kết nối qua LinkedIn",
    },
  ]

  return <section className="rl-section rl-container rl-solutions" id="solutions" aria-labelledby="solutions-title">
    <div className="rl-section-head rl-centered" data-reveal>
      <div>
        <span className="rl-tag">{english ? "Choose your next step" : "Chọn bước tiếp theo"}</span>
        <h2 id="solutions-title">{english ? "Solutions for your next step." : "Giải pháp cho bước tiến tiếp theo."}</h2>
        <p>{english ? "Explore independently or start a conversation about your work." : "Tự khám phá hoặc bắt đầu một cuộc trao đổi về công việc của bạn."}</p>
      </div>
    </div>
    <div className="rl-solutions-grid">
      {solutions.map(solution => <article className="rl-solution" key={solution.href} data-reveal>
        <span className="rl-tag">{solution.tag}</span>
        <h3>{solution.title}</h3><p>{solution.description}</p>
        <ul>{solution.benefits.map(benefit => <li key={benefit}><Check size={16} aria-hidden="true" />{benefit}</li>)}</ul>
        <Link className="rl-button" href={solution.href}>{solution.action}<ArrowUpRight size={17} aria-hidden="true" /></Link>
      </article>)}
    </div>
  </section>
}
