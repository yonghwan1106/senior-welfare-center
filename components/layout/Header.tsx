'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { FontSizeToggle } from './FontSizeToggle';
import { mainNavigation } from '@/data/navigation';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-card/98 backdrop-blur-md shadow-elegant border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      {/* 상단 유틸리티 바 */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                상담전화: <strong>000-0000-0000</strong>
              </span>
              <span className="opacity-80">평일 09:00 ~ 18:00</span>
            </div>
            <div className="flex items-center gap-4">
              <FontSizeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="flex items-center gap-3 min-h-0 min-w-0 group"
          >
            <div className="relative">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-elegant group-hover:shadow-elegant-lg transition-all duration-300 group-hover:scale-105">
                <span className="text-primary-foreground font-bold text-2xl lg:text-3xl font-display">복</span>
              </div>
              {/* 장식 점 */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-warm rounded-full animate-pulse-soft" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-xl lg:text-2xl text-primary tracking-tight">노인단체</p>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">종합복지센터</p>
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="메인 메뉴">
            {mainNavigation.map((item, index) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.href)}
                onMouseLeave={() => setActiveMenu(null)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-5 py-3 text-lg font-medium rounded-xl transition-all duration-300 min-h-[48px] ${
                    activeMenu === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeMenu === item.href ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* 드롭다운 메뉴 */}
                {item.children && activeMenu === item.href && (
                  <div className="absolute top-full left-0 pt-3 min-w-[240px] animate-fade-in">
                    <div className="bg-card border border-border/50 rounded-2xl shadow-elegant-lg py-3 overflow-hidden">
                      {/* 상단 장식선 */}
                      <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                      {item.children.map((child, childIndex) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-base text-foreground hover:bg-accent hover:text-primary transition-all duration-200"
                          style={{ animationDelay: `${childIndex * 30}ms` }}
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                            {child.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 오른쪽 영역 */}
          <div className="flex items-center gap-3">
            {/* 상담신청 버튼 (데스크톱) */}
            <Button
              asChild
              className="hidden lg:flex h-12 px-6 text-base font-semibold bg-warm hover:bg-warm/90 text-warm-foreground rounded-xl btn-hover shadow-elegant"
            >
              <Link href="/contact">
                상담신청
              </Link>
            </Button>

            {/* 글자 크기 조절 (태블릿) */}
            <div className="hidden md:block lg:hidden">
              <FontSizeToggle />
            </div>

            {/* 모바일 메뉴 버튼 */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="min-h-[48px] min-w-[48px] rounded-xl hover:bg-primary/10"
                  aria-label="메뉴 열기"
                >
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] sm:w-[400px] overflow-y-auto bg-card border-l-2 border-primary/20"
              >
                <SheetTitle className="sr-only">메인 메뉴</SheetTitle>
                <SheetDescription className="sr-only">
                  사이트 내비게이션 메뉴입니다
                </SheetDescription>

                <div className="flex flex-col gap-6 mt-8">
                  {/* 모바일 로고 */}
                  <div className="flex items-center gap-3 pb-6 border-b border-border">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xl font-display">복</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-primary">노인단체</p>
                      <p className="text-sm text-muted-foreground">종합복지센터</p>
                    </div>
                  </div>

                  {/* 글자 크기 조절 (모바일) */}
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="font-medium text-foreground">글자 크기</span>
                    <FontSizeToggle />
                  </div>

                  {/* 모바일 네비게이션 */}
                  <nav className="flex flex-col gap-2" role="navigation" aria-label="모바일 메뉴">
                    {mainNavigation.map((item, index) => (
                      <div
                        key={item.href}
                        className="border-b border-border/50 pb-4 opacity-0-initial animate-slide-in-right"
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 py-3 text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {item.title}
                        </Link>
                        {item.children && (
                          <div className="ml-5 flex flex-col gap-1 mt-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2.5 pl-4 text-base text-muted-foreground hover:text-primary border-l-2 border-border hover:border-primary transition-all"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* 모바일 상담 버튼 */}
                  <Button
                    asChild
                    className="mt-4 h-14 text-lg font-semibold bg-warm hover:bg-warm/90 text-warm-foreground rounded-xl"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Phone className="w-5 h-5 mr-2" />
                      상담신청
                    </Link>
                  </Button>

                  {/* 연락처 */}
                  <div className="mt-4 p-4 bg-muted rounded-xl">
                    <p className="text-sm text-muted-foreground mb-2">전화 상담</p>
                    <p className="text-xl font-bold text-primary">000-0000-0000</p>
                    <p className="text-sm text-muted-foreground mt-1">평일 09:00 ~ 18:00</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
