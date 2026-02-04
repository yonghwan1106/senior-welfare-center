import { Metadata } from 'next';
import Link from 'next/link';
import { ClipboardList, BookOpen, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '취득절차',
  description: '자격증 취득을 위한 단계별 절차를 안내합니다.',
};

const steps = [
  {
    number: 1,
    title: '상담 및 접수',
    description: '센터 방문 또는 전화 상담 후 원하는 자격증 과정에 접수합니다.',
    icon: ClipboardList,
    details: ['본인 확인 서류 지참', '수강료 안내 (무료/유료)', '교육 일정 확인'],
  },
  {
    number: 2,
    title: '교육 이수',
    description: '정해진 교육과정을 성실히 이수합니다.',
    icon: BookOpen,
    details: ['이론 교육', '실기 교육', '현장 실습 (해당 과정)'],
  },
  {
    number: 3,
    title: '자격 시험',
    description: '교육 이수 후 자격 시험에 응시합니다.',
    icon: GraduationCap,
    details: ['필기시험 (해당 자격)', '실기시험 (해당 자격)', '국가시험 접수 지원'],
  },
  {
    number: 4,
    title: '자격증 취득',
    description: '시험 합격 후 자격증을 발급받습니다.',
    icon: Award,
    details: ['자격증 발급 신청', '취업 연계 서비스', '수료증 발급'],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageTitle
        title="취득절차"
        description="자격증 취득까지의 단계별 과정을 안내해 드립니다"
        breadcrumb={[
          { label: '자격증안내', href: '/certification' },
          { label: '취득절차' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 단계별 안내 */}
          <div className="relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* 연결선 */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                  )}

                  {/* 아이콘 */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* 내용 */}
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

          {/* 참고 사항 */}
          <div className="mt-12 bg-muted rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">참고 사항</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 자격증 종류에 따라 교육 기간과 절차가 다를 수 있습니다.</li>
              <li>• 국가자격(요양보호사)은 국가시험 합격이 필요합니다.</li>
              <li>• 민간자격은 센터 자체 평가 또는 협회 시험을 통해 취득합니다.</li>
              <li>• 정부지원 대상자는 교육비 감면 혜택을 받을 수 있습니다.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              지금 바로 자격증 취득을 시작하세요!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg">
                <Link href="/certification">
                  자격증 종류 보기
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">상담 신청</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
