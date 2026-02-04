'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { programs } from '@/data/programs';

function ApplyForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const programId = searchParams.get('id');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(programId || '');

  const recruitingPrograms = programs.filter((p) => p.status === 'recruiting');
  const selected = programs.find((p) => p.id === selectedProgram);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제로는 서버에 제출
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">신청이 완료되었습니다</h2>
          <p className="text-muted-foreground mb-8">
            담당자가 확인 후 연락드리겠습니다.<br />
            문의사항은 000-0000-0000으로 연락주세요.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/programs">프로그램 목록</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">홈으로</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">수강 신청서</h2>
            <p className="text-muted-foreground">
              아래 정보를 입력해 주세요. 담당자가 확인 후 연락드립니다.
            </p>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              {/* 프로그램 선택 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">신청 프로그램 *</label>
                <Select value={selectedProgram} onValueChange={setSelectedProgram} required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="프로그램을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {recruitingPrograms.map((program) => (
                      <SelectItem key={program.id} value={program.id}>
                        {program.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selected && (
                  <p className="text-sm text-muted-foreground">
                    {selected.schedule} | {selected.duration}
                  </p>
                )}
              </div>

              {/* 이름 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">이름 *</label>
                <Input
                  type="text"
                  placeholder="이름을 입력하세요"
                  required
                  className="h-12"
                />
              </div>

              {/* 생년월일 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">생년월일 *</label>
                <Input
                  type="text"
                  placeholder="예: 1960-01-01"
                  required
                  className="h-12"
                />
              </div>

              {/* 연락처 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">연락처 *</label>
                <Input
                  type="tel"
                  placeholder="예: 010-1234-5678"
                  required
                  className="h-12"
                />
              </div>

              {/* 주소 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">주소</label>
                <Input
                  type="text"
                  placeholder="주소를 입력하세요"
                  className="h-12"
                />
              </div>

              {/* 신청 동기 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">신청 동기</label>
                <Textarea
                  placeholder="프로그램에 신청하시는 이유를 간단히 적어주세요"
                  rows={4}
                />
              </div>

              {/* 개인정보 동의 */}
              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 w-5 h-5"
                />
                <label htmlFor="privacy" className="text-sm">
                  <strong>[필수]</strong> 개인정보 수집 및 이용에 동의합니다.
                  수집된 정보는 수강 신청 처리 목적으로만 사용됩니다.
                </label>
              </div>
            </CardContent>

            <CardFooter className="flex gap-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 h-14"
                disabled={isSubmitting || !selectedProgram}
              >
                {isSubmitting ? '신청 중...' : '신청하기'}
              </Button>
              <Button type="button" variant="outline" size="lg" className="h-14" asChild>
                <Link href="/programs">취소</Link>
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <>
      <PageTitle
        title="수강 신청"
        description="원하시는 프로그램에 수강 신청하세요"
        breadcrumb={[
          { label: '교육프로그램', href: '/programs' },
          { label: '수강 신청' },
        ]}
      />
      <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">로딩 중...</div>}>
        <ApplyForm />
      </Suspense>
    </>
  );
}
