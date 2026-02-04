import { Program } from '@/types';

export const programs: Program[] = [
  {
    id: "prog-001",
    title: "요양보호사 자격증 과정",
    category: "자격증",
    description: "국가공인 요양보호사 자격증 취득을 위한 240시간 교육과정입니다. 이론 80시간, 실기 80시간, 실습 80시간으로 구성됩니다.",
    thumbnail: "/images/programs/caregiver.svg",
    duration: "3개월 (240시간)",
    schedule: "월~금 09:00~13:00",
    capacity: 30,
    currentApplicants: 25,
    status: "recruiting",
    isFree: false,
    governmentSupport: true,
    targetAge: "만 60세 이상"
  },
  {
    id: "prog-002",
    title: "노인체육지도사 과정",
    category: "자격증",
    description: "노인 맞춤형 체육 프로그램을 기획하고 지도할 수 있는 전문 지도자 양성과정입니다.",
    thumbnail: "/images/programs/sports.jpg",
    duration: "2개월 (60시간)",
    schedule: "화, 목 14:00~17:00",
    capacity: 20,
    currentApplicants: 15,
    status: "recruiting",
    isFree: true,
    governmentSupport: true,
    targetAge: "만 55세 이상"
  },
  {
    id: "prog-003",
    title: "실버체조 교실",
    category: "건강",
    description: "관절과 근력 강화를 위한 맞춤형 실버체조 프로그램입니다. 전문 강사와 함께 건강한 노후를 준비하세요.",
    thumbnail: "/images/programs/exercise.jpg",
    duration: "상시 운영",
    schedule: "월, 수, 금 10:00~11:00",
    capacity: 40,
    currentApplicants: 35,
    status: "ongoing",
    isFree: true,
    governmentSupport: false,
    targetAge: "만 60세 이상"
  },
  {
    id: "prog-004",
    title: "건강걷기 프로그램",
    category: "건강",
    description: "지역 공원과 산책로를 활용한 건강걷기 프로그램입니다. 걷기 지도사와 함께 안전하게 걸어요.",
    thumbnail: "/images/programs/walking.jpg",
    duration: "상시 운영",
    schedule: "화, 목 09:00~10:30",
    capacity: 30,
    currentApplicants: 28,
    status: "ongoing",
    isFree: true,
    governmentSupport: false,
    targetAge: "만 60세 이상"
  },
  {
    id: "prog-005",
    title: "스마트폰 기초반",
    category: "디지털",
    description: "스마트폰 기본 사용법부터 카카오톡, 사진 촬영까지 배우는 디지털 교육 프로그램입니다.",
    thumbnail: "/images/programs/smartphone.jpg",
    duration: "1개월 (8회)",
    schedule: "월, 수 14:00~16:00",
    capacity: 15,
    currentApplicants: 15,
    status: "closed",
    isFree: true,
    governmentSupport: true,
    targetAge: "만 60세 이상"
  },
  {
    id: "prog-006",
    title: "키오스크 활용 교실",
    category: "디지털",
    description: "무인 주문기(키오스크) 사용법을 실습과 함께 배우는 과정입니다. 패스트푸드점, 영화관, 병원 등 다양한 상황을 연습합니다.",
    thumbnail: "/images/programs/kiosk.jpg",
    duration: "2주 (4회)",
    schedule: "금 10:00~12:00",
    capacity: 10,
    currentApplicants: 8,
    status: "recruiting",
    isFree: true,
    governmentSupport: true,
    targetAge: "만 60세 이상"
  },
  {
    id: "prog-007",
    title: "서예 교실",
    category: "취미",
    description: "붓글씨의 기초부터 작품 완성까지, 마음을 다스리는 서예 교실입니다.",
    thumbnail: "/images/programs/calligraphy.jpg",
    duration: "3개월 (12회)",
    schedule: "수 14:00~16:00",
    capacity: 15,
    currentApplicants: 12,
    status: "ongoing",
    isFree: false,
    governmentSupport: false,
    targetAge: "만 60세 이상"
  },
  {
    id: "prog-008",
    title: "실버시터 양성과정",
    category: "사회참여",
    description: "손주 돌봄 및 아동 교육 활동을 위한 실버시터 양성 교육과정입니다. 수료 후 일자리 연계가 가능합니다.",
    thumbnail: "/images/programs/silversitter.jpg",
    duration: "1개월 (40시간)",
    schedule: "월~금 10:00~14:00 (2주)",
    capacity: 20,
    currentApplicants: 18,
    status: "recruiting",
    isFree: true,
    governmentSupport: true,
    targetAge: "만 55세~70세"
  }
];

export const programCategories = ['전체', '자격증', '건강', '디지털', '취미', '사회참여'] as const;
export const programStatuses = ['전체', '모집중', '진행중', '마감'] as const;

export function getProgramById(id: string): Program | undefined {
  return programs.find(program => program.id === id);
}

export function getProgramsByCategory(category: string): Program[] {
  if (category === '전체') return programs;
  return programs.filter(program => program.category === category);
}

export function getProgramsByStatus(status: string): Program[] {
  if (status === '전체') return programs;
  const statusMap: Record<string, Program['status']> = {
    '모집중': 'recruiting',
    '진행중': 'ongoing',
    '마감': 'closed'
  };
  return programs.filter(program => program.status === statusMap[status]);
}
