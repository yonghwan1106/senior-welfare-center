import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getWelfareByCategory } from '@/data/welfare';

export const metadata: Metadata = {
  title: '돌봄서비스',
  description: '노인맞춤돌봄서비스, 재가복지서비스, 주간보호서비스 등 돌봄서비스를 안내합니다.',
};

export default function CarePage() {
  const careServices = getWelfareByCategory('care');

  return (
    <>
      <PageTitle
        title="돌봄서비스"
        description="어르신의 안전하고 편안한 일상을 위한 돌봄서비스입니다"
        breadcrumb={[
          { label: '복지서비스', href: '/welfare' },
          { label: '돌봄서비스' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* 서비스 소개 */}
          <div className="bg-primary/5 rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Heart className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold">돌봄서비스란?</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              혼자 일상생활을 영위하기 어려운 어르신에게 안전확인, 생활지원,
              사회참여 등 맞춤형 돌봄서비스를 제공하여 건강하고 안전한 노후생활을 지원합니다.
            </p>
          </div>

          {/* 서비스 목록 */}
          <div className="space-y-6">
            {careServices.map((service) => (
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
                      상담 신청
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* 신청 안내 */}
          <div className="mt-12 bg-card border rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">돌봄서비스 신청 안내</h3>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li>센터 방문 또는 전화로 상담 예약</li>
              <li>담당자와 초기 상담 진행</li>
              <li>서비스 대상자 여부 심사</li>
              <li>서비스 제공 계획 수립</li>
              <li>돌봄서비스 제공 시작</li>
            </ol>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/contact">지금 상담받기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
