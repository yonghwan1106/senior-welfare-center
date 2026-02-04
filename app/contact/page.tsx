'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Phone, Mail, MapPin, Clock, Send, MessageSquare, HelpCircle } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { location } from '@/data/organization';

const inquiryCategories = [
  { value: 'welfare', label: '복지서비스 문의' },
  { value: 'program', label: '교육프로그램 문의' },
  { value: 'certification', label: '자격증 문의' },
  { value: 'job', label: '일자리사업 문의' },
  { value: 'support', label: '정부지원사업 문의' },
  { value: 'other', label: '기타 문의' },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <>
        <PageTitle
          title="상담문의"
          breadcrumb={[{ label: '상담문의' }]}
        />
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-xl mx-auto text-center opacity-0-initial animate-scale-in">
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">상담 신청이 완료되었습니다</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.
              <br />
              긴급한 문의는 전화(<strong className="text-foreground">000-0000-0000</strong>)로 연락주세요.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="h-14 px-8 rounded-xl text-lg font-semibold">
                <Link href="/">홈으로</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-xl text-lg font-semibold border-2">
                <Link href="/contact/faq">자주 묻는 질문</Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageTitle
        title="상담문의"
        description="궁금한 점이 있으시면 언제든 문의해 주세요"
        breadcrumb={[{ label: '상담문의' }]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 연락처 정보 */}
            <div className="space-y-6 opacity-0-initial animate-slide-in-left">
              {/* 연락처 카드 */}
              <Card className="border-border/50 rounded-3xl overflow-hidden shadow-elegant">
                <div className="h-2 bg-gradient-to-r from-primary to-warm" />
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-warm/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-warm group-hover:text-warm-foreground transition-all">
                      <Phone className="w-6 h-6 text-warm group-hover:text-warm-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">전화 상담</h3>
                      <p className="text-xl font-bold text-primary">{location.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">이메일</h3>
                      <p className="text-primary">{location.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-earth/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-earth group-hover:text-earth-foreground transition-all">
                      <Clock className="w-6 h-6 text-earth group-hover:text-earth-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">운영시간</h3>
                      <p className="text-muted-foreground">{location.operatingHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-all">
                      <MapPin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">방문 상담</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{location.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ 안내 */}
              <Card className="border-border/50 rounded-3xl overflow-hidden shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">자주 묻는 질문</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    문의하시기 전에 자주 묻는 질문을 확인해 보세요.
                    궁금하신 내용을 빠르게 찾으실 수 있습니다.
                  </p>
                  <Button asChild variant="outline" className="w-full h-12 rounded-xl border-2 hover:border-primary hover:bg-primary/5">
                    <Link href="/contact/faq">FAQ 바로가기</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* 상담 신청 폼 */}
            <div className="lg:col-span-2 opacity-0-initial animate-slide-in-right delay-100">
              <Card className="border-border/50 rounded-3xl overflow-hidden shadow-elegant-lg">
                <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/5 to-transparent p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-elegant">
                      <MessageSquare className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">온라인 상담 신청</h2>
                      <p className="text-muted-foreground mt-1">
                        아래 정보를 입력해 주시면 담당자가 연락드립니다.
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">이름 *</label>
                        <Input
                          type="text"
                          placeholder="이름을 입력하세요"
                          required
                          className="h-14 rounded-xl border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">연락처 *</label>
                        <Input
                          type="tel"
                          placeholder="예: 010-1234-5678"
                          required
                          className="h-14 rounded-xl border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">이메일</label>
                        <Input
                          type="email"
                          placeholder="이메일 주소"
                          className="h-14 rounded-xl border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">문의 유형 *</label>
                        <Select required>
                          <SelectTrigger className="h-14 rounded-xl border-border/50">
                            <SelectValue placeholder="문의 유형을 선택하세요" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryCategories.map((cat) => (
                              <SelectItem key={cat.value} value={cat.value}>
                                {cat.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">제목 *</label>
                      <Input
                        type="text"
                        placeholder="문의 제목을 입력하세요"
                        required
                        className="h-14 rounded-xl border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">문의 내용 *</label>
                      <Textarea
                        placeholder="문의하실 내용을 자세히 적어주세요"
                        rows={6}
                        required
                        className="rounded-xl border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-muted/50 rounded-2xl">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">[필수]</strong> 개인정보 수집 및 이용에 동의합니다.
                        수집된 정보는 상담 처리 목적으로만 사용됩니다.
                      </label>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 md:p-8 pt-0">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-16 rounded-2xl text-lg font-semibold shadow-elegant btn-hover"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        '신청 중...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          상담 신청하기
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
