/**
 * Gift Selector Component
 *
 * Displays selectable gift cards for the email capture popup.
 */

'use client';

import * as React from 'react';
import { Bot, Code, Sparkles } from 'lucide-react';
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
      <label className="text-sm font-medium">
        Chọn quà tặng <span className="text-muted-foreground font-normal">(có thể chọn nhiều)</span>
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
              className={cn(
                'relative flex items-start gap-3 rounded-lg border p-4 text-left transition-all',
                'hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-coral/50',
                isSelected
                  ? 'border-coral bg-coral/5'
                  : 'border-border bg-card'
              )}
            >
              <div
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
                  isSelected ? 'bg-coral/20 text-coral' : 'bg-muted text-muted-foreground'
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">{option.title}</div>
                <div className="text-sm text-muted-foreground">{option.description}</div>
              </div>
              {isSelected && (
                <div className="absolute right-4 top-4">
                  <div className="h-2 w-2 rounded-full bg-coral" />
                </div>
              )}
            </button>
          );
        })}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
