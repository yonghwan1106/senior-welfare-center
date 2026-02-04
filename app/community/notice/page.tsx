import { Metadata } from 'next';
import Link from 'next/link';
import { Bell, Eye, ChevronRight } from 'lucide-react';
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 공지사항 목록 */}
          <div className="bg-card border rounded-2xl overflow-hidden">
            <div className="divide-y">
              {notices.map((notice) => (
                <Link
                  key={notice.id}
                  href={`/community/notice/${notice.id}`}
                  className="flex items-center gap-4 p-6 hover:bg-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {notice.isImportant && (
                        <Badge variant="destructive" className="text-xs">
                          중요
                        </Badge>
                      )}
                      <h3 className="font-bold text-lg truncate">{notice.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{notice.date}</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {notice.views}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* 페이지네이션 (더미) */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-muted hover:bg-accent">2</button>
            <button className="w-10 h-10 rounded-lg bg-muted hover:bg-accent">3</button>
          </div>
        </div>
      </div>
    </>
  );
}
