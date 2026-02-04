import { GalleryItem } from '@/types';

export const gallery: GalleryItem[] = [
  {
    id: "gallery-001",
    title: "2025년 송년행사",
    description: "한 해를 마무리하는 송년 잔치에서 어르신들이 즐거운 시간을 보내셨습니다.",
    thumbnail: "/images/gallery/yearend-2025.jpg",
    images: [
      "/images/gallery/yearend-2025-1.jpg",
      "/images/gallery/yearend-2025-2.jpg",
      "/images/gallery/yearend-2025-3.jpg"
    ],
    date: "2025-12-20",
    category: "행사"
  },
  {
    id: "gallery-002",
    title: "제15기 요양보호사 수료식",
    description: "3개월간의 교육을 마치고 28명의 수료생이 탄생했습니다. 축하드립니다!",
    thumbnail: "/images/gallery/caregiver-grad.jpg",
    images: [
      "/images/gallery/caregiver-grad-1.jpg",
      "/images/gallery/caregiver-grad-2.jpg"
    ],
    date: "2025-11-28",
    category: "교육"
  },
  {
    id: "gallery-003",
    title: "가을 건강걷기대회",
    description: "맑은 가을 날씨 속에서 진행된 건강걷기대회 현장입니다.",
    thumbnail: "/images/gallery/walking-event.jpg",
    images: [
      "/images/gallery/walking-event-1.jpg",
      "/images/gallery/walking-event-2.jpg",
      "/images/gallery/walking-event-3.jpg"
    ],
    date: "2025-10-15",
    category: "행사"
  },
  {
    id: "gallery-004",
    title: "서예작품 전시회",
    description: "서예 교실 수강생들의 1년간 작품을 전시한 전시회입니다.",
    thumbnail: "/images/gallery/calligraphy-exhibit.jpg",
    images: [
      "/images/gallery/calligraphy-exhibit-1.jpg",
      "/images/gallery/calligraphy-exhibit-2.jpg"
    ],
    date: "2025-09-20",
    category: "교육"
  },
  {
    id: "gallery-005",
    title: "봄맞이 나들이",
    description: "벚꽃 피는 봄날, 인근 공원으로 나들이를 다녀왔습니다.",
    thumbnail: "/images/gallery/spring-outing.jpg",
    images: [
      "/images/gallery/spring-outing-1.jpg",
      "/images/gallery/spring-outing-2.jpg",
      "/images/gallery/spring-outing-3.jpg"
    ],
    date: "2025-04-10",
    category: "일상"
  },
  {
    id: "gallery-006",
    title: "2025 어버이날 행사",
    description: "어버이날을 맞아 지역 초등학생들과 함께한 특별한 행사입니다.",
    thumbnail: "/images/gallery/parents-day.jpg",
    images: [
      "/images/gallery/parents-day-1.jpg",
      "/images/gallery/parents-day-2.jpg"
    ],
    date: "2025-05-08",
    category: "행사"
  },
  {
    id: "gallery-007",
    title: "경로당 방문 봉사활동",
    description: "일자리사업 참여자들이 지역 경로당을 방문하여 봉사활동을 펼쳤습니다.",
    thumbnail: "/images/gallery/volunteer.jpg",
    images: [
      "/images/gallery/volunteer-1.jpg",
      "/images/gallery/volunteer-2.jpg"
    ],
    date: "2025-06-15",
    category: "일상"
  },
  {
    id: "gallery-008",
    title: "실버시터 1기 발대식",
    description: "첫 번째 실버시터 양성과정 수료생 20명의 발대식이 진행되었습니다.",
    thumbnail: "/images/gallery/silversitter-start.jpg",
    images: [
      "/images/gallery/silversitter-start-1.jpg",
      "/images/gallery/silversitter-start-2.jpg"
    ],
    date: "2025-07-20",
    category: "교육"
  }
];

export const galleryCategories = ['전체', '행사', '교육', '일상'] as const;

export function getGalleryById(id: string): GalleryItem | undefined {
  return gallery.find(item => item.id === id);
}

export function getGalleryByCategory(category: string): GalleryItem[] {
  if (category === '전체') return gallery;
  return gallery.filter(item => item.category === category);
}

export function getRecentGallery(count: number = 4): GalleryItem[] {
  return [...gallery]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
