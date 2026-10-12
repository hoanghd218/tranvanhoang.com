import { ArrowDown, Bot, Check, CircleDot, Code2, Cpu, Database, FileText, Layers3, Workflow } from "lucide-react"

export function HomeProcess({ locale }: { locale: string }) {
  const en = locale === "en"
  const steps = en ? [
    { title: "01. Build", text: "Start with one clear problem. Build a small, working version so you can see how it fits your workflow." },
    { title: "02. Integrate", text: "Connect the right tools and data. Test the complete workflow, from the first input to the final result." },
    { title: "03. Refine", text: "Learn from real use. Improve the instructions, remove friction and make the system easier to run." },
  ] : [
    { title: "01. Xây dựng", text: "Bắt đầu từ một vấn đề rõ ràng. Xây bản nhỏ chạy được để bạn thấy cách nó phù hợp với công việc." },
    { title: "02. Kết nối", text: "Kết nối công cụ và dữ liệu phù hợp. Kiểm tra toàn bộ quy trình, từ đầu vào đến kết quả cuối cùng." },
    { title: "03. Tinh chỉnh", text: "Học từ quá trình sử dụng thật. Cải thiện hướng dẫn, giảm thao tác thừa và giúp hệ thống dễ vận hành hơn." },
  ]
  return <section className="rl-section rl-container" id="process" aria-labelledby="process-title">
    <div className="rl-section-head rl-centered"><span className="rl-tag">{en ? "Our process" : "Quy trình"}</span><h2 id="process-title">{en ? "From idea to a working system." : "Từ ý tưởng đến hệ thống chạy được."}</h2><p>{en ? "Build. Integrate. Refine. One practical step at a time." : "Xây dựng. Kết nối. Tinh chỉnh. Từng bước thực tế."}</p></div>
    <div className="rl-grid">
      {steps.map((step, i) => <article className="rl-process-card" data-reveal key={step.title}>
        <h3>{step.title}</h3>
        <div className={`rl-process-art rl-process-art--${i}`} aria-hidden="true">
          {i === 0 && <div className="rl-flow-stack"><span><CircleDot size={16} />{en ? "Trigger" : "Kích hoạt"}</span><ArrowDown size={14} /><span><Bot size={16} />AI Skill</span><ArrowDown size={14} /><span><Check size={16} />{en ? "Result" : "Kết quả"}</span></div>}
          {i === 1 && <div className="rl-integrations"><svg className="rl-integration-links" viewBox="0 0 200 113" fill="none" aria-hidden="true"><path className="rl-connection" d="M44 32 L67 42 M156 32 L133 42 M44 81 L67 71 M156 81 L133 71" /><path className="rl-connection-arrows" d="M61 36 L67 42 L59 43 M139 36 L133 42 L141 43 M59 70 L67 71 L61 77 M141 70 L133 71 L139 77" /></svg><span><Database /></span><span><FileText /></span><div className="rl-core"><Cpu size={32} /></div><span><Layers3 /></span><span><Workflow /></span></div>}
          {i === 2 && <div className="rl-code"><div><Code2 size={15} /><span>workflow.ts</span></div><code><span>const</span> agent = {"{"}<br />&nbsp; goal: <em>&quot;create value&quot;</em>,<br />&nbsp; tools: [<em>&quot;AI&quot;</em>, <em>&quot;skills&quot;</em>],<br />&nbsp; feedback: <span>true</span><br />{"}"}<br /><br /><span className="rl-code-result">✓ {en ? "Ready to improve" : "Sẵn sàng cải thiện"}</span><b className="rl-code-cursor">▎</b></code></div>}
        </div>
        <p>{step.text}</p>
      </article>)}
    </div>
    <div className="rl-capabilities">{["AI Agents", "Workflow Automation", "MCP", "Content Systems", "Research Tools", "AI Skills"].map(item => <span key={item}><Check size={13} aria-hidden="true" />{item}</span>)}</div>
  </section>
}
