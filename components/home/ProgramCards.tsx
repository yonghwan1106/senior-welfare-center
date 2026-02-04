import Link from 'next/link';
import { Calendar, Users, Clock, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SectionTitle } from '@/components/common';
import { programs } from '@/data/programs';

const statusMap = {
  recruiting: { label: '모집중', variant: 'default' as const },
  ongoing: { label: '진행중', variant: 'secondary' as const },
  closed: { label: '마감', variant: 'outline' as const },
};

export function ProgramCards() {
  // 모집중인 프로그램 우선, 최대 3개
  const featuredPrograms = programs
    .filter((p) => p.status !== 'closed')
    .slice(0, 3);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="진행중인 프로그램"
          description="다양한 교육 프로그램에 참여하세요"
          href="/programs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPrograms.map((program) => {
            const status = statusMap[program.status];
            return (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {/* 이미지 영역 */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-primary/50" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant={status.variant}>{status.label}</Badge>
                    <Badge variant="outline">{program.category}</Badge>
                  </div>
                  {program.governmentSupport && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      정부지원
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-xl font-bold line-clamp-1">{program.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{program.description}</p>
                </CardHeader>

                <CardContent className="space-y-3 pb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>
                      정원 {program.capacity}명 (신청 {program.currentApplicants}명)
                    </span>
                  </div>
                  <div className="pt-2">
                    {program.isFree ? (
                      <span className="text-primary font-bold">무료</span>
                    ) : (
                      <span className="text-foreground font-bold">유료</span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button asChild className="w-full" variant={program.status === 'recruiting' ? 'default' : 'outline'}>
                    <Link href={`/programs/${program.id}`}>
                      {program.status === 'recruiting' ? '신청하기' : '자세히 보기'}
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
