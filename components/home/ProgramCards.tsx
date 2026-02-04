import Link from 'next/link';
import { Calendar, Users, Clock, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SectionTitle } from '@/components/common';
import { programs } from '@/data/programs';

const statusMap = {
  recruiting: { label: '모집중', className: 'bg-primary text-primary-foreground' },
  ongoing: { label: '진행중', className: 'bg-earth text-earth-foreground' },
  closed: { label: '마감', className: 'bg-muted text-muted-foreground' },
};

const categoryColors: Record<string, string> = {
  '자격증': 'bg-warm/10 text-warm border-warm/20',
  '건강': 'bg-primary/10 text-primary border-primary/20',
  '디지털': 'bg-earth/10 text-earth border-earth/20',
  '취미': 'bg-secondary text-secondary-foreground border-secondary',
  '사회참여': 'bg-primary/10 text-primary border-primary/20',
};

export function ProgramCards() {
  const featuredPrograms = programs
    .filter((p) => p.status !== 'closed')
    .slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-muted/30 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pattern-traditional opacity-30" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-warm/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="진행중인 프로그램"
          description="다양한 교육 프로그램에 참여하세요"
          href="/programs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPrograms.map((program, index) => {
            const status = statusMap[program.status];
            const categoryColor = categoryColors[program.category] || categoryColors['취미'];

            return (
              <Card
                key={program.id}
                className="group overflow-hidden border-border/50 rounded-3xl card-hover bg-card opacity-0-initial animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* 이미지 영역 */}
                <div className="relative h-52 bg-gradient-to-br from-primary/10 via-accent/10 to-warm/10 flex items-center justify-center overflow-hidden">
                  {/* 패턴 배경 */}
                  <div className="absolute inset-0 pattern-traditional opacity-30" />

                  {/* 장식 원들 */}
                  <div className="absolute top-4 left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-warm/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

                  {/* 아이콘 */}
                  <div className="relative z-10 w-20 h-20 bg-card/90 backdrop-blur-sm rounded-2xl shadow-elegant flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>

                  {/* 상단 배지들 */}
                  <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <Badge className={`${status.className} shadow-sm`}>
                      {status.label}
                    </Badge>
                    <Badge variant="outline" className={`${categoryColor} border`}>
                      {program.category}
                    </Badge>
                  </div>

                  {/* 정부지원 배지 */}
                  {program.governmentSupport && (
                    <Badge className="absolute top-4 right-4 bg-warm text-warm-foreground shadow-sm z-20">
                      <Sparkles className="w-3 h-3 mr-1" />
                      정부지원
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-3 pt-5">
                  <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {program.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-3 pb-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-warm" />
                    </div>
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-earth" />
                    </div>
                    <span>
                      정원 {program.capacity}명{' '}
                      <span className="text-primary font-medium">
                        (신청 {program.currentApplicants}명)
                      </span>
                    </span>
                  </div>

                  {/* 가격 */}
                  <div className="pt-3 border-t border-border/50">
                    {program.isFree ? (
                      <span className="inline-flex items-center gap-2 text-lg font-bold text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                        무료
                      </span>
                    ) : (
                      <span className="text-lg font-bold text-foreground">
                        수강료 별도
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-5">
                  <Button
                    asChild
                    className={`w-full h-12 rounded-xl font-semibold btn-hover ${
                      program.status === 'recruiting'
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Link href={`/programs/${program.id}`} className="flex items-center justify-center gap-2">
                      {program.status === 'recruiting' ? '신청하기' : '자세히 보기'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
