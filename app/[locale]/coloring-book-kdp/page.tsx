import { SqueezePage } from "@/components/squeeze-page/squeeze-page"
import { RoboShell } from "@/components/editorial/robo-shell"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return {
    title: locale === "en" ? "Coloring Book AI Skill" : "Skill AI tạo sách tô màu",
    description: locale === "en" ? "Get the free Claude AI skill for creating coloring books for Amazon KDP." : "Nhận skill Claude AI miễn phí để tạo sách tô màu cho Amazon KDP.",
  }
}

export default async function ColoringBookSkillPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const en = locale === "en"
  return <RoboShell locale={locale}>
    <SqueezePage className="rl-skill-page" bgColor="#080808"
      title={<>{en ? "Create coloring books." : "Tạo sách tô màu."}<br /><span className="rl-orange">{en ? "Powered by Claude AI." : "Cùng Claude AI."}</span></>}
      video={{ embedUrl: "https://www.youtube.com/embed/gnzpnZ6zWqk", title: en ? "Coloring book tutorial with Claude AI (Vietnamese)" : "Hướng dẫn tạo sách tô màu cùng Claude AI" }}
      form={{
        buttonText: en ? "Get the free skill" : "Nhận skill miễn phí",
        placeholder: en ? "Your email address" : "Email của bạn",
        webhookUrl: "https://n8n.bimspeed.net/webhook/6135553c-02ef-4ad6-b05a-c1b431c4f182",
        successMessage: en ? "Sent. Please check your inbox." : "Đã gửi. Kiểm tra email của bạn nhé.",
      }}
      profile={{
        avatar: { src: "/hoang-profile.webp", alt: "Tony Hoang" }, name: "Tony Hoang",
        tagline: "AI practitioner & content creator",
        bio: en ? "I share practical ways to use AI for publishing, creating and automating everyday work. This tutorial is presented in Vietnamese." : "Tôi chia sẻ cách ứng dụng AI vào xuất bản sách, sáng tạo và tự động hoá công việc mỗi ngày. Video hướng dẫn bằng tiếng Việt.",
      }}
    />
  </RoboShell>
}
