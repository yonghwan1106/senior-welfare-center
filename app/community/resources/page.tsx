import { Metadata } from 'next';
import { FileText, Download, FileSpreadsheet, File } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';

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
  },
  {
    id: 2,
    title: '수강신청서 양식',
    type: 'doc',
    size: '45KB',
    date: '2026-01-10',
  },
  {
    id: 3,
    title: '노인일자리사업 참여신청서',
    type: 'doc',
    size: '52KB',
    date: '2026-01-08',
  },
  {
    id: 4,
    title: '개인정보 수집 동의서',
    type: 'pdf',
    size: '120KB',
    date: '2026-01-05',
  },
  {
    id: 5,
    title: '2025년 사업보고서',
    type: 'pdf',
    size: '8.2MB',
    date: '2025-12-28',
  },
  {
    id: 6,
    title: '센터 이용안내 브로슈어',
    type: 'pdf',
    size: '5.1MB',
    date: '2025-12-20',
  },
];

const iconMap = {
  pdf: File,
  doc: FileText,
  xls: FileSpreadsheet,
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 자료 목록 */}
          <div className="bg-card border rounded-2xl overflow-hidden">
            <div className="divide-y">
              {resources.map((resource) => {
                const Icon = iconMap[resource.type as keyof typeof iconMap] || FileText;
                return (
                  <div
                    key={resource.id}
                    className="flex items-center gap-4 p-5 hover:bg-accent/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg">{resource.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="uppercase">{resource.type}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                        <span>•</span>
                        <span>{resource.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0">
                      <Download className="w-4 h-4 mr-2" />
                      다운로드
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 안내 */}
          <div className="mt-8 bg-muted rounded-xl p-6 text-center">
            <p className="text-muted-foreground">
              자료 다운로드에 문제가 있거나 추가 자료가 필요하시면<br />
              센터(000-0000-0000)로 문의해 주세요.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
