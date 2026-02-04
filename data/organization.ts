import { Organization, HistoryItem } from '@/types';

export const organization: Organization = {
  centerName: "노인단체 종합복지센터",
  established: 2010,
  ceo: "김OO",
  departments: [
    {
      name: "센터장",
      description: "센터 총괄 운영 및 대외 협력"
    },
    {
      name: "복지사업부",
      description: "돌봄서비스, 건강관리, 상담 서비스 운영",
      staff: 8
    },
    {
      name: "교육사업부",
      description: "평생교육 프로그램, 자격증 과정 운영",
      staff: 5
    },
    {
      name: "일자리사업부",
      description: "노인일자리사업, 취업연계 서비스 운영",
      staff: 6
    },
    {
      name: "사무국",
      description: "행정, 회계, 시설관리",
      staff: 4
    }
  ],
  totalStaff: 24,
  volunteers: 120
};

export const history: HistoryItem[] = [
  { year: 2026, events: ["홈페이지 리뉴얼 오픈", "실버시터 2기 양성과정 개설"] },
  { year: 2025, events: ["실버시터 양성과정 1기 개설", "누적 수강생 5,000명 돌파", "우수 노인일자리사업 기관 선정"] },
  { year: 2024, events: ["노인맞춤돌봄서비스 수행기관 지정", "치매예방 프로그램 시작"] },
  { year: 2023, events: ["키오스크 교육 프로그램 신설", "제2회관 개관"] },
  { year: 2022, events: ["요양보호사 교육기관 지정", "노인일자리사업 우수기관 표창"] },
  { year: 2020, events: ["코로나19 대응 비대면 프로그램 도입", "마스크 나눔 봉사활동"] },
  { year: 2018, events: ["스마트폰 교육 프로그램 시작", "누적 수강생 2,000명 돌파"] },
  { year: 2015, events: ["서예교실, 건강체조 프로그램 확대", "노인일자리사업 수행기관 지정"] },
  { year: 2012, events: ["노인복지관 인가", "첫 번째 교육프로그램 개설"] },
  { year: 2010, events: ["노인단체 종합복지센터 설립", "OOO시 복지재단 법인 설립"] }
];

export const greeting = {
  title: "인사말",
  ceoName: "센터장 김OO",
  content: `안녕하십니까.
노인단체 종합복지센터 홈페이지를 찾아주신 여러분을 진심으로 환영합니다.

저희 센터는 2010년 설립 이래, 지역 어르신들의 건강하고 행복한 노후 생활을 위해
다양한 복지서비스와 교육 프로그램, 일자리 지원 사업을 운영해 오고 있습니다.

어르신 한 분 한 분의 존엄성을 존중하고,
자립적이고 활기찬 노후를 영위하실 수 있도록
최선의 서비스를 제공하기 위해 노력하겠습니다.

앞으로도 지역사회와 함께 성장하며,
어르신들이 행복한 세상을 만들어 가겠습니다.

감사합니다.`
};

export const purpose = {
  title: "설립목적 및 비전",
  mission: "어르신의 존엄성을 지키며, 건강하고 행복한 노후 생활을 지원합니다.",
  vision: "모든 어르신이 존중받고, 활기차게 사회에 참여하는 지역사회",
  coreValues: [
    {
      title: "존중",
      description: "어르신 한 분 한 분의 인격과 경험을 존중합니다.",
      icon: "Heart"
    },
    {
      title: "자립",
      description: "스스로 건강하고 활기찬 생활을 영위할 수 있도록 지원합니다.",
      icon: "Users"
    },
    {
      title: "건강",
      description: "신체적, 정신적 건강을 위한 다양한 프로그램을 제공합니다.",
      icon: "Activity"
    },
    {
      title: "행복",
      description: "일상 속 작은 행복을 찾을 수 있는 따뜻한 공간을 만듭니다.",
      icon: "Smile"
    }
  ],
  goals: [
    "어르신 복지서비스 품질 향상",
    "평생교육 기회 확대",
    "노인일자리 창출 및 사회참여 활성화",
    "지역사회 네트워크 강화"
  ]
};

export const location = {
  address: "OOO시 OOO구 OOO로 123 종합복지센터",
  phone: "000-0000-0000",
  fax: "000-0000-0001",
  email: "info@senior-welfare.kr",
  operatingHours: "평일 09:00~18:00 (주말/공휴일 휴관)",
  transportation: {
    subway: "OO역 3번 출구에서 도보 10분",
    bus: "OOO번, OOO번 버스 '복지센터' 정류장 하차"
  },
  parking: "지하주차장 이용 가능 (센터 이용 시 2시간 무료)"
};
