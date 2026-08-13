/**
 * Success View Component
 *
 * Displays after successful form submission with gift download/info.
 */

'use client';

import * as React from 'react';
import { Download, Check, Bot, Code, Sparkles, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GiftOption } from '@/types/email-popup';

interface SuccessViewProps {
  giftSelections: GiftOption[];
  email: string;
  onClose: () => void;
}

/** Benefit list — one Lucide check per row, never a bullet glyph or emoji. */
function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[length:var(--size-body-s)] text-text-primary">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <Check size={20} strokeWidth={1.75} className="mt-px shrink-0 text-rocket" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Quiet note block — inset surface, hairline, no colour. */
function NoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-hairline bg-surface-inset p-[var(--space-4)]">
      <p className="text-[length:var(--size-body-s)] text-text-secondary">{children}</p>
    </div>
  );
}

const giftContent: Record<
  GiftOption,
  {
    title: string;
    description: string;
    icon: React.ElementType;
    content: React.ReactNode;
  }
> = {
  [GiftOption.AI_AGENTS_MARKETING]: {
    title: 'Danh sách AI Agents Marketing',
    description: 'Tài liệu đã được gửi đến email của bạn!',
    icon: Bot,
    content: (
      <div className="space-y-4">
        <p className="text-text-secondary">Trong danh sách này, bạn sẽ tìm thấy:</p>
        <BenefitList
          items={[
            '20+ AI agents cho marketing automation',
            'Hướng dẫn cài đặt và sử dụng chi tiết',
            'Prompts mẫu cho từng use case',
            'Checklist đánh giá hiệu quả',
          ]}
        />
        <NoteBlock>
          <strong className="text-text-primary">Lưu ý:</strong> Nếu không thấy email trong
          inbox, vui lòng kiểm tra thư mục spam.
        </NoteBlock>
      </div>
    ),
  },
  [GiftOption.REVIT_API_TEMPLATE]: {
    title: 'Template Revit API',
    description: 'Code mẫu đã sẵn sàng để tải!',
    icon: Code,
    content: (
      <div className="space-y-4">
        <p className="text-text-secondary">Template bao gồm:</p>
        <BenefitList
          items={[
            'C# project template cho Revit API',
            '10+ code samples thường dùng',
            'Documentation chi tiết bằng tiếng Việt',
            'Video hướng dẫn cài đặt',
          ]}
        />
        <Button className="w-full" onClick={() => window.open('#', '_blank')}>
          <Download size={16} strokeWidth={1.75} />
          Tải Template (ZIP)
        </Button>
      </div>
    ),
  },
  [GiftOption.VIBE_CODING_TEMPLATE]: {
    title: 'Template Vibe Coding',
    description: 'Prompts và workflow đã được gửi!',
    icon: Sparkles,
    content: (
      <div className="space-y-4">
        <p className="text-text-secondary">Trong bộ template này:</p>
        <BenefitList
          items={[
            '50+ prompts cho vibe coding hiệu quả',
            'Workflow từ ý tưởng đến sản phẩm',
            'Tips để làm việc với AI hiệu quả',
            'Danh sách công cụ recommend',
          ]}
        />
        <NoteBlock>
          <Mail size={16} strokeWidth={1.75} className="mr-1 inline align-[-2px]" />
          Check email của bạn để nhận đầy đủ tài liệu!
        </NoteBlock>
      </div>
    ),
  },
};

export function SuccessView({ giftSelections, email, onClose }: SuccessViewProps) {
  return (
    <div className="space-y-[var(--space-5)] py-[var(--space-4)]">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-surface-inset">
          <Check size={24} strokeWidth={1.75} className="text-status-positive" />
        </div>
        <h3 className="mt-[var(--space-4)] text-[length:var(--size-h4)] font-semibold text-text-primary">
          Đăng ký thành công.
        </h3>
        <p className="mt-1 text-[length:var(--size-body-s)] text-text-secondary">
          Cảm ơn bạn, {email}.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-[length:var(--size-body-s)] font-medium text-text-primary">
          Bạn đã chọn {giftSelections.length} món quà:
        </p>
        {giftSelections.map((giftId) => {
          const gift = giftContent[giftId];
          const Icon = gift.icon;
          return (
            <div
              key={giftId}
              className="rounded-[var(--radius-md)] border border-hairline bg-surface-card p-[var(--space-4)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-surface-inset">
                  <Icon size={20} strokeWidth={1.75} className="text-rocket" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">{gift.title}</h4>
                  <p className="text-[length:var(--size-body-s)] text-text-secondary">
                    {gift.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <NoteBlock>
        <Mail size={16} strokeWidth={1.75} className="mr-1 inline align-[-2px]" />
        Tất cả tài liệu sẽ được gửi đến email của bạn trong vòng 24h.
      </NoteBlock>

      <Button variant="outline" className="w-full" onClick={onClose}>
        Đóng
      </Button>
    </div>
  );
}
