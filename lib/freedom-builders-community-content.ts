/**
 * Copy for the Freedom Builders community landing page (/community, /vi/community).
 *
 * Facts mirror the public Whop listing (checked 2026-11-01): 5,484 members,
 * 4.9 rating from 112 reviews, spaces Start Here · Learn (AI Coach, Beginner/Pro/Elite courses,
 * Brain Start, Brain OS) · Events (Free/Pro/Elite) · Gift Library (Content, Templates) ·
 * Earn (Freedom Rewards, Bounties) · Wins · Forums & Chat. Update `stats` when the listing changes.
 */
export const communityJoinHref = "https://whop.com/freedombuilders/?a=hoangtranai"

export type CommunityVisual = "courses" | "live" | "library" | "network"
export type CommunityBenefitIcon = "compass" | "coins" | "calendar" | "crown"

const vi = {
  meta: {
    title: "Cộng đồng Freedom Builders",
    description: "Khoá học AI, workshop Zoom hằng tuần, template và cộng đồng 5.000+ thành viên cùng xây business bền vững với AI.",
  },
  hero: {
    tag: "FREEDOM BUILDERS COMMUNITY",
    title: "Dùng AI để xây business",
    accent: "bền vững và tự do hơn.",
    description: "Khoá học, workshop trực tiếp, template và một cộng đồng luôn sẵn sàng hỗ trợ. Mọi thứ bạn cần để đưa AI vào công việc thật.",
    proof: "Tham gia cùng 5.000+ thành viên",
    note: "Tham gia miễn phí trên Whop · Nâng cấp Pro/Elite khi bạn sẵn sàng",
  },
  join: "Tham gia ngay",
  rating: "4.9/5 từ 112 đánh giá trên Whop",
  features: [
    {
      visual: "courses" as CommunityVisual, tag: "KHOÁ HỌC",
      title: "Từ người mới đến thành thạo AI, từng bước một.",
      text: "Lộ trình học có cấu trúc cho người không biết lập trình. Bắt đầu từ nền tảng, rồi đi sâu vào những công cụ AI tạo ra kết quả thật.",
      bullets: ["Khoá Beginner cho người mới bắt đầu", "Khoá Pro & Elite: n8n, video AI, ảnh AI, ecommerce…", "Brain Start & Brain OS: xây hệ thống não bộ cùng AI agent"],
    },
    {
      visual: "live" as CommunityVisual, tag: "WORKSHOP TRỰC TIẾP",
      title: "Workshop Zoom trực tiếp mỗi tuần.",
      text: "Học cùng người thật, trên bài toán thật. Mỗi buổi đi vào một chủ đề thực chiến để bạn mang về áp dụng ngay.",
      bullets: ["Workshop Zoom buổi tối với chủ đề thực chiến", "Hỏi đáp trực tiếp, gỡ vướng khi áp dụng", "Sự kiện Free, Pro, Elite và hội thảo offline"],
    },
    {
      visual: "library" as CommunityVisual, tag: "GIFT LIBRARY",
      title: "Template và tài nguyên dùng được ngay.",
      text: "Không bắt đầu từ trang trắng. Gift Library gom sẵn template và nội dung để bạn sao chép, chỉnh sửa và đưa vào công việc.",
      bullets: ["Template và nội dung sẵn sàng sử dụng", "AI Coach đồng hành trong quá trình học", "Tài nguyên mới được bổ sung thường xuyên"],
    },
    {
      visual: "network" as CommunityVisual, tag: "CỘNG ĐỒNG",
      title: "Kết nối với 5.000+ Freedom Builders.",
      text: "Gặp những người đang dùng AI để xây business bền vững: ecommerce, affiliate, Amazon, TikTok Shop và nhiều hơn nữa.",
      bullets: ["Diễn đàn và phòng chat theo chủ đề", "Chia sẻ Wins, học từ kết quả của người khác", "Mục Earn với Freedom Rewards và Bounties"],
    },
  ],
  everythingTitle: "Mọi thứ bạn cần để xây business cùng AI",
  benefits: [
    { icon: "compass" as CommunityBenefitIcon, title: "Bắt đầu đúng hướng, không bị ngợp", text: "Mục Start Here và khoá Beginner giúp bạn biết nên học gì trước, làm gì tiếp theo.", bullets: ["Mục Start Here cho thành viên mới", "Khoá Beginner từ nền tảng", "AI Coach hỗ trợ khi bạn cần"] },
    { icon: "coins" as CommunityBenefitIcon, title: "Học để tạo ra thu nhập thật", text: "Cộng đồng tập trung vào business thực tế, không chỉ lý thuyết về công cụ.", bullets: ["Ecommerce, affiliate, Amazon, TikTok Shop", "Workshop chuyên đề kiếm tiền cùng AI", "Freedom Rewards và Bounties"] },
    { icon: "calendar" as CommunityBenefitIcon, title: "Sự kiện online và offline", text: "Học trực tiếp qua Zoom và gặp gỡ cộng đồng tại các sự kiện offline.", bullets: ["Workshop Zoom buổi tối", "Sự kiện Free, Pro, Elite", "Hội thảo và gặp mặt offline"] },
    { icon: "crown" as CommunityBenefitIcon, title: "Nâng cấp khi bạn sẵn sàng", text: "Khi cần đi sâu hơn, các gói Pro và Elite mở thêm khoá học, diễn đàn và sự kiện riêng.", bullets: ["Khoá học Pro & Elite", "Diễn đàn và chat Pro/Elite", "Chương trình Brain Start & Brain OS"] },
  ],
  summary: {
    title: "Tham gia cùng 5.000+ thành viên đang học và xây dựng với AI",
    items: ["Khoá học Beginner → Elite", "Workshop Zoom hằng tuần", "Template trong Gift Library", "Cộng đồng & phần thưởng"],
  },
  final: {
    title: "Bắt đầu hành trình Freedom Builder",
    accent: "ngay hôm nay.",
    text: "Tham gia miễn phí, học theo tốc độ của bạn và kết nối với những người cùng chí hướng.",
  },
}

const en: typeof vi = {
  meta: {
    title: "Freedom Builders Community",
    description: "AI courses, weekly Zoom workshops, templates and a 5,000+ member community building sustainable businesses with AI.",
  },
  hero: {
    tag: "FREEDOM BUILDERS COMMUNITY",
    title: "Use AI to build a business",
    accent: "that gives you more freedom.",
    description: "Courses, live workshops, templates and a supportive community. Everything you need to put AI to work.",
    proof: "Join 5,000+ members",
    note: "Free to join on Whop · Upgrade to Pro/Elite when ready · Content in Vietnamese",
  },
  join: "Join now",
  rating: "4.9/5 from 112 reviews on Whop",
  features: [
    {
      visual: "courses", tag: "COURSES",
      title: "From beginner to confident AI builder, step by step.",
      text: "Structured learning paths for people without a coding background. Start with the foundations, then go deeper into the AI tools that produce real results.",
      bullets: ["Beginner courses for your first steps", "Pro & Elite courses: n8n, AI video, AI images, ecommerce…", "Brain Start & Brain OS: build a personal brain system with AI agents"],
    },
    {
      visual: "live", tag: "LIVE WORKSHOPS",
      title: "Live Zoom workshops every week.",
      text: "Learn with real people on real problems. Each session covers one practical topic you can apply right away.",
      bullets: ["Evening Zoom workshops on practical topics", "Live Q&A to get unstuck while you implement", "Free, Pro and Elite events, plus offline meetups"],
    },
    {
      visual: "library", tag: "GIFT LIBRARY",
      title: "Templates and resources you can use today.",
      text: "Never start from a blank page. The Gift Library collects templates and content you can copy, adapt and put to work.",
      bullets: ["Ready-to-use templates and content", "An AI Coach to support you while you learn", "New resources added regularly"],
    },
    {
      visual: "network", tag: "COMMUNITY",
      title: "Connect with 5,000+ Freedom Builders.",
      text: "Meet people using AI to build sustainable businesses: ecommerce, affiliate, Amazon, TikTok Shop and more.",
      bullets: ["Topic-based forums and chat rooms", "Share wins and learn from other members", "An Earn space with Freedom Rewards and Bounties"],
    },
  ],
  everythingTitle: "Everything you need to build an AI-first business",
  benefits: [
    { icon: "compass", title: "Start in the right direction", text: "Start Here and the Beginner courses show you what to learn first and what to do next.", bullets: ["Start Here space for new members", "Beginner courses from the foundations", "An AI Coach when you need help"] },
    { icon: "coins", title: "Learn to create real income", text: "The community focuses on practical business, not just tool theory.", bullets: ["Ecommerce, affiliate, Amazon, TikTok Shop", "Workshops on earning with AI", "Freedom Rewards and Bounties"] },
    { icon: "calendar", title: "Online and offline events", text: "Learn live on Zoom and meet the community at offline events.", bullets: ["Evening Zoom workshops", "Free, Pro and Elite events", "Offline conferences and meetups"] },
    { icon: "crown", title: "Upgrade when you are ready", text: "When you want to go deeper, Pro and Elite unlock more courses, forums and events.", bullets: ["Pro & Elite courses", "Pro/Elite forums and chat", "Brain Start & Brain OS programs"] },
  ],
  summary: {
    title: "Join 5,000+ members learning and building with AI",
    items: ["Beginner → Elite courses", "Weekly Zoom workshops", "Gift Library templates", "Community & rewards"],
  },
  final: {
    title: "Start your Freedom Builder journey",
    accent: "today.",
    text: "Join for free, learn at your own pace and connect with like-minded builders.",
  },
}

export function getCommunityContent(locale: string) { return locale === "en" ? en : vi }
