import { WelfareService } from '@/types';

export const welfareServices: WelfareService[] = [
  // 돌봄서비스
  {
    id: "welfare-001",
    title: "노인맞춤돌봄서비스",
    category: "care",
    description: "독거노인, 취약노인을 대상으로 안전확인, 생활지원, 사회참여 등 맞춤형 돌봄서비스를 제공합니다.",
    targetAudience: "만 65세 이상 독거/조손가구, 기초연금 수급자",
    schedule: "월~금 09:00~18:00 (서비스별 상이)",
    fee: "무료",
    howToApply: "센터 방문 또는 읍면동 주민센터 신청"
  },
  {
    id: "welfare-002",
    title: "재가복지서비스",
    category: "care",
    description: "거동이 불편한 어르신 가정을 방문하여 가사지원, 활동지원 등의 서비스를 제공합니다.",
    targetAudience: "만 65세 이상 거동불편 노인",
    schedule: "주 1~3회 방문",
    fee: "소득수준에 따라 차등",
    howToApply: "센터 방문 상담 후 신청"
  },
  {
    id: "welfare-003",
    title: "주간보호서비스",
    category: "care",
    description: "낮 시간 동안 센터에서 어르신을 보호하며, 식사, 건강관리, 여가활동 등을 제공합니다.",
    targetAudience: "장기요양등급 인정자",
    schedule: "월~금 09:00~18:00",
    fee: "장기요양보험 적용 (본인부담금 발생)",
    howToApply: "장기요양등급 인정 후 이용 신청"
  },
  // 건강관리
  {
    id: "welfare-004",
    title: "무료 건강검진",
    category: "health",
    description: "혈압, 혈당, 콜레스테롤, 골밀도 등 기본 건강검진을 무료로 제공합니다.",
    targetAudience: "만 60세 이상 센터 이용자",
    schedule: "분기 1회 실시 (공지 참조)",
    fee: "무료",
    howToApply: "센터 방문 또는 전화 신청"
  },
  {
    id: "welfare-005",
    title: "치매예방 프로그램",
    category: "health",
    description: "치매선별검사, 인지훈련 프로그램, 치매예방교실을 운영합니다.",
    targetAudience: "만 60세 이상 지역주민",
    schedule: "상시 운영 (프로그램별 상이)",
    fee: "무료",
    howToApply: "센터 방문 또는 전화 예약"
  },
  {
    id: "welfare-006",
    title: "물리치료/작업치료",
    category: "health",
    description: "관절, 근력 강화를 위한 물리치료와 일상생활 능력 향상을 위한 작업치료를 제공합니다.",
    targetAudience: "재활이 필요한 어르신",
    schedule: "월~금 (예약제)",
    fee: "소득수준에 따라 차등",
    howToApply: "센터 방문 상담 후 예약"
  },
  // 상담
  {
    id: "welfare-007",
    title: "심리상담 서비스",
    category: "counseling",
    description: "우울, 불안, 고독감 등 어르신의 정서적 어려움에 대한 전문 상담을 제공합니다.",
    targetAudience: "상담이 필요한 어르신 및 가족",
    schedule: "월~금 (예약제)",
    fee: "무료",
    howToApply: "전화 또는 방문 예약"
  },
  {
    id: "welfare-008",
    title: "복지상담 서비스",
    category: "counseling",
    description: "각종 복지서비스, 정부지원사업 안내 및 연계 상담을 제공합니다.",
    targetAudience: "복지서비스가 필요한 어르신 및 가족",
    schedule: "월~금 09:00~18:00",
    fee: "무료",
    howToApply: "방문 또는 전화 상담"
  }
];

export const welfareCategories = {
  care: '돌봄서비스',
  health: '건강관리',
  counseling: '상담서비스'
} as const;

export function getWelfareById(id: string): WelfareService | undefined {
  return welfareServices.find(service => service.id === id);
}

export function getWelfareByCategory(category: WelfareService['category']): WelfareService[] {
  return welfareServices.filter(service => service.category === category);
}
