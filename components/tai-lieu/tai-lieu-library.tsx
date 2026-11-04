"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowUpRight, Check, Copy, Link2, Search } from "lucide-react"
import { taiLieuKindLabels, type TaiLieu, type TaiLieuBlock, type TaiLieuKind } from "@/lib/data/tai-lieu"

const PAGE_URL = "https://tranvanhoang.com/tai-lieu"

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null)
  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      window.setTimeout(() => setCopied(current => (current === key ? null : current)), 1600)
    } catch {
      setCopied(null)
    }
  }
  return { copied, copy }
}

function CopyButton({ id, text, label, copied, onCopy }: { id: string; text: string; label: string; copied: string | null; onCopy: (key: string, text: string) => void }) {
  const done = copied === id
  return <button type="button" className="tl-copy" onClick={() => onCopy(id, text)} aria-label={done ? "Đã chép" : label}>
    {done ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}{done ? "Đã chép" : "Chép"}
  </button>
}

function formatDate(date: string) {
  const [y, m, d] = date.split("-")
  return `${d}/${m}/${y}`
}

function searchText(item: TaiLieu) {
  const parts: string[] = [item.title, item.keyword, item.summary, ...item.kinds.map(kind => taiLieuKindLabels[kind])]
  for (const block of item.blocks) {
    if (block.type === "links") parts.push(block.title ?? "", ...block.items.flatMap(link => [link.label, link.url, link.note ?? ""]))
    if (block.type === "steps") parts.push(block.title ?? "", ...block.items)
    if (block.type === "code") parts.push(block.title ?? "", block.code)
    if (block.type === "prompt") parts.push(block.title, block.text)
    if (block.type === "branches") parts.push(block.title ?? "", ...block.groups.flatMap(group => [group.name ?? "", ...group.items.flatMap(entry => [entry.name, entry.text])]))
    if (block.type === "note") parts.push(block.text)
  }
  return normalize(parts.join(" "))
}

function normalize(text: string) {
  return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d")
}

function Block({ block, id, copied, onCopy }: { block: TaiLieuBlock; id: string; copied: string | null; onCopy: (key: string, text: string) => void }) {
  switch (block.type) {
    case "links":
      return <div className="tl-block">
        {block.title && <h4>{block.title}</h4>}
        <ul className="tl-links">{block.items.map(link => <li key={link.url + link.label}>
          <a href={link.url} target="_blank" rel="noopener noreferrer"><span>{link.label}</span><ArrowUpRight size={15} aria-hidden="true" /></a>
          {link.note && <p>{link.note}</p>}
        </li>)}</ul>
      </div>
    case "steps":
      return <div className="tl-block">
        {block.title && <h4>{block.title}</h4>}
        <ol className="tl-steps">{block.items.map(step => <li key={step}>{step}</li>)}</ol>
      </div>
    case "code":
      return <div className="tl-block">
        {block.title && <h4>{block.title}</h4>}
        <div className="tl-code"><pre><code>{block.code}</code></pre><CopyButton id={id} text={block.code} label="Chép lệnh" copied={copied} onCopy={onCopy} /></div>
      </div>
    case "prompt":
      return <details className="tl-prompt">
        <summary>{block.title}</summary>
        <div className="tl-code tl-code--prompt"><pre>{block.text}</pre><CopyButton id={id} text={block.text} label="Chép câu lệnh" copied={copied} onCopy={onCopy} /></div>
      </details>
    case "branches":
      return <div className="tl-block">
        {block.title && <h4>{block.title}</h4>}
        <div className="tl-branches">{block.groups.map((group, index) => <div key={group.name ?? index} className="tl-branch-group">
          {group.name && <p className="tl-branch-name">{group.name}</p>}
          <ul>{group.items.map(entry => <li key={entry.name}><b>{entry.name}</b><span>{entry.text}</span></li>)}</ul>
        </div>)}</div>
      </div>
    case "note":
      return <p className="tl-note">{block.text}</p>
  }
}

export function TaiLieuLibrary({ items }: { items: TaiLieu[] }) {
  const [query, setQuery] = useState("")
  const [kind, setKind] = useState<TaiLieuKind | "all">("all")
  const { copied, copy } = useCopy()
  const index = useMemo(() => items.map(item => ({ item, text: searchText(item) })), [items])
  const kinds = useMemo(() => (Object.keys(taiLieuKindLabels) as TaiLieuKind[]).filter(k => items.some(item => item.kinds.includes(k))), [items])

  const terms = normalize(query).split(/\s+/).filter(Boolean)
  const visible = index.filter(({ item, text }) => (kind === "all" || item.kinds.includes(kind)) && terms.every(term => text.includes(term))).map(({ item }) => item)

  // Opening tranvanhoang.com/tai-lieu#slug: clear filters so the target card exists, then scroll to it.
  useEffect(() => {
    const focusHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1))
      if (!slug || !items.some(item => item.slug === slug)) return
      setQuery("")
      setKind("all")
      window.requestAnimationFrame(() => document.getElementById(slug)?.scrollIntoView({ block: "start" }))
    }
    focusHash()
    window.addEventListener("hashchange", focusHash)
    return () => window.removeEventListener("hashchange", focusHash)
  }, [items])

  return <div className="tl-library">
    <div className="tl-toolbar" role="search">
      <label className="tl-search">
        <Search size={18} aria-hidden="true" />
        <span className="sr-only">Tìm tài liệu</span>
        <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Tìm theo tên video, chữ khoá, tên repo…" />
      </label>
      <div className="tl-filters" aria-label="Lọc theo loại">
        <button type="button" aria-pressed={kind === "all"} onClick={() => setKind("all")}>Tất cả <span>{items.length}</span></button>
        {kinds.map(k => <button key={k} type="button" aria-pressed={kind === k} onClick={() => setKind(k)}>
          {taiLieuKindLabels[k]} <span>{items.filter(item => item.kinds.includes(k)).length}</span>
        </button>)}
      </div>
    </div>

    <p className="tl-count" aria-live="polite">{visible.length === items.length ? `${items.length} tài liệu` : `${visible.length} / ${items.length} tài liệu`}</p>

    {visible.length === 0 && <p className="tl-empty">Không thấy tài liệu khớp. Anh chị thử chữ khác, hoặc bấm “Tất cả”.</p>}

    <div className="tl-list">
      {visible.map(item => <article key={item.slug} id={item.slug} className="tl-card">
        <header className="tl-card-head">
          <div className="tl-meta">
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            <span className="tl-keyword">Bình luận <b>{item.keyword}</b></span>
            {item.kinds.map(k => <span key={k} className="tl-kind">{taiLieuKindLabels[k]}</span>)}
          </div>
          <h2>{item.title}</h2>
          <p>{item.summary}</p>
          <button type="button" className="tl-share" onClick={() => copy(`link-${item.slug}`, `${PAGE_URL}#${item.slug}`)}>
            {copied === `link-${item.slug}` ? <Check size={14} aria-hidden="true" /> : <Link2 size={14} aria-hidden="true" />}
            {copied === `link-${item.slug}` ? "Đã chép link" : "Chép link tài liệu này"}
          </button>
        </header>
        <div className="tl-card-body">
          {item.blocks.map((block, blockIndex) => <Block key={blockIndex} block={block} id={`${item.slug}-${blockIndex}`} copied={copied} onCopy={copy} />)}
        </div>
      </article>)}
    </div>
  </div>
}
