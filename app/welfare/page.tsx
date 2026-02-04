import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Activity, MessageCircle, ArrowRight } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { welfareServices, welfareCategories } from '@/data/welfare';

export const metadata: Metadata = {
  title: '복지서비스',
  description: '돌봄서비스, 건강관리, 상담서비스 등 어르신을 위한 복지서비스를 안내합니다.',
};

const categoryIcons = {
  care: Heart,
  health: Activity,
  counseling: MessageCircle,
};

export default function WelfarePage() {
  return (
    <>
      <PageTitle
        title="복지서비스"
        description="어르신의 건강하고 안전한 생활을 위한 다양한 복지서비스를 제공합니다"
        breadcrumb={[{ label: '복지서비스' }]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* 카테고리별 서비스 */}
        {Object.entries(welfareCategories).map(([key, label]) => {
          const categoryKey = key as keyof typeof categoryIcons;
          const Icon = categoryIcons[categoryKey];
          const services = welfareServices.filter((s) => s.category === key);

          return (
            <section key={key} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{label}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>대상:</strong> {service.targetAudience}</p>
                        <p><strong>이용시간:</strong> {service.schedule}</p>
                        <p><strong>비용:</strong> {service.fee}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/contact">
                          신청 문의
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}

        {/* 안내 */}
        <div className="bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">서비스 이용 안내</h3>
          <p className="text-muted-foreground mb-6">
            복지서비스 이용에 대한 자세한 상담을 원하시면 센터로 문의해 주세요.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">상담 신청하기</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
