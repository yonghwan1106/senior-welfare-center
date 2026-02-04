import { Metadata } from 'next';
import { Heart, Users, Activity, Smile, Target } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { purpose } from '@/data/organization';

export const metadata: Metadata = {
  title: '설립목적 및 비전',
  description: '노인단체 종합복지센터의 설립목적과 비전을 소개합니다.',
};

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Users,
  Activity,
  Smile,
};

export default function PurposePage() {
  return (
    <>
      <PageTitle
        title="설립목적 및 비전"
        description="어르신의 존엄성을 지키며 건강하고 행복한 노후를 지원합니다"
        breadcrumb={[
          { label: '센터소개', href: '/about' },
          { label: '설립목적 및 비전' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* 미션 & 비전 */}
          <section className="text-center">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-primary mb-4">우리의 사명</h2>
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                "{purpose.mission}"
              </p>
            </div>

            <div className="mt-8 bg-secondary/30 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-secondary-foreground mb-4">우리의 비전</h2>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                {purpose.vision}
              </p>
            </div>
          </section>

          {/* 핵심 가치 */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">핵심 가치</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {purpose.coreValues.map((value, index) => {
                const Icon = iconMap[value.icon] || Heart;
                return (
                  <div
                    key={index}
                    className="bg-card border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 목표 */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">운영 목표</h2>
            <div className="bg-card border rounded-2xl p-8">
              <ul className="space-y-4">
                {purpose.goals.map((goal, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-lg">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
