import Link from 'next/link';
import { Camera, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/common';
import { getRecentGallery } from '@/data/gallery';

export function GalleryPreview() {
  const gallery = getRecentGallery(4);

  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="갤러리"
          description="센터의 다양한 활동 모습을 확인하세요"
          href="/community/gallery"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((item, index) => (
            <Link
              key={item.id}
              href={`/community/gallery?id=${item.id}`}
              className={`group relative rounded-3xl overflow-hidden bg-muted opacity-0-initial animate-scale-in ${
                index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 그라데이션 배경 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-warm/20" />

              {/* 패턴 */}
              <div className="absolute inset-0 pattern-traditional opacity-30" />

              {/* 중앙 아이콘 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${
                  index === 0 ? 'w-24 h-24' : 'w-16 h-16'
                } bg-card/80 backdrop-blur-sm rounded-2xl shadow-elegant flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Camera className={`${
                    index === 0 ? 'w-12 h-12' : 'w-8 h-8'
                  } text-primary/60`} />
                </div>
              </div>

              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* 정보 */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <Badge className="mb-2 bg-primary/90 text-primary-foreground">
                  {item.category}
                </Badge>
                <h3 className={`font-bold text-white line-clamp-2 ${
                  index === 0 ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                }`}>
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mt-1">{item.date}</p>
              </div>

              {/* 호버 링 효과 */}
              <div className="absolute inset-2 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />

              {/* 코너 장식 */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity -rotate-45" />
              </div>
            </Link>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="mt-10 text-center opacity-0-initial animate-fade-in delay-500">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 px-8 rounded-2xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-lg font-medium"
          >
            <Link href="/community/gallery" className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              갤러리 더보기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
