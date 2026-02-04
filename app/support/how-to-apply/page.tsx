import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Search, ClipboardCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '신청방법',
  description: '정부지원사업 신청 방법과 절차를 안내합니다.',
};

const steps = [
  {
    number: 1,
    title: '대상 확인',
    description: '본인이 해당 지원사업의 대상자인지 확인합니다.',
    icon: Search,
    details: ['연령 조건 확인 (만 60세/65세 이상)', '소득 조건 확인 (기초연금 등)', '거주지 확인'],
  },
  {
    number: 2,
    title: '서류 준비',
    description: '신청에 필요한 서류를 준비합니다.',
    icon: FileText,
    details: ['신분증', '소득 관련 증빙서류', '건강 관련 서류 (해당 사업)'],
  },
  {
    number: 3,
    title: '신청',
    description: '센터, 주민센터, 또는 온라인으로 신청합니다.',
    icon: ClipboardCheck,
    details: ['센터 방문 신청', '읍면동 주민센터 신청', '복지로(www.bokjiro.go.kr) 온라인 신청'],
  },
  {
    number: 4,
    title: '결과 확인',
    description: '심사 후 결과를 안내받습니다.',
    icon: CheckCircle,
    details: ['대상자 선정 여부 통보', '서비스 이용 안내', '담당자 배정'],
  },
];

export default function HowToApplyPage() {
  return (
    <>
      <PageTitle
        title="신청방법"
        description="정부지원사업 신청 절차를 안내해 드립니다"
        breadcrumb={[
          { label: '정부지원사업', href: '/support' },
          { label: '신청방법' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 단계별 절차 */}
          <div className="relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                  )}

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 bg-card border rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-primary">STEP {step.number}</span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 사업별 신청처 */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">사업별 신청처</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">노인일자리사업</h3>
                  <p className="text-muted-foreground text-sm">
                    센터 방문 또는 복지로 온라인 신청<br />
                    (매년 1~2월 집중 모집)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">노인맞춤돌봄서비스</h3>
                  <p className="text-muted-foreground text-sm">
                    읍면동 주민센터 또는 센터 방문 신청<br />
                    (상시 접수)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">치매예방관리사업</h3>
                  <p className="text-muted-foreground text-sm">
                    센터 방문 또는 전화 예약<br />
                    (상시 접수)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">독거노인 사회관계 활성화</h3>
                  <p className="text-muted-foreground text-sm">
                    센터 방문 또는 전화 상담<br />
                    (상시 접수)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 도움 안내 */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">신청이 어려우신가요?</h3>
            <p className="text-muted-foreground mb-6">
              센터 담당자가 신청 절차를 도와드립니다.<br />
              방문이 어려우신 경우 전화 상담도 가능합니다.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild size="lg">
                <Link href="/contact">
                  상담 신청
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/support">지원사업 목록 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
