# Phase 02 — Translation Files

**Priority**: P1 (blocker for phases 03–09)
**Status**: completed
**Effort**: ~4h
**Depends on**: Phase 01

## Context Links
- [Plan Overview](./plan.md)
- [Phase 01 — Infrastructure](./phase-01-infrastructure.md)

## Overview

Create `messages/vi.json` and `messages/en.json` containing all UI strings organized by namespace. These files are the single source of truth for all translated text. Content (MDX blog/life posts) is NOT translated.

## Namespace Structure

```
messages/
├── vi.json
└── en.json
```

Each file shares identical key structure. Split by page/feature namespace:

```json
{
  "common": { ... },        // shared across all pages
  "nav": { ... },           // header + footer navigation
  "home": { ... },          // home page sections
  "learnAi": { ... },       // /learn-ai and sub-paths
  "blog": { ... },          // /blog pages
  "about": { ... },         // /about page
  "freeGift": { ... },      // /free-gift page
  "resources": { ... },     // /tai-nguyen | /resources page
  "life": { ... },          // /life pages
  "emailCapture": { ... },  // popup + gift selector
  "seo": { ... }            // page metadata strings
}
```

## Full Message Schema

### `common` namespace
Reused across multiple pages.

```json
"common": {
  "readMore": "Xem thêm",
  "backToHome": "Trang chủ",
  "goBack": "Quay lại",
  "subscribe": "Đăng ký",
  "subscribing": "Đang gửi...",
  "subscribeSuccess": "Cảm ơn bạn! Đã đăng ký thành công.",
  "emailPlaceholder": "Nhập email của bạn",
  "sharePost": "Chia sẻ bài viết này",
  "skipToContent": "Skip to main content",
  "toggleMenu": "Toggle menu",
  "closeMenu": "Close menu",
  "noContent": "Chưa có nội dung nào",
  "noContentHint": "Hãy quay lại sau nhé!",
  "allCategories": "Tất cả"
}
```

### `nav` namespace
Header + footer nav items, CTA.

```json
"nav": {
  "about": "Về tôi",
  "learnAi": "Học AI",
  "aiForBeginners": "AI cho người mới",
  "aiForBeginnersDesc": "Bắt đầu từ con số 0",
  "aiForMarketing": "AI cho Marketing",
  "aiForMarketingDesc": "Áp dụng AI vào marketing",
  "aiForWork": "AI cho công việc",
  "aiForWorkDesc": "Tăng năng suất công việc",
  "blog": "Blog",
  "courses": "Khoá học",
  "resources": "Tài nguyên",
  "life": "Cuộc sống",
  "ctaFreeGift": "Nhận quà miễn phí",
  "footer": {
    "tagline": "Dạy AI cho người mới bắt đầu. Không cần code. Không áp lực kỹ thuật.",
    "quickLinks": "Liên kết nhanh",
    "resources": "Tài nguyên",
    "newsletter": "Nhận bài viết mới",
    "newsletterDesc": "Đăng ký nhận bài viết mới qua email.",
    "copyright": "© {year} Hoàng. Tất cả các quyền được bảo lưu.",
    "newsletterBtn": "Đăng ký"
  },
  "langSwitch": {
    "vi": "Tiếng Việt",
    "en": "English"
  }
}
```

### `home` namespace
Hero, Audience, Teaching, Trust, CTA sections.

```json
"home": {
  "hero": {
    "headline": "Hoàng chia sẻ cách dùng AI sao cho",
    "headlineHighlight": "người chưa biết gì",
    "headlineSuffix": "cũng làm được",
    "subheadline": "Không cần code. Không áp lực kỹ thuật. Chỉ giải thích từ bản chất để bạn hiểu và áp dụng được ngay.",
    "ctaPrimary": "Nhận bộ AI cho người mới",
    "ctaSecondary": "Xem lộ trình học AI",
    "aiForEveryone": "AI cho mọi người"
  },
  "audience": {
    "sectionTitle": "Tôi",
    "sectionTitleHighlight": "giúp ai?",
    "sectionDesc": "Dù bạn ở đâu, ở mức độ nào, tôi đều có lộ trình phù hợp để bạn bắt đầu với AI một cách tự tin.",
    "painLabel": "Vấn đề gặp phải",
    "benefitLabel": "Lợi ích khi học",
    "cards": [
      {
        "title": "Người chưa biết gì về AI",
        "painPoints": ["Sợ công nghệ phức tạp", "Ngại thuật ngữ chuyên môn", "Không biết bắt đầu từ đâu"],
        "benefits": ["Giải thích từ bản chất, dễ hiểu", "Không cần kiến thức trước", "Áp dụng được ngay lập tức"]
      },
      {
        "title": "Marketer & Content Creator",
        "painPoints": ["Tốn nhiều thời gian viết content", "Thiếu ý tưởng mới", "Cạnh tranh khốc liệt"],
        "benefits": ["Làm việc nhanh hơn 10x", "Có ý tưởng không ngừng", "Content chất lượng hơn"]
      },
      {
        "title": "Chủ doanh nghiệp nhỏ",
        "painPoints": ["Ngân sách hạn chế", "Thiếu nhân sự kỹ thuật", "Cần hiệu quả tức thì"],
        "benefits": ["Tối ưu chi phí với AI", "Tự làm được mọi việc", "ROI rõ ràng, đo lường được"]
      }
    ]
  },
  "teaching": {
    "sectionTitle": "Tôi",
    "sectionTitleHighlight": "dạy gì?",
    "sectionDesc": "Các lộ trình học được thiết kế practical, có thể áp dụng ngay vào công việc thực tế.",
    "viewDetails": "Xem chi tiết",
    "viewAll": "Xem tất cả lộ trình →",
    "durationLabel": "Thời gian",
    "mainContent": "Nội dung chính",
    "paths": [
      {
        "title": "AI cho người mới bắt đầu",
        "description": "Từ con số 0 đến tự tin sử dụng AI trong công việc hàng ngày",
        "modules": ["AI là gì?", "ChatGPT cơ bản", "Prompt hiệu quả", "Thực hành ứng dụng"],
        "duration": "2-4 tuần"
      },
      {
        "title": "AI cho Marketing",
        "description": "Áp dụng AI để tăng 10x hiệu quả marketing và content",
        "modules": ["AI viết content", "Email marketing", "Social media", "Quảng cáo thông minh"],
        "duration": "3-5 tuần"
      },
      {
        "title": "AI cho công việc",
        "description": "Tăng năng suất và tự động hóa công việc với AI",
        "modules": ["Automation cơ bản", "Phân tích dữ liệu", "Trợ lý AI cá nhân", "Workflow tự động"],
        "duration": "4-6 tuần"
      }
    ]
  },
  "trust": {
    "sectionTitle": "Tại sao",
    "sectionTitleHighlight": "tin tôi?",
    "sectionDesc": "Tôi không chỉ dạy lý thuyết - tôi đã áp dụng AI vào thực tế và giúp hàng ngàn người làm được điều tương tự.",
    "featuredOn": "Đã được đề cập trên / Hợp tác với",
    "stats": [
      { "value": "5+", "label": "Năm kinh nghiệm", "description": "Trong lĩnh vực AI và công nghệ" },
      { "value": "10K+", "label": "Học viên", "description": "Đã tham gia các khóa học" },
      { "value": "50+", "label": "Bài viết", "description": "Về AI cho người mới" },
      { "value": "4.9/5", "label": "Đánh giá", "description": "Từ học viên" }
    ]
  },
  "cta": {
    "headline": "Sẵn sàng để bắt đầu",
    "headlineHighlight": "hành trình AI",
    "headlineSuffix": "của bạn?",
    "subheadline": "Nhận ngay bộ quà tặng miễn phí dành cho người mới bắt đầu: checklist, prompt templates, và video hướng dẫn chi tiết.",
    "included1": "Checklist 10 bước",
    "included2": "50+ Prompt templates",
    "included3": "Video hướng dẫn",
    "ctaBtn": "Nhận quà miễn phí ngay",
    "trustSignal": "Đã có <strong>2,500+</strong> người nhận quà • Không cần thẻ tín dụng • Hủy đăng ký bất cứ lúc nào"
  }
}
```

### `learnAi` namespace

```json
"learnAi": {
  "meta": {
    "title": "Học AI | Hoàng - AI Educator",
    "description": "Các lộ trình học AI được thiết kế cho người mới. Từ cơ bản đến ứng dụng thực tế."
  },
  "hero": {
    "headline": "Lộ trình",
    "headlineHighlight": "học AI",
    "headlineSuffix": "cho mọi người",
    "subheadline": "Dù bạn ở đâu, mức độ nào, tôi đều có lộ trình phù hợp để bạn bắt đầu với AI một cách tự tin. Không cần kiến thức trước."
  },
  "stats": [
    { "value": "5000", "label": "Học viên" },
    { "value": "3", "label": "Lộ trình" },
    { "value": "21", "label": "Modules" },
    { "value": "4.9", "label": "Đánh giá" }
  ],
  "paths": {
    "title": "Chọn lộ trình phù hợp",
    "description": "Mỗi lộ trình được thiết kế cho mục tiêu và trình độ khác nhau"
  },
  "howItWorks": {
    "title": "Cách thức học",
    "description": "Quy trình đơn giản, hiệu quả",
    "steps": [
      { "title": "Chọn lộ trình", "description": "Xác định mục tiêu và chọn lộ trình phù hợp với bạn" },
      { "title": "Học theo module", "description": "Tiếp cận kiến thức từ cơ bản đến nâng cao" },
      { "title": "Thực hành", "description": "Áp dụng ngay vào công việc thực tế" },
      { "title": "Nhận certificate", "description": "Hoàn thành và nhận chứng nhận" }
    ]
  },
  "testimonials": {
    "title": "Học viên nói gì?",
    "description": "Những chia sẻ từ người đã tham gia",
    "items": [
      { "name": "Nguyễn Minh", "role": "Marketing Manager", "content": "Tưởng AI phức tạp lắm, ai ngờ học với Hoàng dễ hiểu đến vậy. Giờ tôi viết content nhanh hơn 5x." },
      { "name": "Trần Thị Hà", "role": "Founder SME", "content": "Không có nhân sự kỹ thuật, nhưng với AI tôi tự làm được mọi việc. ROI thấy rõ ràng sau 1 tháng." },
      { "name": "Lê Đức", "role": "Nhân viên văn phòng", "content": "Từ người sợ công nghệ, giờ tôi tự tin dùng AI hàng ngày. Tiết kiệm được 2-3 giờ mỗi ngày." }
    ]
  },
  "cta": {
    "headline": "Sẵn sàng",
    "headlineHighlight": "bắt đầu?",
    "subheadline": "Chọn lộ trình phù hợp và bắt đầu hành trình AI ngay hôm nay.",
    "ctaBtn": "Xem lộ trình"
  },
  "beginner": {
    "meta": { "title": "AI cho người mới bắt đầu | Hoàng", "description": "Lộ trình học AI từ con số 0. Không cần kiến thức trước, không cần code." },
    "breadcrumb": "Người mới",
    "headline": "AI cho",
    "headlineHighlight": "người mới bắt đầu",
    "subheadline": "Từ con số 0 đến tự tin sử dụng AI trong công việc hàng ngày. Không cần kiến thức trước. Không cần biết code.",
    "duration": "2-4 tuần",
    "modulesCount": "6 modules",
    "studentsCount": "5,000+ học viên",
    "whatYouLearn": "Bạn sẽ học được gì?",
    "curriculum": "Nội dung khóa học",
    "prerequisites": "Yêu cầu",
    "ctaHeadline": "Sẵn sàng bắt đầu?",
    "ctaSubheadline": "Đăng ký ngay để nhận access vào tất cả modules miễn phí.",
    "ctaRegister": "Đăng ký miễn phí",
    "ctaModule1": "Xem module 1"
  },
  "marketing": {
    "meta": { "title": "AI cho Marketing | Hoàng", "description": "Lộ trình học AI cho marketing và content creator." },
    "breadcrumb": "AI cho Marketing"
  },
  "work": {
    "meta": { "title": "AI cho công việc | Hoàng", "description": "Lộ trình học AI để tăng năng suất công việc." },
    "breadcrumb": "AI cho công việc"
  }
}
```

### `blog` namespace

```json
"blog": {
  "meta": {
    "title": "Blog | Hoàng - AI Educator",
    "description": "Chia sẻ kiến thức về AI, marketing, và trải nghiệm thực tế. Học AI từ cơ bản đến nâng cao."
  },
  "hero": {
    "headline": "Blog",
    "headlineHighlight": "AI & Marketing",
    "subheadline": "Chia sẻ kiến thức, kinh nghiệm và hướng dẫn về AI cho người mới bắt đầu. Không có thuật ngữ phức tạp, chỉ có những gì bạn thực sự cần."
  },
  "allPosts": "Tất cả",
  "totalPosts": "Hiện có {count} bài viết",
  "loadMore": "Xem thêm bài viết",
  "noPosts": "Chưa có bài viết nào",
  "noPostsHint": "Hãy quay lại sau nhé!",
  "popularTopics": "Chủ đề phổ biến",
  "newsletter": {
    "headline": "Không bỏ lỡ bài viết mới",
    "subheadline": "Đăng ký nhận bài viết mới qua email. Không spam, unsubscribe bất cứ lúc nào.",
    "btn": "Đăng ký"
  },
  "post": {
    "readingTime": "{time} đọc",
    "sharePost": "Chia sẻ bài viết này",
    "relatedPosts": "Bài viết liên quan",
    "cta": {
      "headline": "Sẵn sàng học AI?",
      "subheadline": "Nhận bộ quà tặng miễn phí và bắt đầu hành trình AI của bạn ngay hôm nay.",
      "ctaBtn": "Nhận quà miễn phí"
    },
    "notFound": "Bài viết không tồn tại"
  }
}
```

### `about` namespace

```json
"about": {
  "meta": {
    "title": "Về tôi | Hoàng - AI Educator",
    "description": "Tìm hiểu về Hoàng - người dạy AI cho người mới bắt đầu, giúp hàng nghìn người tiếp cận công nghệ một cách đơn giản."
  },
  "hero": {
    "greeting": "Xin chào, tôi là",
    "subheadline": "Tôi dành sức mình để giúp những người chưa biết gì về AI có thể bắt đầu và ứng dụng AI vào công việc, cuộc sống một cách tự tin."
  },
  "stats": [
    { "value": "10,000+", "label": "Học viên" },
    { "value": "50+", "label": "Khóa học" },
    { "value": "5 năm", "label": "Kinh nghiệm" },
    { "value": "100%", "label": "Tận tâm" }
  ],
  "story": {
    "title": "Câu chuyện của tôi",
    "p1": "Tôi bắt đầu hành trình với AI vào năm 2020, khi ChatGPT vừa ra mắt. Như nhiều người khác, tôi cũng hoang mang và không biết bắt đầu từ đâu.",
    "p2": "Sau nhiều năm học hỏi, thử nghiệm, và có những thành công (thất bại), tôi nhận ra rằng AI không phải là thứ gì đó xa vời. Nó có thể giúp mọi người tiết kiệm hàng giờ mỗi ngày, nếu biết cách sử dụng đúng.",
    "p3": "Từ đó, tôi quyết định biến những gì mình học được thành các khóa học, chia sẻ miễn phí để giúp nhiều người tiếp cận AI hơn. Không phức tạp. Không áp lực. Chỉ đơn giản và thực tế."
  },
  "values": {
    "title": "Giá trị tôi theo đuổi",
    "items": [
      { "title": "Đơn giản hóa", "desc": "Mọi thứ phức tạp đều có thể giải thích đơn giản. Tôi tin rằng ai cũng có thể học được." },
      { "title": "Học suốt đời", "desc": "Công nghệ thay đổi nhanh, nên tôi luôn học hỏi để mang đến kiến thức mới nhất." },
      { "title": "Thực tế", "desc": "Không lý thuyết suông. Mọi kiến thức đều gắn với ứng dụng thực tế ngay lập tức." },
      { "title": "Tôn trọng", "desc": "Mỗi người có nhịp độ học riêng. Tôi không vội vàng, chỉ cần bạn sẵn sàng bắt đầu." }
    ]
  },
  "info": {
    "title": "Một vài điều về tôi",
    "location": "Based in Vietnam",
    "teachingSince": "Teaching since 2020",
    "openFor": "Open for collaboration and teaching opportunities"
  },
  "cta": {
    "headline": "Cùng nhau học AI",
    "subheadline": "Sẵn sàng bắt đầu hành trình với AI? Tôi sẽ đồng hành cùng bạn.",
    "ctaLearn": "Khám phá lộ trình học",
    "ctaGift": "Nhận Free Gift"
  }
}
```

### `freeGift` namespace

```json
"freeGift": {
  "meta": {
    "title": "Free Gift | Hoàng - AI Educator",
    "description": "Nhận free gift miễn phí để bắt đầu hành trình AI của bạn ngay hôm nay."
  },
  "badge": "Free Gift",
  "headline": "Bắt đầu hành trình",
  "headlineHighlight": "AI",
  "headlineSuffix": "của bạn",
  "headlineEmphasis": "hoàn toàn miễn phí",
  "subheadline": "Nhận ngay bộ <strong>10 Prompt Templates</strong> đã được test và tối ưu để bạn có thể áp dụng ngay vào công việc hàng ngày.",
  "signupCount": "Đã có <highlight>2,847+</highlight> người đăng ký nhận",
  "benefits": {
    "title": "Tại sao bạn nên nhận Free Gift này?",
    "items": [
      { "title": "Tiết kiệm thời gian", "desc": "Không cần tự viết prompt từ đầu. Sử dụng ngay những template đã được tối ưu." },
      { "title": "Học nhanh hơn", "desc": "Mỗi template đi kèm hướng dẫn chi tiết và ví dụ cụ thể." },
      { "title": "Áp dụng ngay", "desc": "Template phù hợp với nhiều ngành nghề, từ marketing đến văn phòng." }
    ]
  },
  "included": {
    "title": "Bạn sẽ nhận được gì?",
    "items": [
      { "title": "10 Prompt Templates đã được test", "desc": "Áp dụng ngay cho công việc hàng ngày" },
      { "title": "Hướng dẫn chi tiết cách sử dụng", "desc": "Giải thích từng phần của prompt và cách tùy chỉnh" },
      { "title": "Ví dụ thực tế cho từng ngành nghề", "desc": "Marketing, Sales, HR, Admin, và nhiều lĩnh vực khác" },
      { "title": "Checklist tối ưu prompt", "desc": "Để bạn tự tạo prompt hiệu quả hơn" },
      { "title": "Cập nhật miễn phí", "desc": "Nhận thêm templates mới qua email" }
    ]
  },
  "cta": {
    "headline": "Sẵn sàng nhận Free Gift?",
    "subheadline": "Nhập email của bạn để nhận ngay 10 Prompt Templates. Không spam, không quảng cáo.",
    "emailPlaceholder": "Nhập email của bạn...",
    "ctaBtn": "Nhận ngay",
    "privacy": "Bằng việc đăng ký, bạn đồng ý với",
    "privacyLink": "Privacy Policy"
  },
  "trust": {
    "free": "Hoàn toàn miễn phí",
    "noCard": "Không cần credit card",
    "viaEmail": "Gửi qua email"
  },
  "backToLearn": "← Quay lại trang học AI"
}
```

### `resources` namespace

```json
"resources": {
  "meta": {
    "title": "Tài nguyên | Hoàng - AI Educator",
    "description": "Chia sẻ tài nguyên học AI, template, checklist, video và nhiều hơn nữa. Tất cả miễn phí cho cộng đồng."
  },
  "headline": "Tài nguyên",
  "headlineHighlight": "miễn phí",
  "subheadline": "Template, checklist, video hướng dẫn và nhiều tài nguyên khác để bạn học AI hiệu quả hơn. Tất cả đều miễn phí.",
  "allResources": "Tất cả",
  "noResources": "Chưa có tài nguyên nào",
  "noResourcesHint": "Hãy quay lại sau nhé!",
  "newsletter": {
    "headline": "Không bỏ lỡ tài nguyên mới",
    "subheadline": "Đăng ký nhận tài nguyên mới qua email. Không spam, unsubscribe bất cứ lúc nào.",
    "btn": "Đăng ký"
  }
}
```

### `life` namespace

```json
"life": {
  "meta": {
    "title": "Cuộc sống | Hoàng",
    "description": "Nhật ký cuộc sống, những khoảnh khắc và bài học từ hành trình của tôi."
  },
  "hero": {
    "subtitle": "Nhật ký cá nhân",
    "title": "Cuộc sống",
    "description": "Đây là nơi tôi chia sẻ những khoảnh khắc, suy nghĩ và bài học từ hành trình của mình. Mong rằng những câu chuyện này sẽ mang đến cho bạn một góc nhìn khác về cuộc sống."
  },
  "quote": "Cuộc sống không phải là những gì xảy ra với bạn, mà là những gì bạn làm với những gì xảy ra với bạn.",
  "quoteAuthor": "Khuyết danh",
  "noStories": "Chưa có câu chuyện nào được đăng tải.\nHãy quay lại sau nhé!",
  "footerCta": {
    "headline": "Theo dõi hành trình của tôi",
    "subheadline": "Đăng ký nhận tin để không bỏ lỡ những câu chuyện mới nhất.",
    "ctaBtn": "Đăng ký nhận tin"
  }
}
```

### `emailCapture` namespace

```json
"emailCapture": {
  "title": "Nhận quà miễn phí!",
  "description": "Điền thông tin để nhận tài nguyên AI hữu ích",
  "nameLabel": "Tên của bạn",
  "namePlaceholder": "Nguyễn Văn A",
  "emailLabel": "Email",
  "emailPlaceholder": "you@example.com",
  "required": "*",
  "submitBtn": "Nhận quà ngay",
  "submitting": "Đang xử lý...",
  "maybeLater": "Để sau",
  "giftSelector": {
    "title": "Bạn muốn nhận quà gì?",
    "description": "Chọn ít nhất 1 tài nguyên bạn muốn nhận",
    "validationError": "Vui lòng chọn ít nhất 1 tài nguyên"
  },
  "success": {
    "title": "Đã gửi thành công!",
    "message": "Kiểm tra email {email} của bạn để nhận tài nguyên.",
    "closeBtn": "Đóng"
  }
}
```

### `seo` namespace
Used only for locale-specific metadata strings.

```json
"seo": {
  "defaultTitle": "Hoàng - AI Educator | Dạy AI cho người mới bắt đầu",
  "titleTemplate": "%s | Hoàng",
  "defaultDescription": "Hoàng chia sẻ cách dùng AI sao cho người chưa biết gì cũng làm được. Không cần code. Không áp lực kỹ thuật.",
  "ogTitle": "Hoàng - AI Educator",
  "ogDescription": "Dạy AI cho người mới. Đơn giản, dễ hiểu, thực tế.",
  "twitterDescription": "Dạy AI cho người mới bắt đầu"
}
```

## English Translations (en.json)

All keys identical, values translated. Key differences:

```json
{
  "common": {
    "readMore": "Read more",
    "backToHome": "Home",
    "goBack": "Go back",
    "subscribe": "Subscribe",
    "subscribing": "Sending...",
    "subscribeSuccess": "Thank you! Successfully subscribed.",
    "emailPlaceholder": "Enter your email",
    "sharePost": "Share this post",
    "allCategories": "All"
  },
  "nav": {
    "about": "About",
    "learnAi": "Learn AI",
    "aiForBeginners": "AI for Beginners",
    "aiForBeginnersDesc": "Start from zero",
    "aiForMarketing": "AI for Marketing",
    "aiForMarketingDesc": "Apply AI to marketing",
    "aiForWork": "AI for Work",
    "aiForWorkDesc": "Boost productivity",
    "blog": "Blog",
    "courses": "Courses",
    "resources": "Resources",
    "life": "Life",
    "ctaFreeGift": "Get free gift",
    "footer": {
      "tagline": "Teaching AI to beginners. No code. No technical pressure.",
      "quickLinks": "Quick links",
      "resources": "Resources",
      "newsletter": "Get new posts",
      "newsletterDesc": "Subscribe to receive new posts via email.",
      "copyright": "© {year} Hoàng. All rights reserved.",
      "newsletterBtn": "Subscribe"
    }
  },
  "home": {
    "hero": {
      "headline": "Hoàng shares how to use AI so that",
      "headlineHighlight": "complete beginners",
      "headlineSuffix": "can do it too",
      "subheadline": "No code. No technical pressure. Just clear explanations so you understand and can apply it immediately.",
      "ctaPrimary": "Get the AI Starter Kit",
      "ctaSecondary": "View AI learning paths",
      "aiForEveryone": "AI for everyone"
    }
  },
  "about": {
    "meta": {
      "title": "About | Hoàng - AI Educator",
      "description": "Learn about Hoàng — an AI educator helping thousands of people access technology simply and confidently."
    },
    "hero": {
      "greeting": "Hi, I'm",
      "subheadline": "I dedicate myself to helping people with zero AI knowledge start using AI in their work and life with confidence."
    },
    "story": {
      "title": "My Story",
      "p1": "I started my AI journey in 2020 when ChatGPT first launched. Like many others, I was confused and didn't know where to begin.",
      "p2": "After years of learning, experimenting, and experiencing both successes and failures, I realized that AI is not some distant concept. It can help people save hours every day if you know how to use it correctly.",
      "p3": "From that point, I decided to turn what I learned into courses, sharing them freely to help more people access AI. No complexity. No pressure. Just simple and practical."
    }
  },
  "seo": {
    "defaultTitle": "Hoàng - AI Educator | Teaching AI for Beginners",
    "defaultDescription": "Hoàng shares how to use AI so that complete beginners can do it too. No code. No technical pressure.",
    "ogTitle": "Hoàng - AI Educator",
    "ogDescription": "Teaching AI for beginners. Simple, clear, practical.",
    "twitterDescription": "Teaching AI for beginners"
  }
}
```

## Files to Create

- `messages/vi.json` — complete Vietnamese messages
- `messages/en.json` — complete English messages

## Implementation Steps

1. Create `messages/` directory at project root
2. Write `messages/vi.json` with all namespaces — extract from existing component hardcoded strings
3. Write `messages/en.json` with all English translations
4. Validate JSON structure is identical between both files (same keys)
5. Verify `i18n/request.ts` from Phase 01 can load both files

## Todo

- [ ] Create `messages/vi.json` — all namespaces
- [ ] Create `messages/en.json` — all namespaces
- [ ] Validate key parity between vi.json and en.json
- [ ] Test message loading via `getMessages()` in layout

## Success Criteria

- Both JSON files are valid (no parse errors)
- All keys present in both locales
- `getMessages()` returns correct messages per locale
- No runtime errors loading messages

## Unresolved Questions

- Some pages (`ai-for-marketing`, `ai-for-work`) are nearly empty stubs — confirm if they need full content or minimal translation
- `learn-ai/[path]/[module]/page.tsx` — need to check module page content for string extraction
- Email capture `gift-selector.tsx` — need to check the gift option labels to include in `emailCapture` namespace
