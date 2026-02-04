import { JobProgram } from '@/types';

export const jobPrograms: JobProgram[] = [
  {
    id: "job-001",
    title: "지역환경정화 활동",
    type: "public",
    description: "마을 골목길, 공원, 하천 주변 환경 정화 및 쓰레기 분리수거 활동",
    workDays: "월 10일 (주 2~3일)",
    workHours: "09:00~12:00 (1일 3시간)",
    wage: "월 29만원",
    targetAge: "만 65세 이상",
    requirements: ["기초연금 수급자", "활동 가능한 건강상태"],
    status: "recruiting"
  },
  {
    id: "job-002",
    title: "노노(老老)케어 서비스",
    type: "social",
    description: "독거노인, 거동불편 노인 가정 방문 돌봄 및 말벗 서비스",
    workDays: "월 15일 (주 3~4일)",
    workHours: "10:00~14:00 (1일 4시간)",
    wage: "월 73만원",
    targetAge: "만 65세~75세",
    requirements: ["기초연금 수급자", "돌봄 교육 이수", "의사소통 가능"],
    status: "recruiting"
  },
  {
    id: "job-003",
    title: "아이돌봄 지원 활동",
    type: "social",
    description: "지역아동센터, 초등돌봄교실에서 아동 돌봄 보조 활동",
    workDays: "월 15일 (주 3~4일)",
    workHours: "13:00~17:00 (1일 4시간)",
    wage: "월 73만원",
    targetAge: "만 60세~70세",
    requirements: ["실버시터 자격증 소지자 우대", "아동 돌봄 관심자"],
    status: "ongoing"
  },
  {
    id: "job-004",
    title: "경로당 급식도우미",
    type: "public",
    description: "지역 경로당 점심 급식 조리 및 배식 보조 활동",
    workDays: "월 10일 (주 2~3일)",
    workHours: "10:00~13:00 (1일 3시간)",
    wage: "월 29만원",
    targetAge: "만 65세 이상",
    requirements: ["기초연금 수급자", "조리 가능"],
    status: "recruiting"
  },
  {
    id: "job-005",
    title: "공예품 제작 사업단",
    type: "market",
    description: "전통 공예품, 생활용품 제작 및 판매 활동 (시장형)",
    workDays: "주 5일",
    workHours: "09:00~15:00",
    wage: "최저임금 적용 (시급제)",
    targetAge: "만 60세 이상",
    requirements: ["수공예 기술 보유자", "장기 참여 가능자"],
    status: "ongoing"
  }
];

export const jobTypes = {
  public: '공익활동형',
  social: '사회서비스형',
  market: '시장형'
} as const;

export function getJobById(id: string): JobProgram | undefined {
  return jobPrograms.find(job => job.id === id);
}

export function getJobsByType(type: JobProgram['type']): JobProgram[] {
  return jobPrograms.filter(job => job.type === type);
}
