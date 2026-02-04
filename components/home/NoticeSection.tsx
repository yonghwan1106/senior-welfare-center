import Link from 'next/link';
import { Bell, ChevronRight, Megaphone, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/common';
import { getRecentNotices } from '@/data/notices';

export function NoticeSection() {
  const notices = getRecentNotices(5);

  return (
    <section className="py-16 md:py-20 bg-muted/30 relative">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 pattern-traditional opacity-20" />

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="공지사항"
          description="센터 소식과 프로그램 안내를 확인하세요"
          href="/community/notice"
        />

        <div className="max-w-4xl mx-auto opacity-0-initial animate-fade-in-up delay-200">
          <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-elegant">
            {/* 헤더 */}
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 to-transparent border-b border-border/50">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Megaphone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground">최신 공지</span>
            </div>

            {/* 목록 */}
            <ul className="divide-y divide-border/50">
              {notices.map((notice, index) => (
                <li
                  key={notice.id}
                  className="opacity-0-initial animate-slide-in-right"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <Link
                    href={`/community/notice/${notice.id}`}
                    className="flex items-center gap-4 px-6 py-5 hover:bg-accent/50 transition-all duration-300 group"
                  >
                    {/* 아이콘/날짜 */}
                    <div className="hidden sm:flex flex-col items-center justify-center w-14 h-14 bg-muted rounded-xl shrink-0 group-hover:bg-primary/10 transition-colors">
                      <span className="text-xs text-muted-foreground">
                        {notice.date.split('-')[1]}월
                      </span>
                      <span className="text-lg font-bold text-foreground">
                        {notice.date.split('-')[2]}
                      </span>
                    </div>

                    {/* 콘텐츠 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        {notice.isImportant && (
                          <Badge className="bg-warm hover:bg-warm/90 text-warm-foreground text-xs">
                            중요
                          </Badge>
                        )}
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {notice.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1 sm:hidden">
                          <Calendar className="w-3.5 h-3.5" />
                          {notice.date}
                        </span>
                        <span>조회 {notice.views}</span>
                      </div>
                    </div>

                    {/* 화살표 */}
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* 더보기 링크 */}
            <Link
              href="/community/notice"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all border-t border-border/50 font-medium"
            >
              모든 공지사항 보기
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
