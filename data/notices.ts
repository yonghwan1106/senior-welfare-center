import { Notice } from '@/types';

export const notices: Notice[] = [
  {
    id: "notice-001",
    title: "2026년 상반기 요양보호사 자격증 과정 모집 안내",
    content: `안녕하세요. 노인단체 종합복지센터입니다.

2026년 상반기 요양보호사 자격증 과정 수강생을 모집합니다.

■ 교육기간: 2026년 3월 4일 ~ 5월 30일 (3개월)
■ 교육시간: 월~금 09:00~13:00
■ 모집인원: 30명 (선착순)
■ 교육비: 50만원 (국민내일배움카드 사용 시 자부담 10%)
■ 신청기간: 2026년 2월 1일 ~ 2월 28일

문의: 000-0000-0000 (교육사업부)`,
    date: "2026-02-01",
    views: 342,
    isImportant: true
  },
  {
    id: "notice-002",
    title: "설 연휴 휴관 안내",
    content: `설 명절을 맞아 아래와 같이 휴관합니다.

■ 휴관기간: 2026년 2월 7일(금) ~ 2월 11일(화)
■ 정상운영: 2026년 2월 12일(수)부터

풍성한 명절 보내시고, 건강하세요.`,
    date: "2026-01-28",
    views: 156,
    isImportant: true
  },
  {
    id: "notice-003",
    title: "2026년 무료 건강검진 실시 안내",
    content: `센터 이용 어르신을 대상으로 무료 건강검진을 실시합니다.

■ 일시: 2026년 3월 15일(토) 09:00~15:00
■ 장소: 센터 1층 대강당
■ 검진항목: 혈압, 혈당, 콜레스테롤, 골밀도, 시력
■ 대상: 만 60세 이상 센터 이용자
■ 신청: 센터 방문 또는 전화 신청

많은 참여 부탁드립니다.`,
    date: "2026-01-25",
    views: 289,
    isImportant: false
  },
  {
    id: "notice-004",
    title: "실버체조 참가자 추가 모집",
    content: `월/수/금 실버체조 교실 참가자를 추가 모집합니다.

■ 일시: 월, 수, 금 10:00~11:00
■ 장소: 센터 2층 체육관
■ 대상: 만 60세 이상
■ 모집인원: 5명 (선착순)
■ 참가비: 무료

관심 있으신 분은 센터로 연락 주세요.`,
    date: "2026-01-20",
    views: 178,
    isImportant: false
  },
  {
    id: "notice-005",
    title: "2026년 노인일자리사업 참여자 모집",
    content: `2026년 노인일자리 및 사회활동 지원사업 참여자를 모집합니다.

■ 모집유형
  - 공익활동형: 환경정화, 시설봉사 등 (월 30시간, 29만원)
  - 사회서비스형: 노노케어, 아이돌봄 등 (월 60시간, 73만원)

■ 참여자격: 만 65세 이상 기초연금 수급자
■ 신청기간: 2026년 1월 15일 ~ 2월 15일
■ 신청방법: 센터 방문 신청 (신분증 지참)

자세한 사항은 일자리사업부로 문의해 주세요.`,
    date: "2026-01-15",
    views: 567,
    isImportant: true
  },
  {
    id: "notice-006",
    title: "홈페이지 리뉴얼 안내",
    content: `노인단체 종합복지센터 홈페이지가 새롭게 단장되었습니다.

■ 주요 개선사항
  - 글자 크기 확대 및 대비 강화
  - 글자 크기 조절 기능 추가
  - 모바일 환경 최적화
  - 정보 구조 개선

더 나은 서비스를 위해 노력하겠습니다.
이용 중 불편사항은 언제든 연락 주세요.`,
    date: "2026-01-10",
    views: 234,
    isImportant: false
  }
];

export function getNoticeById(id: string): Notice | undefined {
  return notices.find(notice => notice.id === id);
}

export function getImportantNotices(): Notice[] {
  return notices.filter(notice => notice.isImportant);
}

export function getRecentNotices(count: number = 3): Notice[] {
  return [...notices]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
