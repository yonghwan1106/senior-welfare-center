'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

type FontSize = 'small' | 'medium' | 'large';

export function FontSizeToggle() {
  const [fontSize, setFontSize] = useState<FontSize>('medium');

  useEffect(() => {
    const saved = localStorage.getItem('fontSize') as FontSize;
    if (saved) {
      setFontSize(saved);
      document.documentElement.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
      document.documentElement.classList.add(`font-size-${saved}`);
    }
  }, []);

  const handleFontSize = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    document.documentElement.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
    document.documentElement.classList.add(`font-size-${size}`);
  };

  return (
    <div className="flex items-center gap-1 border rounded-lg p-1 bg-muted/50" role="group" aria-label="글자 크기 조절">
      <Button
        variant={fontSize === 'small' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleFontSize('small')}
        className="text-sm px-2 min-h-[36px] min-w-[36px]"
        aria-pressed={fontSize === 'small'}
        aria-label="작은 글씨"
      >
        가
      </Button>
      <Button
        variant={fontSize === 'medium' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleFontSize('medium')}
        className="text-base px-2 min-h-[36px] min-w-[36px]"
        aria-pressed={fontSize === 'medium'}
        aria-label="보통 글씨"
      >
        가
      </Button>
      <Button
        variant={fontSize === 'large' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleFontSize('large')}
        className="text-lg px-2 min-h-[36px] min-w-[36px]"
        aria-pressed={fontSize === 'large'}
        aria-label="큰 글씨"
      >
        가
      </Button>
    </div>
  );
}
