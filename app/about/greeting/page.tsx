import { Metadata } from 'next';
import { User, Quote } from 'lucide-react';
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

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto opacity-0-initial animate-fade-in-up">
          <div className="relative bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-elegant overflow-hidden">
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-warm/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* 인용 장식 */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            <div className="relative flex flex-col md:flex-row gap-10 items-start">
              {/* 센터장 이미지 영역 */}
              <div className="relative mx-auto md:mx-0 shrink-0 opacity-0-initial animate-scale-in delay-200">
                <div className="w-48 h-60 bg-gradient-to-br from-primary/10 to-warm/10 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 pattern-traditional opacity-30" />
                  <User className="w-24 h-24 text-primary/40 relative z-10" />
                </div>
                {/* 장식 프레임 */}
                <div className="absolute -inset-2 border-2 border-primary/20 rounded-2xl pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-warm/20 rounded-full blur-xl" />
              </div>

              <div className="flex-1 relative">
                {/* 타이틀 */}
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 opacity-0-initial animate-fade-in-up delay-300">
                  "{greeting.title}"
                </h2>

                {/* 본문 */}
                <div className="prose prose-lg max-w-none text-foreground leading-[2] whitespace-pre-line opacity-0-initial animate-fade-in delay-400">
                  {greeting.content}
                </div>

                {/* 서명 */}
                <div className="mt-10 pt-6 border-t border-border/50 text-right opacity-0-initial animate-slide-in-right delay-500">
                  <div className="inline-flex items-center gap-4">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">노인단체 종합복지센터</p>
                      <p className="text-2xl font-bold text-primary">{greeting.ceoName}</p>
                    </div>
                    {/* 서명 장식 */}
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-display text-primary">복</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
