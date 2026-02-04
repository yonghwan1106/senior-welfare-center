import { Metadata } from 'next';
import Link from 'next/link';
import { Bell, Eye, ChevronRight, Megaphone, Calendar } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Badge } from '@/components/ui/badge';
import { notices } from '@/data/notices';

export const metadata: Metadata = {
  title: '공지사항',
  description: '센터 공지사항 및 소식을 확인하세요.',
};

export default function NoticePage() {
  return (
    <>
      <PageTitle
        title="공지사항"
        description="센터의 새로운 소식과 안내사항을 확인하세요"
        breadcrumb={[
          { label: '커뮤니티', href: '/community/notice' },
          { label: '공지사항' },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-8 opacity-0-initial animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Megaphone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">전체 공지</p>
                <p className="text-muted-foreground">총 {notices.length}개</p>
              </div>
            </div>
          </div>

          {/* 공지사항 목록 */}
          <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-elegant opacity-0-initial animate-fade-in-up delay-100">
            <div className="divide-y divide-border/50">
              {notices.map((notice, index) => (
                <Link
                  key={notice.id}
                  href={`/community/notice/${notice.id}`}
                  className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 hover:bg-accent/30 transition-all duration-300 opacity-0-initial animate-slide-in-right"
                  style={{ animationDelay: `${(index + 2) * 50}ms` }}
                >
                  {/* 날짜 박스 */}
                  <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 bg-muted rounded-2xl shrink-0 group-hover:bg-primary/10 transition-colors">
                    <span className="text-xs text-muted-foreground">
                      {notice.date.split('-')[1]}월
                    </span>
                    <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {notice.date.split('-')[2]}
                    </span>
                  </div>

                  {/* 아이콘 (모바일) */}
                  <div className="sm:hidden w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>

                  {/* 콘텐츠 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {notice.isImportant && (
                        <Badge className="bg-warm hover:bg-warm/90 text-warm-foreground">
                          중요
                        </Badge>
                      )}
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {notice.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="sm:hidden flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {notice.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        조회 {notice.views}
                      </span>
                    </div>
                  </div>

                  {/* 화살표 */}
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 페이지네이션 */}
          <div className="flex justify-center gap-2 mt-10 opacity-0-initial animate-fade-in delay-500">
            <button className="w-12 h-12 rounded-xl bg-primary text-primary-foreground font-bold shadow-elegant">
              1
            </button>
            <button className="w-12 h-12 rounded-xl bg-card border border-border/50 hover:border-primary hover:text-primary transition-colors">
              2
            </button>
            <button className="w-12 h-12 rounded-xl bg-card border border-border/50 hover:border-primary hover:text-primary transition-colors">
              3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
