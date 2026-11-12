import type { LeafBlock } from "@/lib/course-playbook/types"
import { CopyButton } from "./copy-button"
import { InlineText } from "./inline-text"
import { promptToPlainText, splitPrompt } from "./prompt-text"

/**
 * Khối prompt: tiêu đề, "Khi dùng", hộp tối có nút Sao chép, gợi ý, "Đầu ra cần giữ".
 * {{chỗ điền}} hiện thành vùng tô màu "[chỗ điền]"; bản sao chép là đúng chữ đang thấy.
 * `path` làm id duy nhất cho <pre> để nút có thể bôi đen khi không sao chép tự động được.
 */
export function PromptBlock({ block, path }: { block: Extract<LeafBlock, { type: "prompt" }>; path: string }) {
  const preId = `cpb-prompt-${path}`
  return (
    <div className="cpb-prompt-wrap">
      <h3 className="cpb-prompt-title">{block.title}</h3>
      {block.when && <p className="cpb-when"><b>Khi dùng</b><InlineText text={block.when} /></p>}
      <div className="cpb-prompt cpb-dark">
        <div className="cpb-prompt-bar">
          <span>Prompt</span>
          <CopyButton text={promptToPlainText(block.text)} targetId={preId} />
        </div>
        <pre id={preId} tabIndex={0}>
          {splitPrompt(block.text).map((part, i) => (part.placeholder ? <span className="cpb-ph" key={i}>{part.text}</span> : part.text))}
        </pre>
      </div>
      {block.hint && <p className="cpb-muted cpb-small"><InlineText text={block.hint} /></p>}
      {block.output && (
        <div className="cpb-out cpb-out-soft">
          <span className="cpb-lab">Đầu ra cần giữ</span>
          <p><InlineText text={block.output} /></p>
        </div>
      )}
    </div>
  )
}
