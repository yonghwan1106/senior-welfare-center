import { Metadata } from 'next';
import { Users, TrendingUp, Award, Briefcase } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '수료현황',
  description: '자격증 과정 수료 및 취업 현황을 안내합니다.',
};

const stats = [
  { label: '누적 수료생', value: '2,840', unit: '명', icon: Users },
  { label: '평균 취업률', value: '78', unit: '%', icon: Briefcase },
  { label: '자격증 취득률', value: '92', unit: '%', icon: Award },
  { label: '만족도', value: '4.7', unit: '점', icon: TrendingUp },
];

const yearlyData = [
  { year: 2025, caregiver: 120, sports: 45, silversitter: 80, counselor: 35 },
  { year: 2024, caregiver: 115, sports: 40, silversitter: 75, counselor: 30 },
  { year: 2023, caregiver: 108, sports: 38, silversitter: 60, counselor: 28 },
  { year: 2022, caregiver: 95, sports: 35, silversitter: 45, counselor: 25 },
];

export default function GraduatesPage() {
  return (
    <>
      <PageTitle
        title="수료현황"
        description="센터 자격증 과정 수료생 현황을 안내합니다"
        breadcrumb={[
          { label: '자격증안내', href: '/certification' },
          { label: '수료현황' },
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

          {/* 연도별 현황 */}
          <div className="bg-card border rounded-2xl overflow-hidden">
            <div className="p-6 bg-muted/50">
              <h2 className="text-xl font-bold">연도별 수료 현황</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">연도</th>
                    <th className="px-6 py-4 text-center font-bold">요양보호사</th>
                    <th className="px-6 py-4 text-center font-bold">노인체육지도사</th>
                    <th className="px-6 py-4 text-center font-bold">실버시터</th>
                    <th className="px-6 py-4 text-center font-bold">노인심리상담사</th>
                    <th className="px-6 py-4 text-center font-bold">합계</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {yearlyData.map((data) => {
                    const total = data.caregiver + data.sports + data.silversitter + data.counselor;
                    return (
                      <tr key={data.year} className="hover:bg-muted/20">
                        <td className="px-6 py-4 font-medium">{data.year}년</td>
                        <td className="px-6 py-4 text-center">{data.caregiver}명</td>
                        <td className="px-6 py-4 text-center">{data.sports}명</td>
                        <td className="px-6 py-4 text-center">{data.silversitter}명</td>
                        <td className="px-6 py-4 text-center">{data.counselor}명</td>
                        <td className="px-6 py-4 text-center font-bold text-primary">{total}명</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 취업 연계 현황 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">주요 취업 분야</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>요양원/요양병원</span>
                    <span className="font-bold text-primary">42%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>재가요양기관</span>
                    <span className="font-bold text-primary">28%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>복지관/경로당</span>
                    <span className="font-bold text-primary">18%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>아동돌봄시설</span>
                    <span className="font-bold text-primary">12%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">수료생 후기</h3>
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "60세에 새로운 도전을 시작했는데, 덕분에 요양원에서 보람있게 일하고 있습니다."
                    <footer className="text-sm mt-1 not-italic">- 요양보호사 15기 김OO</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "손주들과 함께하는 실버시터 활동이 정말 즐거워요!"
                    <footer className="text-sm mt-1 not-italic">- 실버시터 1기 박OO</footer>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
