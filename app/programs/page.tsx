'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, Clock, GraduationCap } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { programs, programCategories, programStatuses } from '@/data/programs';

const statusMap = {
  recruiting: { label: '모집중', variant: 'default' as const },
  ongoing: { label: '진행중', variant: 'secondary' as const },
  closed: { label: '마감', variant: 'outline' as const },
};

const statusFilter: Record<string, string | null> = {
  '전체': null,
  '모집중': 'recruiting',
  '진행중': 'ongoing',
  '마감': 'closed',
};

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedStatus, setSelectedStatus] = useState<string>('전체');

  const filteredPrograms = programs.filter((program) => {
    const categoryMatch = selectedCategory === '전체' || program.category === selectedCategory;
    const statusMatch = selectedStatus === '전체' || program.status === statusFilter[selectedStatus];
    return categoryMatch && statusMatch;
  });

  return (
    <>
      <PageTitle
        title="교육프로그램"
        description="어르신을 위한 다양한 교육 프로그램에 참여하세요"
        breadcrumb={[{ label: '교육프로그램' }]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* 필터 */}
        <div className="bg-card border rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* 카테고리 필터 */}
            <div className="flex-1">
              <h3 className="font-bold mb-3">분류</h3>
              <div className="flex flex-wrap gap-2">
                {programCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="min-h-[40px]"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* 상태 필터 */}
            <div className="md:w-64">
              <h3 className="font-bold mb-3">상태</h3>
              <div className="flex flex-wrap gap-2">
                {programStatuses.map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedStatus(status)}
                    className="min-h-[40px]"
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 프로그램 결과 수 */}
        <p className="text-muted-foreground mb-6">
          총 <strong className="text-foreground">{filteredPrograms.length}</strong>개의 프로그램
        </p>

        {/* 프로그램 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => {
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
                    <span className="text-sm text-muted-foreground ml-2">
                      | 대상: {program.targetAge}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    asChild
                    className="w-full"
                    variant={program.status === 'recruiting' ? 'default' : 'outline'}
                  >
                    <Link href={`/programs/${program.id}`}>
                      {program.status === 'recruiting' ? '신청하기' : '자세히 보기'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* 빈 결과 */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16">
            <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">해당 조건의 프로그램이 없습니다.</p>
          </div>
        )}
      </div>
    </>
  );
}
