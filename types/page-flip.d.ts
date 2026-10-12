declare module "page-flip" {
  export class PageFlip {
    constructor(element: HTMLElement, settings: Record<string, number | string | boolean>)
    loadFromHTML(pages: HTMLElement[]): void
    on(event: string, callback: (event: { data: number | string }) => void): void
    flip(page: number): void
    turnToPage(page: number): void
    getRender(): { stop(): void }
    destroy(): void
    update(): void
  }
}
