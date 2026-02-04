import { SupportProgram } from '@/types';

export const supportPrograms: SupportProgram[] = [
  {
    id: "support-001",
    title: "노인일자리 및 사회활동 지원사업",
    ministry: "보건복지부",
    description: "어르신들의 경제활동 지원과 사회참여 기회를 제공하는 대표적인 노인 일자리 사업입니다.",
    targetAudience: "만 65세 이상 기초연금 수급자",
    supportDetails: [
      "공익활동형: 월 30시간, 월 29만원",
      "사회서비스형: 월 60시간, 월 73만원",
      "시장형사업단: 근로형태에 따라 차등 지급"
    ],
    applicationPeriod: "매년 1월~2월 (연초 집중 모집)",
    howToApply: "센터 방문 신청 또는 복지로(www.bokjiro.go.kr) 온라인 신청",
    status: "ongoing"
  },
  {
    id: "support-002",
    title: "노인맞춤돌봄서비스",
    ministry: "보건복지부",
    description: "일상생활 영위가 어려운 취약 노인에게 적절한 돌봄서비스를 제공하는 사업입니다.",
    targetAudience: "만 65세 이상 국민기초생활수급자, 차상위계층, 기초연금 수급자 중 독거/조손가구",
    supportDetails: [
      "안전확인: 정기적 안부 확인 전화/방문",
      "사회참여: 문화여가 프로그램 참여",
      "생활교육: 건강관리, 영양관리 교육",
      "일상생활 지원: 이동동행, 가사지원"
    ],
    applicationPeriod: "상시 신청",
    howToApply: "읍면동 주민센터 또는 센터 방문 신청",
    status: "ongoing"
  },
  {
    id: "support-003",
    title: "치매예방관리사업",
    ministry: "보건복지부 / 중앙치매센터",
    description: "치매 예방 및 조기 발견을 위한 검진과 예방 프로그램을 제공합니다.",
    targetAudience: "만 60세 이상 지역주민",
    supportDetails: [
      "무료 치매선별검사 (MMSE-DS)",
      "치매예방교실 운영 (인지훈련 프로그램)",
      "치매환자 가족 교육 및 힐링 프로그램",
      "치매안심센터 연계 서비스"
    ],
    applicationPeriod: "상시",
    howToApply: "센터 방문 또는 전화 예약",
    status: "ongoing"
  },
  {
    id: "support-004",
    title: "독거노인 사회관계 활성화 사업",
    ministry: "보건복지부",
    description: "고독사 예방 및 독거노인의 사회적 관계망 형성을 지원하는 사업입니다.",
    targetAudience: "만 65세 이상 독거노인",
    supportDetails: [
      "자조모임 운영 지원",
      "결연 프로그램 (1:1 친구 만들기)",
      "공동 취미활동 지원",
      "명절 및 생일 특별 프로그램"
    ],
    applicationPeriod: "상시",
    howToApply: "센터 방문 신청 또는 전화 상담",
    status: "ongoing"
  }
];

export function getSupportById(id: string): SupportProgram | undefined {
  return supportPrograms.find(support => support.id === id);
}
