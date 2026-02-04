import { Metadata } from 'next';
import Link from 'next/link';
import { Award, CheckCircle, TrendingUp, ArrowRight, Sparkles, GraduationCap, Users } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { certifications } from '@/data/certifications';

export const metadata: Metadata = {
  title: '자격증안내',
  description: '요양보호사, 노인체육지도사 등 취득 가능한 자격증을 안내합니다.',
};

export default function CertificationPage() {
  return (
    <>
      <PageTitle
        title="자격증안내"
        description="제2의 인생을 위한 자격증 취득을 도와드립니다"
        breadcrumb={[{ label: '자격증안내' }]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 통계 배너 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 opacity-0-initial animate-fade-in-up">
          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-elegant">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">4</p>
            <p className="text-muted-foreground">자격증 과정</p>
          </div>
          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-elegant">
            <p className="text-3xl md:text-4xl font-bold text-warm mb-1">85%</p>
            <p className="text-muted-foreground">평균 합격률</p>
          </div>
          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-elegant">
            <p className="text-3xl md:text-4xl font-bold text-earth mb-1">1,200+</p>
            <p className="text-muted-foreground">수료생</p>
          </div>
          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-elegant">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">78%</p>
            <p className="text-muted-foreground">취업 연계</p>
          </div>
        </div>

        {/* 자격증 목록 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              className="group overflow-hidden border-border/50 rounded-3xl card-hover opacity-0-initial animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 헤더 */}
              <CardHeader className="relative bg-gradient-to-r from-primary/10 via-accent/5 to-transparent pb-6">
                {/* 배경 장식 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-card rounded-2xl shadow-elegant flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-muted-foreground mt-1">{cert.duration}</p>
                    </div>
                  </div>
                  <Badge
                    className={`shrink-0 ${
                      cert.type === 'national'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {cert.type === 'national' ? '국가자격' : '민간자격'}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-6 space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* 정보 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">대상</p>
                      <p className="font-medium text-foreground">{cert.targetAudience}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-warm/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4 text-warm" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">교육기간</p>
                      <p className="font-medium text-foreground">{cert.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-earth/10 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-earth" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">교육비</p>
                      <p className={`font-bold ${cert.fee === 0 ? 'text-primary' : 'text-foreground'}`}>
                        {cert.fee === 0 ? '무료 (정부지원)' : `${cert.fee.toLocaleString()}원`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 취업률 */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">수료생 취업률</p>
                    <p className="text-2xl font-bold text-primary">{cert.employmentRate}</p>
                  </div>
                </div>

                {/* 혜택 */}
                <div>
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    취득 후 혜택
                  </h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="pt-2 pb-6">
                <Button
                  asChild
                  className="w-full h-12 rounded-xl font-semibold shadow-elegant btn-hover"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    상담 신청
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-warm/10 rounded-3xl p-8 md:p-12 text-center opacity-0-initial animate-fade-in-up delay-500">
          <div className="absolute inset-0 pattern-traditional opacity-20" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              자격증 취득 상담
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              어떤 자격증이 적합한지 고민되시나요?
              <br />
              센터 담당자가 맞춤 상담을 도와드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 rounded-xl text-lg font-semibold shadow-elegant btn-hover">
                <Link href="/contact">
                  상담 신청하기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-xl text-lg font-semibold border-2"
              >
                <Link href="/certification/process">취득 절차 안내</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
