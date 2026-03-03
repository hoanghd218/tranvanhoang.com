export type CurriculumPart = {
  title: string;
  lessons: number;
  duration: string;
  topics: string[];
};

export type CourseModule = {
  number: number;
  title: string;
  description: string;
  color: string; // Tailwind color prefix: "coral", "blue", "green"
  parts: CurriculumPart[];
};

export const modules: CourseModule[] = [
  {
    number: 1,
    title: "AI Tools cho Developer",
    description: "Làm chủ Antigravity, Claude Code, GitHub Copilot — code nhanh gấp 10x",
    color: "purple",
    parts: [
      {
        title: "Antigravity — AI Automation cho BIM",
        lessons: 3,
        duration: "~40 phút",
        topics: ["Setup Antigravity", "Tự động hoá BIM workflow", "Kết hợp Revit API"],
      },
      {
        title: "Claude Code — AI Coding Assistant",
        lessons: 3,
        duration: "~45 phút",
        topics: ["Setup Claude Code", "Tạo logic phức tạp", "Debug & refactor với AI"],
      },
      {
        title: "GitHub Copilot trong Visual Studio",
        lessons: 2,
        duration: "~30 phút",
        topics: ["Cài đặt Copilot", "Gợi ý code real-time", "Best practices"],
      },
      {
        title: "Vibe Coding với AI",
        lessons: 1,
        duration: "20 phút",
        topics: ["Vibe coding duplicate sheet", "Workflow code bằng AI"],
      },
    ],
  },
  {
    number: 2,
    title: "Lập trình Revit API",
    description: "Từ cơ bản đến nâng cao — tạo Add-in cho mọi version Revit",
    color: "coral",
    parts: [
      {
        title: "Kiến thức C# cần thiết",
        lessons: 1,
        duration: "9 phút",
        topics: ["C# fundamentals cho Revit API"],
      },
      {
        title: "Bắt đầu tạo Add-in đầu tiên",
        lessons: 7,
        duration: "55 phút",
        topics: [
          "Cài đặt phần mềm",
          "Revit Lookup",
          "HelloWorld Add-in",
          "Debug (2 cách)",
          "GitHub",
          "Template multi-version",
          "Hot Reload",
        ],
      },
      {
        title: "Selection & Filtering",
        lessons: 8,
        duration: "63 phút",
        topics: [
          "Pick object/objects/point",
          "Filter by Category/Class/Type",
          "MultiCategoryFilter",
          "BoundingBox Intersect Filter",
        ],
      },
      {
        title: "Parameter",
        lessons: 5,
        duration: "58 phút",
        topics: ["Lý thuyết parameter", "Get/Set parameter", "Rename Sheet với MVVM"],
      },
      {
        title: "Editting Elements",
        lessons: 16,
        duration: "~148 phút",
        topics: [
          "Move, Copy, Rotate, Mirror",
          "Tạo Wall/Beam/Column/Floor",
          "Grid/Level/Dimension",
          "Lưu data JSON",
          "Tạo sheets từ Excel",
        ],
      },
      {
        title: "Geometry",
        lessons: 8,
        duration: "~111 phút",
        topics: [
          "Tổng quan geometry",
          "Get Solid & Transform",
          "SolidUtils",
          "Tính formwork cho cột",
          "Tạo piles từ CAD",
        ],
      },
      {
        title: "Dynamic Model Updater",
        lessons: 1,
        duration: "14 phút",
        topics: ["Tự động cập nhật model khi thay đổi"],
      },
      {
        title: "External Events",
        lessons: 1,
        duration: "15 phút",
        topics: ["Xử lý sự kiện ngoài Revit API context"],
      },
      {
        title: "Ribbons",
        lessons: 3,
        duration: "33 phút",
        topics: ["Tạo ribbon", "Push button", "Split button & Pull down button"],
      },
      {
        title: "Đóng gói ứng dụng",
        lessons: 2,
        duration: "21 phút",
        topics: ["Lập trình nhiều version Revit", "Tạo bộ cài"],
      },
      {
        title: "Nâng cao — Phát triển nhiều version",
        lessons: 1,
        duration: "10 phút",
        topics: ["Multi-version strategy"],
      },
      {
        title: "Nâng cao — Mã hóa bảo mật dữ liệu",
        lessons: 1,
        duration: "11 phút",
        topics: ["Encryption & data security"],
      },
      {
        title: "Thực chiến — Tạo rebar cho cột",
        lessons: 4,
        duration: "80 phút",
        topics: ["Dựng giao diện", "Column Geometry", "Tạo thép đai", "Tạo thép chính"],
      },
      {
        title: "Thực chiến — Tạo rebar cho dầm",
        lessons: 4,
        duration: "88 phút",
        topics: ["Beam Geometry", "Tạo thép đai dầm", "Tạo thép chính dầm", "Hoàn thiện plugin"],
      },
    ],
  },
  {
    number: 3,
    title: "Web & Thương mại hoá",
    description: "Tạo web quản lý license, landing page bán hàng, marketing sản phẩm",
    color: "green",
    parts: [
      {
        title: "License Management System",
        lessons: 2,
        duration: "36 phút",
        topics: ["Xây dựng hệ thống license", "Quản lý bản quyền phần mềm"],
      },
      {
        title: "Web quản lý License với AI",
        lessons: 3,
        duration: "~50 phút",
        topics: ["Tạo web app từ prompt", "Dashboard quản lý license", "API integration Revit ↔ Web"],
      },
      {
        title: "Landing Page bán hàng",
        lessons: 2,
        duration: "~30 phút",
        topics: ["Tạo landing page với AI", "Copywriting cho BIM tools", "SEO cơ bản"],
      },
      {
        title: "Tích hợp thanh toán tự động với SePay",
        lessons: 3,
        duration: "~45 phút",
        topics: [
          "Giới thiệu SePay & VietQR",
          "Tạo webhook nhận thông báo thanh toán",
          "Tự động kích hoạt license sau thanh toán",
        ],
      },
      {
        title: "Thương mại hoá sản phẩm",
        lessons: 2,
        duration: "~30 phút",
        topics: ["Marketing strategy", "Vận hành & hỗ trợ khách hàng"],
      },
    ],
  },
];

export const outcomes = [
  "Thành thạo sử dụng AI lập trình web cá nhân, web công ty, web quản lý license",
  "Làm chủ AI tools: Antigravity, Claude Code, GitHub Copilot",
  "Lập trình Revit API: dựng hình 3D, bản vẽ, rebar, kiến trúc",
  "Thực chiến tạo rebar automation cho cột và dầm",
  "Xây dựng web quản lý license & landing page bán hàng",
  "Đóng gói và phân phối phần mềm Revit chuyên nghiệp",
  "Tự động hoá quy trình BIM end-to-end với AI",
  "Từ developer → doanh nhân phần mềm BIM",
];

export const gifts = [
  "Bộ Skills & Agents hỗ trợ code Revit API và Web",
  "Bộ thư viện Revit API — các hàm dùng sẵn",
  "Template dự án Revit Add-in multi-version",
  "Source code tất cả bài thực hành",
];

export const courseInfo = {
  title: "AI Automation Cho BIM",
  subtitle: "Lập trình Revit API và Web với AI",
  description:
    "Từ lập trình Revit API → xây dựng web → thương mại hoá sản phẩm. Tất cả đều dùng AI: Antigravity, Claude Code, GitHub Copilot.",
  sessions: 15,
  format: "Video + Chữa bài qua Zoom",
  schedule: "2 buổi/tuần",
  originalPrice: "8,000,000₫",
  salePrice: "5,000,000₫",
  saleBadge: "Giảm 37% — Tháng 3 duy nhất",
  totalLessons: 68,
  totalDuration: "~16 giờ video",
  instructor: "Hoàng Trần",
  zaloLink: "https://zalo.me/g/qncnad235",
  facebookLink: "https://www.facebook.com/bimspeedsolutions",
  contactName: "Hiên",
  contactPhone: "0936340576",
};
