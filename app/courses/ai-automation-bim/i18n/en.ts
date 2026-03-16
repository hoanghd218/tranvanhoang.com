import type { CourseDictionary } from "./index";

const en: CourseDictionary = {
  locale: "en",

  meta: {
    title: "AI Automation for BIM — Revit API & Web Development with AI | Hoang",
    description:
      "From Revit API programming → web development → product commercialization. All powered by AI: Antigravity, Claude Code, GitHub Copilot.",
    ogTitle: "AI Automation for BIM — Revit API & Web Development with AI",
    ogLocale: "en_US",
  },

  nav: { home: "Home", course: "Course" },

  hero: {
    registerNow: "Register Now",
    sessionsUnit: "sessions",
    lessonsUnit: "lessons",
  },

  painPoints: {
    title: "Are you facing these problems?",
    items: [
      {
        pain: "Spending months just to learn a programming language",
        detail:
          "Reading docs, watching tutorials, writing buggy code... and still not building anything useful.",
      },
      {
        pain: "Repetitive tasks that you still do manually",
        detail:
          "Creating drawings, numbering sheets, modeling rebar for columns and beams — starting from scratch every project.",
      },
      {
        pain: "Want to build a Revit Add-in but don't know where to start",
        detail:
          "C# API is hard, documentation is scarce, no guidance, and self-learning wastes too much time.",
      },
      {
        pain: "Have a BIM software idea but don't know how to sell it",
        detail:
          "You've written the code — but licensing, landing pages, payments, and marketing are completely unfamiliar.",
      },
    ],
  },

  solution: {
    title: "The Solution: Let AI Do It for You",
    description:
      'Instead of spending months self-learning, you just need to <strong class="text-foreground">describe your idea in plain language</strong> — AI will write code, create interfaces, and build applications for you. This course teaches you how to <strong class="text-foreground">command AI</strong> to:',
    points: [
      "Code Revit API 10x faster with AI",
      "Automate repetitive BIM workflows",
      "Build a sales website without being a web developer",
      "From idea → product → revenue in just a few weeks",
    ],
  },

  techStack: {
    title: "Technologies Used in This Course",
    subtitle: "AI Tools + Programming + Deployment — all in one course",
    aiTools: {
      label: "AI Tools",
      tools: [
        { name: "Antigravity", desc: "AI automation for BIM — automate design workflows" },
        { name: "Claude Code", desc: "AI coding assistant — create logic, debug, refactor with AI" },
        { name: "Vibe Coding", desc: "Code in natural language — describe your idea, AI writes the code" },
      ],
    },
    devStack: {
      label: "Programming & Deployment",
      tools: [
        { name: "C#", desc: "Primary language for Revit API" },
        { name: "Node.js", desc: "Web backend & license server" },
        { name: "React", desc: "Frontend for management dashboard & landing page" },
        { name: "Vercel", desc: "Fast, free web deployment" },
      ],
    },
    payment: {
      label: "Automated Payments",
      tools: [
        { name: "SePay", desc: "VietQR payment gateway — automatic payment via webhook" },
        { name: "VietQR", desc: "QR code payments — customers scan & pay in 5 seconds" },
      ],
    },
  },

  outcomes: {
    title: "What Will You Achieve?",
    items: [
      "Master using AI to build personal websites, company sites, and license management systems",
      "Command AI tools: Antigravity, Claude Code, GitHub Copilot",
      "Program Revit API: 3D modeling, drawings, rebar, architecture",
      "Hands-on rebar automation for columns and beams",
      "Build license management web apps & sales landing pages",
      "Package and distribute professional Revit software",
      "Automate BIM workflows end-to-end with AI",
      "From developer → BIM software entrepreneur",
    ],
  },

  curriculum: {
    title: "Course Curriculum",
    lessonUnit: "lessons",
    moduleLabel: "Module",
  },

  schedule: {
    title: "Learning Format",
    items: [
      {
        title: "Video Lessons",
        description: "Detailed video lectures with unlimited replay. Follow along step by step.",
      },
      {
        title: "Live Q&A via Zoom",
        description: "2 sessions/week on Zoom. Ask questions, get code reviews, and live guidance.",
      },
    ],
  },

  pricing: {
    badge: "March Special Offer",
    features: [
      "15 live sessions",
      "68+ video lessons",
      "Zoom Q&A 2 sessions/week",
      "Complete source code & materials",
      "Post-course support",
    ],
    registerNow: "Register Now",
  },

  gifts: {
    title: "Bonus Gifts",
    items: [
      "AI Skills & Agents toolkit for Revit API and Web development",
      "Revit API utility library — ready-to-use functions",
      "Multi-version Revit Add-in project template",
      "Complete source code for all exercises",
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "I have no programming experience. Can I still take this course?",
        a: "Absolutely! The course starts with C# basics and guides you step by step. With AI tools assisting you, you'll code much faster even as a complete beginner.",
      },
      {
        q: "Who is this course for?",
        a: "BIM engineers, architects, and structural engineers who want to create their own Revit Add-ins. Anyone looking to commercialize Revit plugins. Developers who want to learn AI-powered development.",
      },
      {
        q: "What do I need to prepare?",
        a: "A computer with Revit installed (version 2020 or later), Visual Studio, and internet connection. All other software will be set up during the course.",
      },
      {
        q: "Will I be able to build sellable software after this course?",
        a: "Yes! Module 3 covers everything from A to Z: building a license system, creating a landing page, integrating payments, and marketing strategies for BIM products.",
      },
      {
        q: "What is the learning format?",
        a: "Video lessons (unlimited replay) + live Q&A via Zoom 2 sessions/week. 15 total sessions with a dedicated support group.",
      },
      {
        q: "Is there post-course support?",
        a: "Yes! You'll join a long-term support group, receive AI skills/agents toolkit and Revit API library to continue developing.",
      },
      {
        q: "Does the price include all modules?",
        a: "Yes! All 3 modules (AI Tools + Revit API + Web & Commercialization), all bonus gifts, and post-course support are included. Original price 8,000,000₫, discounted to 5,000,000₫ for March only.",
      },
    ],
  },

  registration: {
    title: "Register for the Course",
    subtitle: "Fill in the form below. We will contact you via Zalo/Facebook to confirm.",
  },

  form: {
    nameLabel: "Full Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+84 912 345 678",
    noteLabel: "Notes (optional)",
    notePlaceholder: "Which Revit version are you using? Do you have programming experience?",
    submit: "Register Now",
    submitting: "Submitting...",
    successTitle: "Registration Successful!",
    successMessage: "We will contact you within 24 hours via Zalo/Facebook to confirm.",
    contactDirect: "Contact directly",
  },

  courseInfo: {
    title: "AI Automation for BIM",
    subtitle: "Revit API & Web Development with AI",
    description:
      "From Revit API programming → web development → product commercialization. All powered by AI: Antigravity, Claude Code, GitHub Copilot.",
    sessions: 15,
    format: "Video + Live Q&A via Zoom",
    schedule: "2 sessions/week",
    originalPrice: "8,000,000₫",
    salePrice: "5,000,000₫",
    saleBadge: "37% Off — March Only",
    totalLessons: 68,
    totalDuration: "~16 hours of video",
    instructor: "Tony Hoang",
    zaloLink: "https://zalo.me/g/qncnad235",
    facebookLink: "https://www.facebook.com/bimspeedsolutions",
    contactName: "Hien",
    contactPhone: "0936340576",
  },

  modules: [
    {
      number: 1,
      title: "AI Tools for Developers",
      description: "Master Antigravity, Claude Code, GitHub Copilot — code 10x faster",
      color: "purple",
      parts: [
        {
          title: "Antigravity — AI Automation for BIM",
          lessons: 3,
          duration: "~40 min",
          topics: ["Setup Antigravity", "Automate BIM workflows", "Integrate with Revit API"],
        },
        {
          title: "Claude Code — AI Coding Assistant",
          lessons: 3,
          duration: "~45 min",
          topics: ["Setup Claude Code", "Create complex logic", "Debug & refactor with AI"],
        },
        {
          title: "GitHub Copilot in Visual Studio",
          lessons: 2,
          duration: "~30 min",
          topics: ["Install Copilot", "Real-time code suggestions", "Best practices"],
        },
        {
          title: "Vibe Coding with AI",
          lessons: 1,
          duration: "20 min",
          topics: ["Vibe coding duplicate sheet", "AI-powered coding workflow"],
        },
      ],
    },
    {
      number: 2,
      title: "Revit API Programming",
      description: "From basics to advanced — create Add-ins for all Revit versions",
      color: "coral",
      parts: [
        {
          title: "Essential C# Knowledge",
          lessons: 1,
          duration: "9 min",
          topics: ["C# fundamentals for Revit API"],
        },
        {
          title: "Build Your First Add-in",
          lessons: 7,
          duration: "55 min",
          topics: [
            "Software setup",
            "Revit Lookup",
            "HelloWorld Add-in",
            "Debugging (2 methods)",
            "GitHub",
            "Multi-version template",
            "Hot Reload",
          ],
        },
        {
          title: "Selection & Filtering",
          lessons: 8,
          duration: "63 min",
          topics: [
            "Pick object/objects/point",
            "Filter by Category/Class/Type",
            "MultiCategoryFilter",
            "BoundingBox Intersect Filter",
          ],
        },
        {
          title: "Parameters",
          lessons: 5,
          duration: "58 min",
          topics: ["Parameter theory", "Get/Set parameters", "Rename Sheet with MVVM"],
        },
        {
          title: "Editing Elements",
          lessons: 16,
          duration: "~148 min",
          topics: [
            "Move, Copy, Rotate, Mirror",
            "Create Wall/Beam/Column/Floor",
            "Grid/Level/Dimension",
            "Save data as JSON",
            "Create sheets from Excel",
          ],
        },
        {
          title: "Geometry",
          lessons: 8,
          duration: "~111 min",
          topics: [
            "Geometry overview",
            "Get Solid & Transform",
            "SolidUtils",
            "Calculate column formwork",
            "Create piles from CAD",
          ],
        },
        {
          title: "Dynamic Model Updater",
          lessons: 1,
          duration: "14 min",
          topics: ["Auto-update model on changes"],
        },
        {
          title: "External Events",
          lessons: 1,
          duration: "15 min",
          topics: ["Handle events outside Revit API context"],
        },
        {
          title: "Ribbons",
          lessons: 3,
          duration: "33 min",
          topics: ["Create ribbon", "Push button", "Split button & Pull down button"],
        },
        {
          title: "Packaging Applications",
          lessons: 2,
          duration: "21 min",
          topics: ["Multi-version Revit development", "Create installer"],
        },
        {
          title: "Advanced — Multi-version Development",
          lessons: 1,
          duration: "10 min",
          topics: ["Multi-version strategy"],
        },
        {
          title: "Advanced — Data Encryption & Security",
          lessons: 1,
          duration: "11 min",
          topics: ["Encryption & data security"],
        },
        {
          title: "Hands-on — Column Rebar",
          lessons: 4,
          duration: "80 min",
          topics: ["Build UI", "Column Geometry", "Create stirrups", "Create main rebar"],
        },
        {
          title: "Hands-on — Beam Rebar",
          lessons: 4,
          duration: "88 min",
          topics: ["Beam Geometry", "Create beam stirrups", "Create beam main rebar", "Finalize plugin"],
        },
      ],
    },
    {
      number: 3,
      title: "Web & Commercialization",
      description: "Build license management, sales landing page, product marketing",
      color: "green",
      parts: [
        {
          title: "License Management System",
          lessons: 2,
          duration: "36 min",
          topics: ["Build a license system", "Software license management"],
        },
        {
          title: "License Management Web App with AI",
          lessons: 3,
          duration: "~50 min",
          topics: ["Create web app from prompts", "License management dashboard", "API integration Revit ↔ Web"],
        },
        {
          title: "Sales Landing Page",
          lessons: 2,
          duration: "~30 min",
          topics: ["Create landing page with AI", "Copywriting for BIM tools", "Basic SEO"],
        },
        {
          title: "Automated Payment Integration with SePay",
          lessons: 3,
          duration: "~45 min",
          topics: [
            "Introduction to SePay & VietQR",
            "Create payment notification webhook",
            "Auto-activate license after payment",
          ],
        },
        {
          title: "Product Commercialization",
          lessons: 2,
          duration: "~30 min",
          topics: ["Marketing strategy", "Operations & customer support"],
        },
      ],
    },
  ],
};

export default en;
