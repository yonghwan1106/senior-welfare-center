import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-3xl">
          {/* 서브 타이틀 */}
          <p className="text-primary font-semibold text-lg mb-4">
            노인단체 종합복지센터
          </p>

          {/* 메인 타이틀 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            어르신의 <span className="text-primary">건강하고 행복한</span><br />
            노후를 함께합니다
          </h1>

          {/* 설명 */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            복지서비스, 교육 프로그램, 일자리 지원까지<br className="hidden md:block" />
            어르신을 위한 모든 서비스를 제공합니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg h-14 px-8">
              <Link href="/programs">
                프로그램 보기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8">
              <Link href="/contact">
                <Phone className="mr-2 w-5 h-5" />
                상담 신청
              </Link>
            </Button>
          </div>

          {/* 연락처 */}
          <div className="mt-10 flex items-center gap-3 text-muted-foreground">
            <Phone className="w-5 h-5" />
            <span className="text-lg">
              전화 상담: <strong className="text-foreground">000-0000-0000</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 우측 장식 이미지 영역 (데스크톱) */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent rounded-l-[100px]" />
      </div>
    </section>
  );
}
