import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, UserCheck, ClipboardCheck, Briefcase, ArrowRight } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '참여방법',
  description: '노인일자리사업 참여 방법과 절차를 안내합니다.',
};

const steps = [
  {
    number: 1,
    title: '자격 확인',
    description: '참여 자격 요건을 확인합니다.',
    icon: UserCheck,
    details: [
      '만 65세 이상 (사회서비스형은 만 60세 이상 가능)',
      '기초연금 수급자',
      '건강하게 활동 가능한 분',
    ],
  },
  {
    number: 2,
    title: '신청서 제출',
    description: '센터 방문 또는 읍면동 주민센터에서 신청합니다.',
    icon: FileText,
    details: ['신분증 지참', '기초연금 수급 확인서', '참여 신청서 작성'],
  },
  {
    number: 3,
    title: '선발 심사',
    description: '신청자 중 적합한 참여자를 선발합니다.',
    icon: ClipboardCheck,
    details: ['소득, 연령 등 우선순위 심사', '면접 진행 (해당 사업)', '참여자 선정 통보'],
  },
  {
    number: 4,
    title: '활동 시작',
    description: '오리엔테이션 후 일자리 활동을 시작합니다.',
    icon: Briefcase,
    details: ['사전 교육 참여', '활동 배치', '월별 활동비 지급'],
  },
];

export default function HowToPage() {
  return (
    <>
      <PageTitle
        title="참여방법"
        description="노인일자리사업 참여 절차를 안내해 드립니다"
        breadcrumb={[
          { label: '일자리센터', href: '/jobs' },
          { label: '참여방법' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 참여 자격 요약 */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-6">참여 자격</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-primary">공익활동형</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 만 65세 이상</li>
                    <li>• 기초연금 수급자</li>
                    <li>• 활동 가능한 건강 상태</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-primary">사회서비스형</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 만 65세 이상 (일부 60세 이상)</li>
                    <li>• 기초연금 수급자</li>
                    <li>• 관련 자격증 소지자 우대</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 단계별 절차 */}
          <h2 className="text-2xl font-bold mb-8">신청 절차</h2>
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

          {/* 구비서류 */}
          <div className="mt-12 bg-muted rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">구비서류</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 신분증 (주민등록증 또는 운전면허증)</li>
              <li>• 기초연금 수급 확인서 (주민센터 발급)</li>
              <li>• 통장 사본 (활동비 입금용)</li>
              <li>• 증명사진 1매</li>
            </ul>
          </div>

          {/* 신청 기간 */}
          <div className="mt-8 bg-secondary/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">신청 기간</h3>
            <p className="text-lg mb-2">
              <strong>정기 모집:</strong> 매년 1월~2월 (연초 집중 모집)
            </p>
            <p className="text-muted-foreground">
              ※ 결원 발생 시 수시 모집을 진행할 수 있습니다. 공지사항을 확인해 주세요.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg">
                <Link href="/contact">
                  참여 상담 신청
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/jobs">일자리 목록 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
