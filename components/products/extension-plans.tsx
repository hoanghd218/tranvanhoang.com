import { ArrowUpRight, QrCode } from "lucide-react"
import { getExtensionPlans, extensionCheckoutUrl, type ExtensionCode } from "@/lib/extension-checkout"
import { editorialContent } from "@/lib/editorial-content"
import { ThemeLink } from "@/components/editorial/primitives"

export function ExtensionPlans({ code }: { code: ExtensionCode }) {
  const plans = getExtensionPlans(code)
  return <section className="extension-plans" id="product-plans" aria-labelledby="plan-title"><div className="section-heading"><div><p className="eyebrow">Gói sử dụng</p><h2 id="plan-title">Chọn gói phù hợp.</h2></div><QrCode size={28} strokeWidth={1.2} aria-hidden="true" /></div>
    {plans.length ? <><div className="extension-plan-grid">{plans.map(plan => <article className="extension-plan" key={plan.skuCode}><h3>{plan.name}</h3><p className="plan-price">{plan.listPrice === 0 ? "Miễn phí" : new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(plan.listPrice)}</p><ul>{plan.durationDays && <li>Thời hạn: {plan.durationDays} ngày</li>}{plan.deviceLimit && <li>{plan.deviceLimit} thiết bị</li>}</ul><a className="theme-link theme-link--primary" href={extensionCheckoutUrl(plan.skuCode)}>{plan.listPrice === 0 ? "Đăng ký gói" : "Mua gói này"}<ArrowUpRight size={17} aria-hidden="true" /></a></article>)}</div><p className="checkout-note">Bạn sẽ được chuyển đến trang đăng ký và thanh toán của Rocket. Giá cuối cùng được xác nhận tại đó; gói trả phí hỗ trợ thanh toán QR.</p></> : <div className="plan-contact"><div><h3>Liên hệ để nhận bản cài và thông tin gói.</h3><p>Thông tin các gói sử dụng sẽ được cập nhật tại đây.</p></div><ThemeLink href={editorialContent.socialLinks[0].href} variant="primary">Trao đổi với Tony</ThemeLink></div>}
  </section>
}
