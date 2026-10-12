// Public contact and documentation paths shared by KDSPY AI pages.
export const kdspySupportContact = "mailto:hoanghd218@gmail.com"

export function kdspyLocalizedPath(path: string, locale: string) {
  return locale === "vi" ? `/vi${path}` : path
}
