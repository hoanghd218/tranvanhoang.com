/**
 * Success View Component
 *
 * Displays after successful form submission with gift download/info.
 */

'use client';

import * as React from 'react';
import { Download, CheckCircle, Bot, Code, Sparkles, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GiftOption } from '@/types/email-popup';

interface SuccessViewProps {
  giftSelections: GiftOption[];
  email: string;
  onClose: () => void;
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
        <p className="text-muted-foreground">
          Trong danh sách này, bạn sẽ tìm thấy:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>20+ AI agents cho marketing automation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>Hướng dẫn cài đặt và sử dụng chi tiết</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>Prompts mẫu cho từng use case</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>Checklist đánh giá hiệu quả</span>
          </li>
        </ul>
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Lưu ý:</strong> Nếu không thấy email trong inbox, vui lòng kiểm tra thư mục spam.
          </p>
        </div>
      </div>
    ),
  },
  [GiftOption.REVIT_API_TEMPLATE]: {
    title: 'Template Revit API',
    description: 'Code mẫu đã sẵn sàng để tải!',
    icon: Code,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Template bao gồm:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>C# project template cho Revit API</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>10+ code samples thường dùng</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>Documentation chi tiết bằng tiếng Việt</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>Video hướng dẫn cài đặt</span>
          </li>
        </ul>
        <Button
          className="w-full bg-coral hover:bg-coral-dark"
          onClick={() => window.open('#', '_blank')}
        >
          <Download className="mr-2 h-4 w-4" />
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
        <p className="text-muted-foreground">
          Trong bộ template này:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>50+ prompts cho vibe coding hiệu quả</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>Workflow từ ý tưởng đến sản phẩm</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>Tips để làm việc với AI hiệu quả</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-coral">•</span>
            <span>Danh sách công cụ recommend</span>
          </li>
        </ul>
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm text-muted-foreground">
            <Mail className="inline h-4 w-4 mr-1" />
            Check email của bạn để nhận đầy đủ tài liệu!
          </p>
        </div>
      </div>
    ),
  },
};

export function SuccessView({ giftSelections, email, onClose }: SuccessViewProps) {
  return (
    <div className="space-y-6 py-4">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Đăng ký thành công!</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Cảm ơn bạn, {email}!
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium">Bạn đã chọn {giftSelections.length} món quà:</p>
        {giftSelections.map((giftId) => {
          const gift = giftContent[giftId];
          const Icon = gift.icon;
          return (
            <div key={giftId} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral/20">
                  <Icon className="h-5 w-5 text-coral" />
                </div>
                <div>
                  <h4 className="font-medium">{gift.title}</h4>
                  <p className="text-sm text-muted-foreground">{gift.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm text-muted-foreground">
          <Mail className="inline h-4 w-4 mr-1" />
          Tất cả tài liệu sẽ được gửi đến email của bạn trong vòng 24h.
        </p>
      </div>

      <Button variant="outline" className="w-full" onClick={onClose}>
        Đóng
      </Button>
    </div>
  );
}
