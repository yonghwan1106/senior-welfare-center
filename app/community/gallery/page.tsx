'use client';

import { useState } from 'react';
import { Camera, X, Images, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PageTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { gallery, galleryCategories } from '@/data/gallery';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedItem, setSelectedItem] = useState<typeof gallery[0] | null>(null);

  const filteredGallery = selectedCategory === '전체'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  const currentIndex = selectedItem
    ? filteredGallery.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredGallery[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredGallery.length - 1) {
      setSelectedItem(filteredGallery[currentIndex + 1]);
    }
  };

  return (
    <>
      <PageTitle
        title="갤러리"
        description="센터의 다양한 활동 모습을 확인하세요"
        breadcrumb={[
          { label: '커뮤니티', href: '/community/notice' },
          { label: '갤러리' },
        ]}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8 opacity-0-initial animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Images className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">활동 갤러리</p>
              <p className="text-muted-foreground">총 {filteredGallery.length}개</p>
            </div>
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center opacity-0-initial animate-fade-in-up delay-100">
          {galleryCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 h-12 font-medium transition-all ${selectedCategory === category
                ? 'shadow-elegant'
                : 'border-border/50 hover:border-primary/50'
                }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredGallery.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square rounded-3xl overflow-hidden bg-muted text-left opacity-0-initial animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* 이미지 영역 */}
              <div className="absolute inset-0 bg-muted">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* 정보 */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <Badge className="mb-2 bg-primary/90 text-primary-foreground">
                  {item.category}
                </Badge>
                <h3 className="font-bold text-white line-clamp-2">{item.title}</h3>
                <p className="text-white/80 text-sm mt-1">{item.date}</p>
              </div>

              {/* 호버 링 효과 */}
              <div className="absolute inset-2 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />
            </button>
          ))}
        </div>

        {/* 라이트박스 */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-4 right-4 z-10 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* 이전 버튼 */}
            {currentIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* 다음 버튼 */}
            {currentIndex < filteredGallery.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* 콘텐츠 */}
            <div
              className="max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 이미지 영역 */}
              <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden">
                <Image
                  src={selectedItem.thumbnail}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* 정보 */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {selectedItem.category}
                  </Badge>
                  <span className="text-muted-foreground">{selectedItem.date}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">
                    {currentIndex + 1} / {filteredGallery.length}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {selectedItem.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
