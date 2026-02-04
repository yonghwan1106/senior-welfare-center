import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Heart, Users, Calendar } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* 배경 레이어들 */}
      <div className="absolute inset-0 gradient-warm" />

      {/* 전통 문양 패턴 */}
      <div className="absolute inset-0 pattern-traditional opacity-50" />

      {/* 장식 요소들 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-warm/10 rounded-full blur-3xl animate-float delay-500" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-earth/10 rounded-full blur-2xl animate-float delay-300" />

      {/* 우측 장식 도형 */}
      <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <div className="relative w-full h-full">
          {/* 동심원 패턴 */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-pulse-soft" />
          <div className="absolute inset-8 rounded-full border-2 border-primary/15" />
          <div className="absolute inset-16 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary/20 to-warm/20" />

          {/* 플로팅 아이콘들 */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-card rounded-2xl shadow-elegant flex items-center justify-center animate-float">
            <Heart className="w-8 h-8 text-warm" />
          </div>
          <div className="absolute top-1/2 left-10 w-14 h-14 bg-card rounded-2xl shadow-elegant flex items-center justify-center animate-float delay-200">
            <Users className="w-7 h-7 text-primary" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-card rounded-xl shadow-elegant flex items-center justify-center animate-float delay-400">
            <Calendar className="w-6 h-6 text-earth" />
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          {/* 서브 타이틀 */}
          <div className="opacity-0-initial animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold text-lg rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              노인단체 종합복지센터
            </span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.15] opacity-0-initial animate-fade-in-up delay-100">
            어르신의{' '}
            <span className="relative inline-block">
              <span className="text-primary">건강하고 행복한</span>
              {/* 밑줄 장식 */}
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-warm/30 -skew-x-3 -z-10" />
            </span>
            <br />
            노후를 함께합니다
          </h1>

          {/* 설명 */}
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed opacity-0-initial animate-fade-in-up delay-200">
            복지서비스, 교육 프로그램, 일자리 지원까지
            <br className="hidden md:block" />
            <span className="text-foreground font-medium">어르신을 위한 모든 서비스</span>를 제공합니다.
          </p>

          {/* 통계 */}
          <div className="mt-10 flex flex-wrap gap-8 opacity-0-initial animate-fade-in-up delay-300">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">15,000+</p>
              <p className="text-muted-foreground mt-1">누적 이용자</p>
            </div>
            <div className="w-px bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-warm">50+</p>
              <p className="text-muted-foreground mt-1">교육 프로그램</p>
            </div>
            <div className="w-px bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-earth">15년</p>
              <p className="text-muted-foreground mt-1">운영 경력</p>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 opacity-0-initial animate-fade-in-up delay-400">
            <Button
              asChild
              size="lg"
              className="text-lg h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 shadow-elegant-lg btn-hover group"
            >
              <Link href="/programs">
                프로그램 보기
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg h-16 px-10 rounded-2xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5 shadow-elegant"
            >
              <Link href="/contact">
                <Phone className="mr-2 w-5 h-5" />
                상담 신청
              </Link>
            </Button>
          </div>

          {/* 연락처 */}
          <div className="mt-12 inline-flex items-center gap-4 px-6 py-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-elegant opacity-0-initial animate-fade-in-up delay-500">
            <div className="w-12 h-12 bg-warm/10 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-warm" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">전화 상담</p>
              <p className="text-xl font-bold text-foreground">000-0000-0000</p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 곡선 장식 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
}
