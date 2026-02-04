import Link from 'next/link';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/common';
import { getRecentGallery } from '@/data/gallery';

export function GalleryPreview() {
  const gallery = getRecentGallery(4);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="갤러리"
          description="센터의 다양한 활동 모습을 확인하세요"
          href="/community/gallery"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <Link
              key={item.id}
              href={`/community/gallery?id=${item.id}`}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-muted"
            >
              {/* 플레이스홀더 이미지 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Camera className="w-12 h-12 text-primary/50" />
              </div>

              {/* 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* 정보 */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <Badge className="mb-2">{item.category}</Badge>
                <h3 className="font-bold text-white text-lg line-clamp-1">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.date}</p>
              </div>

              {/* 호버 효과 */}
              <div className="absolute inset-0 ring-4 ring-primary ring-inset opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
