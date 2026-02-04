import { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: "cert-001",
    name: "요양보호사",
    type: "national",
    description: "노인성 질환자, 치매환자 등을 돌보는 전문 요양보호 인력을 양성하는 국가공인 자격증입니다.",
    targetAudience: "만 18세 이상 누구나 (주로 만 50~70세 수강)",
    curriculum: [
      "요양보호개론 (80시간)",
      "기본요양보호기술 (80시간)",
      "노인요양시설 현장실습 (80시간)"
    ],
    duration: "3개월 (총 240시간)",
    fee: 500000,
    benefits: [
      "요양원, 요양병원 취업 가능",
      "재가요양보호사 활동 가능",
      "정부 일자리사업 참여 우대",
      "월 평균 180~250만원 수입 가능"
    ],
    employmentRate: "85%"
  },
  {
    id: "cert-002",
    name: "노인체육지도사",
    type: "private",
    description: "노인 특성에 맞는 체육 프로그램을 기획하고 지도하는 전문 자격증입니다.",
    targetAudience: "만 55세 이상, 체육 관심자",
    curriculum: [
      "노인체육 이론 (20시간)",
      "실버체조 실기 (20시간)",
      "프로그램 기획 및 실습 (20시간)"
    ],
    duration: "2개월 (총 60시간)",
    fee: 300000,
    benefits: [
      "노인복지관 체육지도사 활동",
      "경로당 순회 강사 활동",
      "시간당 2~3만원 강사료"
    ],
    employmentRate: "70%"
  },
  {
    id: "cert-003",
    name: "실버시터",
    type: "private",
    description: "아동 돌봄과 교육을 담당하는 시니어 전문 돌봄 인력을 양성하는 자격증입니다.",
    targetAudience: "만 55세~70세, 손주 돌봄 경험자 우대",
    curriculum: [
      "아동발달 및 심리 (10시간)",
      "안전관리 및 응급처치 (10시간)",
      "놀이지도 및 독서지도 (10시간)",
      "현장실습 (10시간)"
    ],
    duration: "1개월 (총 40시간)",
    fee: 0,
    benefits: [
      "지역아동센터, 초등돌봄 활동 가능",
      "가정방문 돌봄서비스 연계",
      "시간당 12,000원 활동비"
    ],
    employmentRate: "75%"
  },
  {
    id: "cert-004",
    name: "노인심리상담사",
    type: "private",
    description: "노인의 심리적 특성을 이해하고 상담하는 전문 상담사 양성 자격증입니다.",
    targetAudience: "만 50세 이상, 상담에 관심 있는 분",
    curriculum: [
      "노인심리학 개론 (20시간)",
      "상담기법 이론 및 실습 (30시간)",
      "치매예방 상담 (10시간)",
      "사례연구 및 슈퍼비전 (20시간)"
    ],
    duration: "2개월 (총 80시간)",
    fee: 400000,
    benefits: [
      "노인복지관 상담사 활동",
      "독거노인 방문상담 활동",
      "치매안심센터 연계 활동"
    ],
    employmentRate: "65%"
  }
];

export function getCertificationById(id: string): Certification | undefined {
  return certifications.find(cert => cert.id === id);
}
