import Link from 'next/link';
import { Bell, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/common';
import { getRecentNotices } from '@/data/notices';

export function NoticeSection() {
  const notices = getRecentNotices(5);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="공지사항"
          description="센터 소식과 프로그램 안내를 확인하세요"
          href="/community/notice"
        />

        <div className="bg-card border rounded-2xl overflow-hidden">
          <ul className="divide-y">
            {notices.map((notice) => (
              <li key={notice.id}>
                <Link
                  href={`/community/notice/${notice.id}`}
                  className="flex items-center gap-4 p-5 hover:bg-accent/50 transition-colors"
                >
                  <Bell className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {notice.isImportant && (
                        <Badge variant="destructive" className="text-xs">
                          중요
                        </Badge>
                      )}
                      <h3 className="font-medium text-foreground truncate">
                        {notice.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{notice.date}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
