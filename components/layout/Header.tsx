'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { FontSizeToggle } from './FontSizeToggle';
import { mainNavigation } from '@/data/navigation';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2 min-h-0 min-w-0">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">복</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg text-primary">노인단체</p>
              <p className="text-sm text-muted-foreground">종합복지센터</p>
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="메인 메뉴">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.href)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-3 text-base font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors min-h-[48px]"
                >
                  {item.title}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* 드롭다운 메뉴 */}
                {item.children && activeMenu === item.href && (
                  <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                    <div className="bg-card border rounded-lg shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-base hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 오른쪽 영역 */}
          <div className="flex items-center gap-4">
            {/* 글자 크기 조절 (데스크톱) */}
            <div className="hidden md:block">
              <FontSizeToggle />
            </div>

            {/* 모바일 메뉴 버튼 */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="min-h-[48px] min-w-[48px]" aria-label="메뉴 열기">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] overflow-y-auto">
                <SheetTitle className="sr-only">메인 메뉴</SheetTitle>
                <SheetDescription className="sr-only">
                  사이트 내비게이션 메뉴입니다
                </SheetDescription>
                <div className="flex flex-col gap-6 mt-8">
                  {/* 글자 크기 조절 (모바일) */}
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-medium">글자 크기</span>
                    <FontSizeToggle />
                  </div>

                  {/* 모바일 네비게이션 */}
                  <nav className="flex flex-col gap-2" role="navigation" aria-label="모바일 메뉴">
                    {mainNavigation.map((item) => (
                      <div key={item.href} className="border-b pb-4">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-3 text-lg font-semibold text-primary hover:text-primary/80"
                        >
                          {item.title}
                        </Link>
                        {item.children && (
                          <div className="ml-4 flex flex-col gap-1 mt-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-base text-muted-foreground hover:text-foreground"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
