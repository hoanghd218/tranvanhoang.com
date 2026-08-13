/**
 * Gift Selector Component
 *
 * Displays selectable gift cards for the email capture popup.
 */

'use client';

import * as React from 'react';
import { Bot, Check, Code, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GiftOption, GiftOptionData } from '@/types/email-popup';

const giftOptions: GiftOptionData[] = [
  {
    id: GiftOption.AI_AGENTS_MARKETING,
    title: 'Danh sách AI Agents Marketing',
    description: '20+ AI agents giúp bạn tự động hóa marketing',
    iconName: 'Bot',
  },
  {
    id: GiftOption.REVIT_API_TEMPLATE,
    title: 'Template Revit API',
    description: 'Code mẫu để bắt đầu với Revit API',
    iconName: 'Code',
  },
  {
    id: GiftOption.VIBE_CODING_TEMPLATE,
    title: 'Template Vibe Coding',
    description: 'Prompts và workflow cho vibe coding',
    iconName: 'Sparkles',
  },
];

const iconMap = {
  Bot,
  Code,
  Sparkles,
};

interface GiftSelectorProps {
  value: GiftOption[];
  onChange: (value: GiftOption[]) => void;
  error?: string;
}

export function GiftSelector({ value = [], onChange, error }: GiftSelectorProps) {
  const toggleSelection = (optionId: GiftOption) => {
    if (value.includes(optionId)) {
      onChange(value.filter((id) => id !== optionId));
    } else {
      onChange([...value, optionId]);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-[length:var(--size-body-s)] font-medium text-text-primary">
        Chọn quà tặng{' '}
        <span className="font-normal text-text-secondary">(có thể chọn nhiều)</span>
      </label>
      <div className="grid gap-3">
        {giftOptions.map((option) => {
          const Icon = iconMap[option.iconName];
          const isSelected = value.includes(option.id);

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => toggleSelection(option.id)}
              aria-pressed={isSelected}
              className={cn(
                // Selected is a purple tint plus a purple hairline — never a solid fill.
                'relative flex items-start gap-3 rounded-[var(--radius-md)] border p-[var(--space-4)] pr-[var(--space-7)] text-left',
                'transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]',
                isSelected
                  ? 'border-hairline-accent bg-[var(--purple-a12)]'
                  : 'border-hairline bg-surface-card hover:border-hairline-accent hover:bg-surface-overlay'
              )}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-surface-inset">
                <Icon
                  size={20}
                  strokeWidth={1.75}
                  className={isSelected ? 'text-rocket' : 'text-text-secondary'}
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-text-primary">{option.title}</div>
                <div className="text-[length:var(--size-body-s)] text-text-secondary">
                  {option.description}
                </div>
              </div>
              {isSelected && (
                <Check
                  size={16}
                  strokeWidth={1.75}
                  className="absolute top-4 right-4 text-rocket"
                />
              )}
            </button>
          );
        })}
      </div>
      {error && (
        <p className="text-[length:var(--size-body-s)] text-status-critical">{error}</p>
      )}
    </div>
  );
}
