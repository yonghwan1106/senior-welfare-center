import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Clock, Users, Wallet, ArrowRight } from 'lucide-react';
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
  recruiting: { label: '모집중', variant: 'default' as const },
  ongoing: { label: '진행중', variant: 'secondary' as const },
  closed: { label: '마감', variant: 'outline' as const },
};

export default function JobsPage() {
  return (
    <>
      <PageTitle
        title="일자리센터"
        description="어르신의 사회참여와 경제활동을 지원합니다"
        breadcrumb={[{ label: '일자리센터' }]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* 사업 유형 안내 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-2">공익활동형</h3>
              <p className="text-sm text-muted-foreground mb-3">
                지역사회 공익 증진을 위한 봉사활동
              </p>
              <p className="text-2xl font-bold text-primary">월 29만원</p>
              <p className="text-xs text-muted-foreground">월 30시간</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/10 border-secondary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold text-secondary-foreground mb-2">사회서비스형</h3>
              <p className="text-sm text-muted-foreground mb-3">
                돌봄, 교육 등 사회서비스 활동
              </p>
              <p className="text-2xl font-bold text-secondary-foreground">월 73만원</p>
              <p className="text-xs text-muted-foreground">월 60시간</p>
            </CardContent>
          </Card>
          <Card className="bg-muted">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-2">시장형</h3>
              <p className="text-sm text-muted-foreground mb-3">
                소득창출형 일자리 (사업단 운영)
              </p>
              <p className="text-2xl font-bold">시급제</p>
              <p className="text-xs text-muted-foreground">최저임금 이상</p>
            </CardContent>
          </Card>
        </div>

        {/* 일자리 목록 */}
        <h2 className="text-2xl font-bold mb-6">모집중인 일자리</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobPrograms.map((job) => {
            const status = statusMap[job.status];
            return (
              <Card key={job.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold">{job.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={status.variant}>{status.label}</Badge>
                      <Badge variant="outline">{jobTypes[job.type]}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">{job.workDays}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">{job.workHours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold">{job.wage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">{job.targetAge}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold mb-2">참여 조건</h4>
                    <ul className="flex flex-wrap gap-2">
                      {job.requirements.map((req, i) => (
                        <li key={i}>
                          <Badge variant="secondary" className="font-normal">
                            {req}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={job.status === 'recruiting' ? 'default' : 'outline'}
                  >
                    <Link href="/jobs/how-to">
                      {job.status === 'recruiting' ? '참여 신청' : '자세히 보기'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* 안내 */}
        <div className="mt-12 bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">일자리사업 참여 안내</h3>
          <p className="text-muted-foreground mb-6">
            노인일자리사업 참여를 원하시면 센터로 문의해 주세요.<br />
            자격 요건 확인 및 상담을 도와드립니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/jobs/how-to">참여 방법 안내</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">상담 신청</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
