import { Metadata } from 'next';
import { FileText, Download, FileSpreadsheet, File, FolderOpen, FileCheck } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '자료실',
  description: '센터 관련 서식 및 자료를 다운로드하세요.',
};

const resources = [
  {
    id: 1,
    title: '2026년 교육프로그램 안내서',
    type: 'pdf',
    size: '2.5MB',
    date: '2026-01-15',
    category: '교육',
  },
  {
    id: 2,
    title: '수강신청서 양식',
    type: 'doc',
    size: '45KB',
    date: '2026-01-10',
    category: '서식',
  },
  {
    id: 3,
    title: '노인일자리사업 참여신청서',
    type: 'doc',
    size: '52KB',
    date: '2026-01-08',
    category: '서식',
  },
  {
    id: 4,
    title: '개인정보 수집 동의서',
    type: 'pdf',
    size: '120KB',
    date: '2026-01-05',
    category: '서식',
  },
  {
    id: 5,
    title: '2025년 사업보고서',
    type: 'pdf',
    size: '8.2MB',
    date: '2025-12-28',
    category: '보고서',
  },
  {
    id: 6,
    title: '센터 이용안내 브로슈어',
    type: 'pdf',
    size: '5.1MB',
    date: '2025-12-20',
    category: '안내',
  },
];

const iconMap = {
  pdf: File,
  doc: FileText,
  xls: FileSpreadsheet,
};

const typeColors = {
  pdf: 'bg-warm/10 text-warm',
  doc: 'bg-primary/10 text-primary',
  xls: 'bg-earth/10 text-earth',
};

const categoryColors: Record<string, string> = {
  '교육': 'bg-primary/10 text-primary',
  '서식': 'bg-warm/10 text-warm',
  '보고서': 'bg-earth/10 text-earth',
  '안내': 'bg-secondary text-secondary-foreground',
};

export default function ResourcesPage() {
  return (
    <>
      <PageTitle
        title="자료실"
        description="센터 관련 서식 및 자료를 다운로드하세요"
        breadcrumb={[
          { label: '커뮤니티', href: '/community/notice' },
          { label: '자료실' },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-8 opacity-0-initial animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">자료 목록</p>
                <p className="text-muted-foreground">총 {resources.length}개</p>
              </div>
            </div>
          </div>

          {/* 자료 목록 */}
          <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-elegant opacity-0-initial animate-fade-in-up delay-100">
            <div className="divide-y divide-border/50">
              {resources.map((resource, index) => {
                const Icon = iconMap[resource.type as keyof typeof iconMap] || FileText;
                const typeColor = typeColors[resource.type as keyof typeof typeColors] || typeColors.doc;
                const catColor = categoryColors[resource.category] || categoryColors['안내'];

                return (
                  <div
                    key={resource.id}
                    className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 hover:bg-accent/30 transition-all duration-300 opacity-0-initial animate-slide-in-right"
                    style={{ animationDelay: `${(index + 2) * 50}ms` }}
                  >
                    {/* 아이콘 */}
                    <div className={`w-14 h-14 ${typeColor.split(' ')[0]} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${typeColor.split(' ')[1]}`} />
                    </div>

                    {/* 정보 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge variant="outline" className={`${catColor} border-none text-xs`}>
                          {resource.category}
                        </Badge>
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {resource.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="uppercase font-medium px-2 py-0.5 bg-muted rounded">
                          {resource.type}
                        </span>
                        <span>•</span>
                        <span>{resource.size}</span>
                        <span>•</span>
                        <span>{resource.date}</span>
                      </div>
                    </div>

                    {/* 다운로드 버튼 */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="shrink-0 h-12 px-5 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      다운로드
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 안내 */}
          <div className="mt-12 relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-warm/10 rounded-3xl p-8 text-center opacity-0-initial animate-fade-in-up delay-500">
            <div className="absolute inset-0 pattern-traditional opacity-20" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-7 h-7 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                자료 다운로드에 문제가 있거나 추가 자료가 필요하시면
                <br />
                센터(<strong className="text-foreground">000-0000-0000</strong>)로 문의해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
