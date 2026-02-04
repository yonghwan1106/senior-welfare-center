import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Eye, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { notices, getNoticeById } from '@/data/notices';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return notices.map((notice) => ({
    id: notice.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const notice = getNoticeById(id);
  if (!notice) return { title: '공지사항을 찾을 수 없습니다' };

  return {
    title: notice.title,
    description: notice.content.slice(0, 100),
  };
}

export default async function NoticeDetailPage({ params }: Props) {
  const { id } = await params;
  const notice = getNoticeById(id);

  if (!notice) {
    notFound();
  }

  // 이전/다음 공지
  const currentIndex = notices.findIndex((n) => n.id === id);
  const prevNotice = currentIndex > 0 ? notices[currentIndex - 1] : null;
  const nextNotice = currentIndex < notices.length - 1 ? notices[currentIndex + 1] : null;

  return (
    <>
      <PageTitle
        title="공지사항"
        breadcrumb={[
          { label: '커뮤니티', href: '/community/notice' },
          { label: '공지사항', href: '/community/notice' },
          { label: notice.title },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 공지사항 본문 */}
          <article className="bg-card border rounded-2xl overflow-hidden">
            {/* 헤더 */}
            <div className="p-6 md:p-8 border-b">
              <div className="flex items-center gap-2 mb-3">
                {notice.isImportant && (
                  <Badge variant="destructive">중요</Badge>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{notice.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {notice.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  조회 {notice.views}
                </span>
              </div>
            </div>

            {/* 본문 */}
            <div className="p-6 md:p-8">
              <div className="prose max-w-none text-lg leading-relaxed whitespace-pre-line">
                {notice.content}
              </div>
            </div>
          </article>

          {/* 이전/다음 글 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevNotice ? (
              <Link
                href={`/community/notice/${prevNotice.id}`}
                className="flex items-center gap-3 p-4 bg-card border rounded-xl hover:bg-accent/50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">이전 글</p>
                  <p className="font-medium truncate">{prevNotice.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextNotice ? (
              <Link
                href={`/community/notice/${nextNotice.id}`}
                className="flex items-center justify-end gap-3 p-4 bg-card border rounded-xl hover:bg-accent/50 transition-colors text-right"
              >
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">다음 글</p>
                  <p className="font-medium truncate">{nextNotice.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* 목록으로 */}
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/community/notice">목록으로</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
