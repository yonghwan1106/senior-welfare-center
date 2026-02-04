import { Metadata } from 'next';
import { User } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { greeting } from '@/data/organization';

export const metadata: Metadata = {
  title: '인사말',
  description: '노인단체 종합복지센터 센터장 인사말입니다.',
};

export default function GreetingPage() {
  return (
    <>
      <PageTitle
        title="인사말"
        description="노인단체 종합복지센터를 방문해 주셔서 감사합니다"
        breadcrumb={[
          { label: '센터소개', href: '/about' },
          { label: '인사말' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border rounded-2xl p-8 md:p-12">
            {/* 센터장 이미지 영역 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-60 bg-muted rounded-xl flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <User className="w-20 h-20 text-muted-foreground" />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  "{greeting.title}"
                </h2>

                <div className="prose prose-lg max-w-none text-foreground leading-relaxed whitespace-pre-line">
                  {greeting.content}
                </div>

                <div className="mt-8 text-right">
                  <p className="text-xl font-bold text-primary">{greeting.ceoName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
