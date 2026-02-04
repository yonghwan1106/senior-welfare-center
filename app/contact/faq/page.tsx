'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, Phone, MessageSquare, Search } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { faqs, faqCategories } from '@/data/faq';

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = selectedCategory === '전체'
    ? faqs
    : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <>
      <PageTitle
        title="자주 묻는 질문"
        description="자주 문의하시는 질문들을 모았습니다"
        breadcrumb={[
          { label: '상담문의', href: '/contact' },
          { label: '자주 묻는 질문' },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center opacity-0-initial animate-fade-in-up">
            {faqCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenId(null);
                }}
                className={`rounded-full px-6 h-12 font-medium transition-all ${
                  selectedCategory === category
                    ? 'shadow-elegant'
                    : 'border-border/50 hover:border-primary/50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ 목록 */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`bg-card border border-border/50 rounded-2xl overflow-hidden shadow-elegant transition-all duration-300 opacity-0-initial animate-fade-in-up ${
                  openId === faq.id ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-start gap-4 p-5 md:p-6 text-left hover:bg-accent/30 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    openId === faq.id ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                        openId === faq.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {faq.category}
                      </span>
                    </div>
                    <h3 className={`font-bold text-lg pr-8 transition-colors ${
                      openId === faq.id ? 'text-primary' : 'text-foreground'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 transition-all ${
                    openId === faq.id ? 'bg-primary text-primary-foreground rotate-180' : 'bg-muted text-muted-foreground'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* 답변 */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-5 md:px-6 pb-6">
                    <div className="pl-16 pt-4 border-t border-border/50">
                      <div className="bg-muted/50 rounded-xl p-5">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 빈 결과 */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 opacity-0-initial animate-fade-in">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-xl font-bold text-foreground mb-2">
                해당 카테고리의 질문이 없습니다.
              </p>
              <p className="text-muted-foreground">다른 카테고리를 선택해 보세요.</p>
            </div>
          )}

          {/* 추가 문의 안내 */}
          <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-warm/10 rounded-3xl p-8 md:p-12 text-center opacity-0-initial animate-fade-in-up delay-500">
            <div className="absolute inset-0 pattern-traditional opacity-20" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                원하는 답변을 찾지 못하셨나요?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                센터로 직접 문의해 주시면 친절히 안내해 드리겠습니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-14 px-8 rounded-xl text-lg font-semibold shadow-elegant btn-hover">
                  <Link href="/contact">온라인 상담 신청</Link>
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
      </div>
    </>
  );
}
