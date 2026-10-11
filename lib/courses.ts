export const courses = [{
  slug: "vibe-coding-sale-page",
  translationKey: "course",
  cover: "/images/courses/vibe-coding-sale-page-cover.webp",
  lessonCount: 2,
  lessons: [
    {
      id: "lesson-1",
      available: true,
      shareUrl: "https://fathom.video/share/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9",
      embedUrl: "https://fathom.video/embed/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9?autoplay=0",
    },
    {
      id: "lesson-2",
      available: false,
      shareUrl: "https://fathom.video/share/FU4TxVYHBFMfFAuQan4HoexVRNpzs_N",
      embedUrl: null,
    },
  ],
}] as const

export const vibeCodingCourse = courses[0]

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug)
}
