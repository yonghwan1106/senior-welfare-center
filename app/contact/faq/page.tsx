'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {faqCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenId(null);
                }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ 목록 */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-card border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-start gap-4 p-6 text-left hover:bg-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg pr-8">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 mt-2 transition-transform ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openId === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="pl-14 pt-4 border-t">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 빈 결과 */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">해당 카테고리의 질문이 없습니다.</p>
            </div>
          )}

          {/* 추가 문의 안내 */}
          <div className="mt-12 bg-muted rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">원하는 답변을 찾지 못하셨나요?</h3>
            <p className="text-muted-foreground mb-6">
              센터로 직접 문의해 주시면 친절히 안내해 드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">온라인 상담 신청</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                전화 상담: 000-0000-0000
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
