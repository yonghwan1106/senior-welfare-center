import { Metadata } from 'next';
import Link from 'next/link';
import { Activity, ArrowRight, CheckCircle } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getWelfareByCategory } from '@/data/welfare';

export const metadata: Metadata = {
  title: '건강관리',
  description: '건강검진, 치매예방, 물리치료 등 어르신을 위한 건강관리 서비스를 안내합니다.',
};

export default function HealthPage() {
  const healthServices = getWelfareByCategory('health');

  return (
    <>
      <PageTitle
        title="건강관리"
        description="어르신의 건강한 노후를 위한 다양한 건강관리 프로그램입니다"
        breadcrumb={[
          { label: '복지서비스', href: '/welfare' },
          { label: '건강관리' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* 서비스 소개 */}
          <div className="bg-primary/5 rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Activity className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold">건강관리 서비스</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              정기 건강검진, 치매예방 프로그램, 물리치료 등을 통해
              어르신의 신체적, 정신적 건강을 종합적으로 관리합니다.
            </p>
          </div>

          {/* 서비스 목록 */}
          <div className="space-y-6">
            {healthServices.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <Badge variant="secondary">{service.fee}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span><strong>대상:</strong> {service.targetAudience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span><strong>이용시간:</strong> {service.schedule}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span><strong>신청방법:</strong> {service.howToApply}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30">
                  <Button asChild className="w-full md:w-auto">
                    <Link href="/contact">
                      예약 신청
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* 건강검진 일정 안내 */}
          <div className="mt-12 bg-secondary/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">무료 건강검진 안내</h3>
            <p className="text-muted-foreground mb-4">
              센터에서는 분기별로 무료 건강검진을 실시합니다.
              혈압, 혈당, 콜레스테롤, 골밀도 검사 등을 받으실 수 있습니다.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• 일정: 분기별 1회 (공지사항 참조)</li>
              <li>• 대상: 만 60세 이상 센터 이용자</li>
              <li>• 비용: 무료</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/community/notice">공지사항 확인하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
