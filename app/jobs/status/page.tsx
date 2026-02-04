import { Metadata } from 'next';
import { Users, TrendingUp, Wallet, Award } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '활동현황',
  description: '노인일자리사업 참여 및 활동 현황을 안내합니다.',
};

const stats = [
  { label: '2025년 참여자', value: '480', unit: '명', icon: Users },
  { label: '누적 참여자', value: '3,200', unit: '명+', icon: TrendingUp },
  { label: '연간 활동비 지급', value: '18.5', unit: '억원', icon: Wallet },
  { label: '우수기관 선정', value: '3', unit: '회', icon: Award },
];

const yearlyParticipants = [
  { year: 2025, public: 250, social: 150, market: 80 },
  { year: 2024, public: 230, social: 140, market: 75 },
  { year: 2023, public: 210, social: 120, market: 60 },
  { year: 2022, public: 190, social: 100, market: 50 },
];

export default function JobStatusPage() {
  return (
    <>
      <PageTitle
        title="활동현황"
        description="센터 노인일자리사업 참여 현황을 안내합니다"
        breadcrumb={[
          { label: '일자리센터', href: '/jobs' },
          { label: '활동현황' },
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

          {/* 연도별 참여 현황 */}
          <div className="bg-card border rounded-2xl overflow-hidden mb-12">
            <div className="p-6 bg-muted/50">
              <h2 className="text-xl font-bold">연도별 참여 현황</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">연도</th>
                    <th className="px-6 py-4 text-center font-bold">공익활동형</th>
                    <th className="px-6 py-4 text-center font-bold">사회서비스형</th>
                    <th className="px-6 py-4 text-center font-bold">시장형</th>
                    <th className="px-6 py-4 text-center font-bold">합계</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {yearlyParticipants.map((data) => {
                    const total = data.public + data.social + data.market;
                    return (
                      <tr key={data.year} className="hover:bg-muted/20">
                        <td className="px-6 py-4 font-medium">{data.year}년</td>
                        <td className="px-6 py-4 text-center">{data.public}명</td>
                        <td className="px-6 py-4 text-center">{data.social}명</td>
                        <td className="px-6 py-4 text-center">{data.market}명</td>
                        <td className="px-6 py-4 text-center font-bold text-primary">{total}명</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 주요 활동 내용 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">공익활동형</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 마을 환경정화 활동</li>
                  <li>• 스쿨존 교통안전 지킴이</li>
                  <li>• 공공시설 관리 보조</li>
                  <li>• 경로당 급식 도우미</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">사회서비스형</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 노노케어 (노인 돌봄)</li>
                  <li>• 아이돌봄 지원</li>
                  <li>• 장애인 활동 보조</li>
                  <li>• 취약계층 생활지원</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">시장형</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 공예품 제작 판매</li>
                  <li>• 세탁/수선 서비스</li>
                  <li>• 카페/매점 운영</li>
                  <li>• 주차장 관리</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 참여자 후기 */}
          <div className="bg-muted rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6">참여자 후기</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <blockquote className="bg-card rounded-xl p-6">
                <p className="italic text-muted-foreground mb-4">
                  "매일 아침 환경정화 활동을 하면서 건강도 챙기고 용돈도 벌어요.
                  이웃들과 함께하니 외롭지 않아서 좋습니다."
                </p>
                <footer className="font-medium">
                  - 공익활동형 참여자 이OO (68세)
                </footer>
              </blockquote>
              <blockquote className="bg-card rounded-xl p-6">
                <p className="italic text-muted-foreground mb-4">
                  "혼자 사시는 어르신을 돌보는 일이 보람있어요.
                  제가 도움을 드리면서 오히려 제가 더 많이 받는 것 같아요."
                </p>
                <footer className="font-medium">
                  - 노노케어 참여자 김OO (70세)
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
