import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Clock, Users, Wallet, ArrowRight, Sparkles, Calendar, MapPin } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { jobPrograms, jobTypes } from '@/data/jobs';

export const metadata: Metadata = {
  title: '일자리센터',
  description: '노인일자리 및 사회활동 지원사업을 안내합니다.',
};

const statusMap = {
  recruiting: { label: '모집중', className: 'bg-primary text-primary-foreground animate-pulse-soft' },
  ongoing: { label: '진행중', className: 'bg-earth text-earth-foreground' },
  closed: { label: '마감', className: 'bg-muted text-muted-foreground' },
};

const typeConfig = {
  public: { color: 'primary', label: '공익활동형' },
  social: { color: 'warm', label: '사회서비스형' },
  market: { color: 'earth', label: '시장형' },
};

export default function JobsPage() {
  return (
    <>
      <PageTitle
        title="일자리센터"
        description="어르신의 사회참여와 경제활동을 지원합니다"
        breadcrumb={[{ label: '일자리센터' }]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 사업 유형 안내 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 opacity-0-initial animate-fade-in-up">
          {/* 공익활동형 */}
          <Card className="group relative overflow-hidden border-primary/30 rounded-3xl card-hover">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

            <CardContent className="p-6 md:p-8 text-center relative">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Users className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">공익활동형</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                지역사회 공익 증진을 위한
                <br />
                봉사활동 참여
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="text-3xl font-bold text-primary">월 29만원</p>
                <p className="text-sm text-muted-foreground mt-1">월 30시간 활동</p>
              </div>
            </CardContent>
          </Card>

          {/* 사회서비스형 */}
          <Card className="group relative overflow-hidden border-warm/30 rounded-3xl card-hover">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-warm" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-warm/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

            <CardContent className="p-6 md:p-8 text-center relative">
              <div className="w-14 h-14 bg-warm/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-warm group-hover:text-warm-foreground transition-all">
                <Sparkles className="w-7 h-7 text-warm group-hover:text-warm-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-warm mb-2">사회서비스형</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                돌봄, 교육 등
                <br />
                사회서비스 활동
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="text-3xl font-bold text-warm">월 73만원</p>
                <p className="text-sm text-muted-foreground mt-1">월 60시간 활동</p>
              </div>
            </CardContent>
          </Card>

          {/* 시장형 */}
          <Card className="group relative overflow-hidden border-earth/30 rounded-3xl card-hover">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-earth" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-earth/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

            <CardContent className="p-6 md:p-8 text-center relative">
              <div className="w-14 h-14 bg-earth/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-earth group-hover:text-earth-foreground transition-all">
                <Briefcase className="w-7 h-7 text-earth group-hover:text-earth-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-earth mb-2">시장형</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                소득창출형 일자리
                <br />
                (사업단 운영)
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="text-3xl font-bold text-earth">시급제</p>
                <p className="text-sm text-muted-foreground mt-1">최저임금 이상 보장</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 일자리 목록 섹션 */}
        <div className="mb-10 opacity-0-initial animate-fade-in-up delay-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">모집중인 일자리</h2>
              <p className="text-muted-foreground mt-1">현재 참여 가능한 일자리 사업입니다</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {jobPrograms.map((job, index) => {
            const status = statusMap[job.status];
            const typeInfo = typeConfig[job.type as keyof typeof typeConfig];

            return (
              <Card
                key={job.id}
                className="group overflow-hidden border-border/50 rounded-3xl card-hover opacity-0-initial animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* 헤더 */}
                <CardHeader className="relative bg-gradient-to-r from-muted/80 to-transparent pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-${typeInfo.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Briefcase className={`w-6 h-6 text-${typeInfo.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{job.workDays}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={status.className}>{status.label}</Badge>
                      <Badge variant="outline" className="border-border">{jobTypes[job.type]}</Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-5 space-y-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>

                  {/* 정보 그리드 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                      <Calendar className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">활동일</p>
                        <p className="font-medium text-foreground">{job.workDays}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                      <Clock className="w-5 h-5 text-warm shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">활동시간</p>
                        <p className="font-medium text-foreground">{job.workHours}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                      <Wallet className="w-5 h-5 text-earth shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">급여</p>
                        <p className="font-bold text-primary">{job.wage}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                      <Users className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">연령</p>
                        <p className="font-medium text-foreground">{job.targetAge}</p>
                      </div>
                    </div>
                  </div>

                  {/* 참여 조건 */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3">참여 조건</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="font-normal bg-secondary/50"
                        >
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 pb-6">
                  <Button
                    asChild
                    className={`w-full h-12 rounded-xl font-semibold btn-hover ${
                      job.status === 'recruiting'
                        ? 'bg-primary hover:bg-primary/90 shadow-elegant'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Link href="/jobs/how-to" className="flex items-center justify-center gap-2">
                      {job.status === 'recruiting' ? '참여 신청' : '자세히 보기'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* 하단 CTA */}
        <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-warm/10 rounded-3xl p-8 md:p-12 text-center opacity-0-initial animate-fade-in-up delay-700">
          <div className="absolute inset-0 pattern-traditional opacity-20" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              일자리사업 참여 안내
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              노인일자리사업 참여를 원하시면 센터로 문의해 주세요.
              <br />
              자격 요건 확인 및 상담을 도와드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 rounded-xl text-lg font-semibold shadow-elegant btn-hover">
                <Link href="/jobs/how-to">
                  참여 방법 안내
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-xl text-lg font-semibold border-2"
              >
                <Link href="/contact">상담 신청</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
