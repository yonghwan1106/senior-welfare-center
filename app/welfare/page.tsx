import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Activity, MessageCircle, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { welfareServices, welfareCategories } from '@/data/welfare';

export const metadata: Metadata = {
  title: '복지서비스',
  description: '돌봄서비스, 건강관리, 상담서비스 등 어르신을 위한 복지서비스를 안내합니다.',
};

const categoryConfig = {
  care: {
    icon: Heart,
    color: 'text-warm',
    bgColor: 'bg-warm/10',
    borderColor: 'border-warm/20',
  },
  health: {
    icon: Activity,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
  },
  counseling: {
    icon: MessageCircle,
    color: 'text-earth',
    bgColor: 'bg-earth/10',
    borderColor: 'border-earth/20',
  },
};

export default function WelfarePage() {
  return (
    <>
      <PageTitle
        title="복지서비스"
        description="어르신의 건강하고 안전한 생활을 위한 다양한 복지서비스를 제공합니다"
        breadcrumb={[{ label: '복지서비스' }]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 카테고리별 서비스 */}
        {Object.entries(welfareCategories).map(([key, label], categoryIndex) => {
          const categoryKey = key as keyof typeof categoryConfig;
          const config = categoryConfig[categoryKey];
          const Icon = config.icon;
          const services = welfareServices.filter((s) => s.category === key);

          return (
            <section
              key={key}
              className="mb-20 opacity-0-initial animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* 카테고리 헤더 */}
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-14 h-14 ${config.bgColor} rounded-2xl flex items-center justify-center shadow-elegant`}>
                  <Icon className={`w-7 h-7 ${config.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{label}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`w-8 h-1 rounded-full ${config.bgColor.replace('/10', '')}`} />
                    <span className="w-2 h-1 bg-muted rounded-full" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, index) => (
                  <Card
                    key={service.id}
                    className={`group overflow-hidden border-border/50 rounded-3xl card-hover opacity-0-initial animate-scale-in`}
                    style={{ animationDelay: `${(categoryIndex * 100) + (index * 80)}ms` }}
                  >
                    {/* 상단 장식 */}
                    <div className={`h-2 ${config.bgColor.replace('/10', '')} opacity-50`} />

                    <CardHeader className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${config.bgColor} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-6 h-6 ${config.color}`} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-start gap-3">
                          <span className={`text-sm font-semibold ${config.color} min-w-[60px]`}>대상</span>
                          <span className="text-foreground">{service.targetAudience}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className={`text-sm font-semibold ${config.color} min-w-[60px]`}>이용시간</span>
                          <span className="text-foreground">{service.schedule}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className={`text-sm font-semibold ${config.color} min-w-[60px]`}>비용</span>
                          <span className={`font-bold ${service.fee === '무료' ? 'text-primary' : 'text-foreground'}`}>
                            {service.fee}
                          </span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-2 pb-6">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full h-12 rounded-xl border-2 hover:border-primary hover:bg-primary/5 font-semibold group/btn"
                      >
                        <Link href="/contact" className="flex items-center justify-center gap-2">
                          신청 문의
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}

        {/* 하단 CTA */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-warm/10 rounded-3xl p-8 md:p-12 text-center opacity-0-initial animate-fade-in-up delay-500">
          {/* 배경 장식 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-warm/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              서비스 이용 안내
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              복지서비스 이용에 대한 자세한 상담을 원하시면
              <br className="hidden sm:block" />
              센터로 문의해 주세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="h-14 px-8 rounded-xl text-lg font-semibold shadow-elegant btn-hover">
                <Link href="/contact">
                  상담 신청하기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-xl text-lg font-semibold border-2"
              >
                <Link href="tel:000-0000-0000">
                  <Phone className="w-5 h-5 mr-2" />
                  전화 상담
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
