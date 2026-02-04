import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supportPrograms } from '@/data/support';

export const metadata: Metadata = {
  title: '정부지원사업',
  description: '노인 관련 정부지원사업 정보를 안내합니다.',
};

const statusMap = {
  ongoing: { label: '진행중', variant: 'default' as const },
  scheduled: { label: '예정', variant: 'secondary' as const },
  closed: { label: '종료', variant: 'outline' as const },
};

export default function SupportPage() {
  return (
    <>
      <PageTitle
        title="정부지원사업"
        description="어르신을 위한 다양한 정부지원사업을 안내합니다"
        breadcrumb={[{ label: '정부지원사업' }]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* 지원사업 목록 */}
        <div className="space-y-6">
          {supportPrograms.map((program) => {
            const status = statusMap[program.status];
            return (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-muted/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                        <p className="text-sm text-muted-foreground">{program.ministry}</p>
                      </div>
                    </div>
                    <Badge variant={status.variant} className="w-fit">
                      {status.label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <p className="text-muted-foreground">{program.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        지원 대상
                      </h4>
                      <p className="text-muted-foreground">{program.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3">신청 기간</h4>
                      <p className="text-muted-foreground">{program.applicationPeriod}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3">지원 내용</h4>
                    <ul className="space-y-2">
                      {program.supportDetails.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30">
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        <strong>신청방법:</strong> {program.howToApply}
                      </p>
                    </div>
                    <Button asChild>
                      <Link href="/contact">
                        상담 신청
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* 안내 */}
        <div className="mt-12 bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">지원사업 신청 도움</h3>
          <p className="text-muted-foreground mb-6">
            어떤 지원사업에 해당되는지 모르시겠다면<br />
            센터 담당자가 맞춤 상담을 도와드립니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/contact">상담 신청하기</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/support/how-to-apply">신청 방법 안내</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
