import { SqueezePage } from "@/components/squeeze-page/squeeze-page"
import { GradientText } from "@/components/custom/gradient-text"

export const metadata = {
  title: "Skill Claude AI Tạo Sách Coloring Book Bán Amazon KDP",
  description:
    "Nhận miễn phí skill Claude AI giúp bạn tạo sách coloring book chuyên nghiệp để bán trên Amazon KDP.",
  openGraph: {
    title: "Skill Claude AI Tạo Sách Coloring Book Bán Amazon KDP",
    description:
      "Nhận miễn phí skill Claude AI giúp bạn tạo sách coloring book chuyên nghiệp để bán trên Amazon KDP.",
    type: "website",
  },
}

export default function ColoringBookSkillPage() {
  return (
    <SqueezePage
      title={
        <>
          Skill Claude AI tạo sách{" "}
          <GradientText>coloring book</GradientText>
          <br />
          bán trên Amazon KDP.
        </>
      }
      video={{
        embedUrl: "https://www.youtube.com/embed/gnzpnZ6zWqk",
        title: "Hướng dẫn tạo sách coloring book bán Amazon KDP với Claude AI",
      }}
      form={{
        buttonText: "Nhận skill miễn phí",
        placeholder: "Email của bạn",
        webhookUrl:
          "https://n8n.bimspeed.net/webhook/6135553c-02ef-4ad6-b05a-c1b431c4f182",
        successMessage: "Đã gửi. Kiểm tra email của bạn nhé.",
      }}
      profile={{
        avatar: { src: "/hoang-profile.webp", alt: "Tony Hoang" },
        name: "Tony Hoang",
        tagline: "AI practitioner & content creator",
        bio: (
          <>
            Mình là Tony — mình chia sẻ cách dùng AI để tạo thu nhập online.
            Từ sách coloring book trên Amazon KDP, khoá học, đến tự động hoá
            marketing — tất cả đều bắt đầu bằng AI.
            <br /><br />
            Tham gia cộng đồng <strong>2500+ thành viên</strong> đang học AI
            miễn phí cùng mình tại FreedomBuilder.
          </>
        ),
      }}
    />
  )
}
