'use client';

import { useState } from 'react';
import { Camera, X } from 'lucide-react';
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

      <div className="container mx-auto px-4 py-12">
        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {galleryCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-muted text-left"
            >
              {/* 플레이스홀더 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Camera className="w-12 h-12 text-primary/50" />
              </div>

              {/* 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* 정보 */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <Badge className="mb-2">{item.category}</Badge>
                <h3 className="font-bold text-white line-clamp-1">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.date}</p>
              </div>

              {/* 호버 효과 */}
              <div className="absolute inset-0 ring-4 ring-primary ring-inset opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            </button>
          ))}
        </div>

        {/* 라이트박스 */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div
              className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 이미지 영역 */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Camera className="w-24 h-24 text-muted-foreground" />
              </div>

              {/* 정보 */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{selectedItem.category}</Badge>
                  <span className="text-muted-foreground">{selectedItem.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
                <p className="text-muted-foreground">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
