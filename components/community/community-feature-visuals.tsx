import Image from "next/image"
import { Bot, FolderOpen, Gift, Hash, MessagesSquare, Trophy, User, Video } from "lucide-react"
import type { CommunityVisual } from "@/lib/freedom-builders-community-content"

/**
 * Visual panel beside each community feature block. Only the course library is a real
 * screenshot; the other panels are decorative illustrations built from the Whop spaces' names.
 */
export function CommunityFeatureVisual({ visual, english }: { visual: CommunityVisual; english: boolean }) {
  if (visual === "courses") return <div className="cm-visual cm-visual--image">
    <Image src="/images/freedombuilder-courses.png" width={640} height={640} sizes="(max-width: 860px) 100vw, 520px"
      alt={english ? "Freedom Builders AI course library" : "Thư viện khoá học AI trên Freedom Builders"} />
  </div>

  if (visual === "live") return <div className="cm-visual" aria-hidden="true">
    <div className="cm-window">
      <div className="cm-window-bar"><span className="cm-live-dot" />LIVE · Zoom workshop<span className="cm-window-time">20:00 – 22:00</span></div>
      <div className="cm-participants">
        <span className="cm-participant cm-participant--host"><Video size={26} /></span>
        {Array.from({ length: 5 }, (_, index) => <span className="cm-participant" key={index}><User size={22} /></span>)}
      </div>
      <div className="cm-window-foot"><MessagesSquare size={15} />{english ? "Live Q&A" : "Hỏi đáp trực tiếp"}</div>
    </div>
  </div>

  if (visual === "library") return <div className="cm-visual" aria-hidden="true">
    <div className="cm-window">
      <div className="cm-window-bar"><Gift size={15} />Gift Library</div>
      <ul className="cm-library">
        <li><FolderOpen size={18} />Templates<span>{english ? "Ready to copy" : "Sẵn sàng dùng"}</span></li>
        <li><FolderOpen size={18} />Content<span>{english ? "Ready to adapt" : "Sẵn sàng chỉnh sửa"}</span></li>
        <li><Bot size={18} />AI Coach<span>{english ? "Ask anytime" : "Hỏi khi cần"}</span></li>
      </ul>
    </div>
  </div>

  return <div className="cm-visual" aria-hidden="true">
    <div className="cm-window">
      <div className="cm-window-bar"><MessagesSquare size={15} />Freedom Builders</div>
      <ul className="cm-channels">
        {["open-chat", "amazon-chat", "wins", "bounties"].map(channel => <li key={channel}><Hash size={15} />{channel}</li>)}
      </ul>
      <div className="cm-members">
        <div>{Array.from({ length: 5 }, (_, index) => <span key={index}><User size={14} /></span>)}</div>
        <p><Trophy size={15} />{english ? "5,000+ members" : "5.000+ thành viên"}</p>
      </div>
    </div>
  </div>
}
