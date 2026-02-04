import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Users, Clock, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { programs, getProgramById } from '@/data/programs';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const program = getProgramById(id);
  if (!program) return { title: '프로그램을 찾을 수 없습니다' };

  return {
    title: program.title,
    description: program.description,
  };
}

const statusMap = {
  recruiting: { label: '모집중', variant: 'default' as const },
  ongoing: { label: '진행중', variant: 'secondary' as const },
  closed: { label: '마감', variant: 'outline' as const },
};

export default async function ProgramDetailPage({ params }: Props) {
  const { id } = await params;
  const program = getProgramById(id);

  if (!program) {
    notFound();
  }

  const status = statusMap[program.status];

  return (
    <>
      <PageTitle
        title={program.title}
        breadcrumb={[
          { label: '교육프로그램', href: '/programs' },
          { label: program.title },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 프로그램 헤더 */}
          <div className="bg-card border rounded-2xl overflow-hidden mb-8">
            {/* 이미지 영역 */}
            {/* 이미지 영역 */}
            <div className="relative h-64 bg-muted">
              <div className="absolute inset-0">
                <img
                  src={program.thumbnail}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <Badge variant={status.variant} className="text-base px-4 py-1">
                  {status.label}
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-1 bg-white/20 backdrop-blur-sm text-white border-white/40">
                  {program.category}
                </Badge>
              </div>
              {program.governmentSupport && (
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-base px-4 py-1 z-10">
                  정부지원
                </Badge>
              )}
            </div>

            {/* 프로그램 정보 */}
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{program.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{program.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">교육기간</p>
                        <p className="font-medium">{program.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">교육일정</p>
                        <p className="font-medium">{program.schedule}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">모집 현황</p>
                        <p className="font-medium">
                          {program.currentApplicants} / {program.capacity}명
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">대상</p>
                        <p className="font-medium">{program.targetAge}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 비용 정보 */}
              <div className="mt-8 p-6 bg-muted rounded-xl">
                <h3 className="font-bold mb-2">수강료</h3>
                <p className="text-2xl font-bold text-primary">
                  {program.isFree ? '무료' : '유료 (상담 필요)'}
                </p>
                {program.governmentSupport && (
                  <p className="text-sm text-muted-foreground mt-2">
                    * 정부지원 대상 프로그램입니다. 자부담 금액은 상담을 통해 확인하세요.
                  </p>
                )}
              </div>

              {/* 신청 버튼 */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {program.status === 'recruiting' ? (
                  <Button asChild size="lg" className="text-lg h-14 flex-1">
                    <Link href={`/programs/apply?id=${program.id}`}>
                      수강 신청하기
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                ) : (
                  <Button disabled size="lg" className="text-lg h-14 flex-1">
                    {program.status === 'ongoing' ? '진행중인 프로그램입니다' : '모집이 마감되었습니다'}
                  </Button>
                )}
                <Button asChild variant="outline" size="lg" className="text-lg h-14">
                  <Link href="/contact">문의하기</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* 목록으로 */}
          <div className="text-center">
            <Button asChild variant="ghost">
              <Link href="/programs">← 프로그램 목록으로</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
