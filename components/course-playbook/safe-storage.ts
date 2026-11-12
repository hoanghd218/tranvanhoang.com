/**
 * Lưu cục bộ trên trình duyệt người đọc (localStorage). Có thể bị chặn: chế độ riêng tư, tắt dữ liệu trang, v.v.
 * Mọi hàm đều bọc try/catch. Không đọc khi render theo kiểu thường: component đọc qua useSyncExternalStore
 * (getServerSnapshot = null) nên lần render hydrate khớp HTML của server, rồi mới chuyển sang giá trị đã lưu.
 * Khoá: tony-pb-<moduleSlug>-<id> (id = id của phiếu worksheet hoặc checklist, duy nhất trong module).
 */

export function storageKey(moduleSlug: string, id: string): string {
  return `tony-pb-${moduleSlug}-${id}`
}

let usable: boolean | null = null

/** Thử ghi/xoá một khoá tạm để biết trình duyệt có cho lưu không (kết quả nhớ lại sau lần đầu). */
export function isStorageUsable(): boolean {
  if (usable !== null) return usable
  try {
    const probe = "tony-pb-probe"
    window.localStorage.setItem(probe, "1")
    window.localStorage.removeItem(probe)
    usable = true
  } catch {
    usable = false
  }
  return usable
}

export function readStored(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

/** true = đã ghi được. */
export function writeStored(key: string, value: string): boolean {
  try {
    window.localStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

export function removeStored(key: string): void {
  try {
    window.localStorage.removeItem(key)
  } catch {
    /* bị chặn: bỏ qua */
  }
}

/** Lắng nghe thay đổi từ tab khác (sự kiện "storage"). Dùng cho useSyncExternalStore. */
export function subscribeStorage(onChange: () => void): () => void {
  window.addEventListener("storage", onChange)
  return () => window.removeEventListener("storage", onChange)
}

/** Parse một mảng JSON có đúng độ dài mong đợi; sai dạng thì trả null (bỏ qua dữ liệu cũ). */
export function parseStoredArray<T>(raw: string | null, length: number, isItem: (value: unknown) => value is T): T[] | null {
  if (!raw) return null
  try {
    const data: unknown = JSON.parse(raw)
    if (Array.isArray(data) && data.length === length && data.every(isItem)) return data
  } catch {
    /* JSON hỏng: bỏ qua */
  }
  return null
}
