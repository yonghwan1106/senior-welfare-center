'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, Clock, GraduationCap, Sparkles, ArrowRight, Filter, Search } from 'lucide-react';
import Image from 'next/image';
import { PageTitle } from '@/components/common';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { programs, programCategories, programStatuses } from '@/data/programs';

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

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 필터 */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-8 mb-10 shadow-elegant opacity-0-initial animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Filter className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">프로그램 검색</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* 카테고리 필터 */}
            <div className="flex-1">
              <h4 className="font-semibold text-muted-foreground mb-4">분류별</h4>
              <div className="flex flex-wrap gap-2">
                {programCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`min-h-[44px] rounded-xl transition-all ${selectedCategory === category
                        ? 'shadow-elegant'
                        : 'hover:border-primary/50'
                      }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* 구분선 */}
            <div className="hidden lg:block w-px bg-border" />

            {/* 상태 필터 */}
            <div className="lg:w-72">
              <h4 className="font-semibold text-muted-foreground mb-4">상태별</h4>
              <div className="flex flex-wrap gap-2">
                {programStatuses.map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedStatus(status)}
                    className={`min-h-[44px] rounded-xl transition-all ${selectedStatus === status
                        ? 'shadow-elegant'
                        : 'hover:border-primary/50'
                      }`}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 결과 수 */}
        <div className="flex items-center justify-between mb-8 opacity-0-initial animate-fade-in delay-200">
          <p className="text-lg text-muted-foreground">
            총 <span className="text-2xl font-bold text-primary">{filteredPrograms.length}</span>개의 프로그램
          </p>
        </div>

        {/* 프로그램 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPrograms.map((program, index) => {
            const status = statusMap[program.status];
            const categoryColor = categoryColors[program.category] || categoryColors['취미'];

            return (
              <Card
                key={program.id}
                className="group overflow-hidden border-border/50 rounded-3xl card-hover bg-card opacity-0-initial animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* 이미지 영역 */}
                <div className="relative h-52 overflow-hidden bg-muted">
                  <Image
                    src={program.thumbnail}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <Badge className={`${status.className} shadow-sm`}>
                      {status.label}
                    </Badge>
                    <Badge variant="outline" className={`${categoryColor} border`}>
                      {program.category}
                    </Badge>
                  </div>

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

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <div>
                      {program.isFree ? (
                        <span className="inline-flex items-center gap-2 font-bold text-primary">
                          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                          무료
                        </span>
                      ) : (
                        <span className="font-bold text-foreground">유료</span>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      대상: {program.targetAge}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-5">
                  <Button
                    asChild
                    className={`w-full h-12 rounded-xl font-semibold btn-hover ${program.status === 'recruiting'
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

        {/* 빈 결과 */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-20 opacity-0-initial animate-fade-in">
            <div className="w-24 h-24 bg-muted rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-2">검색 결과가 없습니다</p>
            <p className="text-muted-foreground">다른 조건으로 검색해 보세요.</p>
          </div>
        )}
      </div>
    </>
  );
}
