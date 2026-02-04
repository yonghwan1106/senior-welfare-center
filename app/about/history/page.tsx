import { Metadata } from 'next';
import { Calendar } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { history } from '@/data/organization';

export const metadata: Metadata = {
  title: '연혁',
  description: '노인단체 종합복지센터의 역사와 주요 연혁을 소개합니다.',
};

export default function HistoryPage() {
  return (
    <>
      <PageTitle
        title="연혁"
        description="2010년 설립 이래 어르신과 함께한 발자취입니다"
        breadcrumb={[
          { label: '센터소개', href: '/about' },
          { label: '연혁' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 타임라인 */}
          <div className="relative">
            {/* 세로 라인 */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {history.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 연도 표시 */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* 내용 카드 */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {item.year}년
                    </h3>
                    <ul className="space-y-2">
                      {item.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                          <span className="text-foreground">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
