import { Metadata } from 'next';
import { Users, TrendingUp, Heart, Building2 } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '지원현황',
  description: '정부지원사업 수혜 현황을 안내합니다.',
};

const stats = [
  { label: '2025년 수혜자', value: '1,250', unit: '명', icon: Users },
  { label: '누적 수혜자', value: '8,500', unit: '명+', icon: TrendingUp },
  { label: '돌봄서비스 이용자', value: '320', unit: '명', icon: Heart },
  { label: '연계 기관', value: '15', unit: '개소', icon: Building2 },
];

const programStats = [
  {
    name: '노인일자리사업',
    data: [
      { year: 2025, count: 480 },
      { year: 2024, count: 445 },
      { year: 2023, count: 390 },
    ],
  },
  {
    name: '노인맞춤돌봄서비스',
    data: [
      { year: 2025, count: 320 },
      { year: 2024, count: 285 },
      { year: 2023, count: 250 },
    ],
  },
  {
    name: '치매예방관리사업',
    data: [
      { year: 2025, count: 380 },
      { year: 2024, count: 340 },
      { year: 2023, count: 300 },
    ],
  },
  {
    name: '독거노인 사회관계 활성화',
    data: [
      { year: 2025, count: 70 },
      { year: 2024, count: 60 },
      { year: 2023, count: 45 },
    ],
  },
];

export default function SupportStatusPage() {
  return (
    <>
      <PageTitle
        title="지원현황"
        description="센터 정부지원사업 수혜 현황을 안내합니다"
        breadcrumb={[
          { label: '정부지원사업', href: '/support' },
          { label: '지원현황' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* 통계 카드 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label}>
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-primary">
                      {stat.value}
                      <span className="text-lg">{stat.unit}</span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* 사업별 현황 */}
          <h2 className="text-2xl font-bold mb-6">사업별 수혜 현황</h2>
          <div className="space-y-6">
            {programStats.map((program) => (
              <Card key={program.name}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">{program.name}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {program.data.map((d) => (
                      <div key={d.year} className="text-center p-4 bg-muted rounded-xl">
                        <p className="text-sm text-muted-foreground">{d.year}년</p>
                        <p className="text-2xl font-bold text-primary">{d.count}명</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 연계 기관 */}
          <div className="mt-12 bg-muted rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">주요 연계 기관</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                '보건복지부',
                'OOO시청',
                '국민건강보험공단',
                '치매안심센터',
                '지역 요양원',
                '지역 병원',
                '주민센터',
                '대한노인회',
                '자원봉사센터',
                '고용노동부',
              ].map((org) => (
                <div
                  key={org}
                  className="bg-card rounded-lg p-4 text-center text-sm font-medium"
                >
                  {org}
                </div>
              ))}
            </div>
          </div>

          {/* 수혜자 후기 */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">수혜자 후기</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <blockquote className="italic text-muted-foreground mb-4">
                    "혼자 살면서 외로웠는데, 돌봄서비스 덕분에 정기적으로 안부를 확인받고
                    건강관리도 받으니 든든해요."
                  </blockquote>
                  <footer className="font-medium">
                    - 노인맞춤돌봄서비스 이용자 박OO (78세)
                  </footer>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <blockquote className="italic text-muted-foreground mb-4">
                    "치매예방 프로그램에 참여하면서 두뇌도 건강해지고,
                    함께하는 친구들도 생겼어요."
                  </blockquote>
                  <footer className="font-medium">
                    - 치매예방관리사업 참여자 이OO (72세)
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
