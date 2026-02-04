import { Metadata } from 'next';
import { Users, Building2 } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { organization } from '@/data/organization';

export const metadata: Metadata = {
  title: '조직도',
  description: '노인단체 종합복지센터의 조직 구성을 소개합니다.',
};

export default function OrganizationPage() {
  return (
    <>
      <PageTitle
        title="조직도"
        description="어르신을 위해 함께하는 우리 센터의 조직 구성입니다"
        breadcrumb={[
          { label: '센터소개', href: '/about' },
          { label: '조직도' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* 센터 정보 요약 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary/10 rounded-2xl p-6 text-center">
              <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">설립연도</p>
              <p className="text-2xl font-bold text-primary">{organization.established}년</p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">직원 수</p>
              <p className="text-2xl font-bold text-primary">{organization.totalStaff}명</p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">자원봉사자</p>
              <p className="text-2xl font-bold text-primary">{organization.volunteers}명</p>
            </div>
          </div>

          {/* 조직도 */}
          <div className="bg-card border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-10">조직 구성</h2>

            {/* 센터장 */}
            <div className="flex justify-center mb-8">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center min-w-[200px]">
                <h3 className="text-xl font-bold">센터장</h3>
                <p className="text-primary-foreground/80 mt-1">센터 총괄 운영 및 대외 협력</p>
              </div>
            </div>

            {/* 연결선 */}
            <div className="flex justify-center mb-8">
              <div className="w-0.5 h-12 bg-border" />
            </div>

            {/* 하위 부서 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {organization.departments.slice(1).map((dept, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-2xl p-5 text-center hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-bold text-foreground mb-2">{dept.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                  {dept.staff && (
                    <p className="text-primary font-medium">{dept.staff}명</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 부서별 주요 업무 */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">부서별 주요 업무</h2>
            <div className="space-y-4">
              {organization.departments.slice(1).map((dept, index) => (
                <div key={index} className="bg-card border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{dept.name}</h3>
                  <p className="text-foreground">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
