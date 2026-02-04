import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    title: "센터소개",
    href: "/about",
    children: [
      { title: "인사말", href: "/about/greeting" },
      { title: "설립목적 및 비전", href: "/about/purpose" },
      { title: "연혁", href: "/about/history" },
      { title: "조직도", href: "/about/organization" },
      { title: "오시는 길", href: "/about/location" }
    ]
  },
  {
    title: "복지서비스",
    href: "/welfare",
    children: [
      { title: "서비스 안내", href: "/welfare" },
      { title: "돌봄서비스", href: "/welfare/care" },
      { title: "건강관리", href: "/welfare/health" }
    ]
  },
  {
    title: "교육프로그램",
    href: "/programs",
    children: [
      { title: "프로그램 안내", href: "/programs" },
      { title: "수강신청", href: "/programs/apply" }
    ]
  },
  {
    title: "자격증안내",
    href: "/certification",
    children: [
      { title: "자격증 종류", href: "/certification" },
      { title: "취득절차", href: "/certification/process" },
      { title: "수료현황", href: "/certification/graduates" }
    ]
  },
  {
    title: "일자리센터",
    href: "/jobs",
    children: [
      { title: "일자리 안내", href: "/jobs" },
      { title: "참여방법", href: "/jobs/how-to" },
      { title: "활동현황", href: "/jobs/status" }
    ]
  },
  {
    title: "정부지원사업",
    href: "/support",
    children: [
      { title: "지원사업 안내", href: "/support" },
      { title: "신청방법", href: "/support/how-to-apply" },
      { title: "지원현황", href: "/support/status" }
    ]
  },
  {
    title: "커뮤니티",
    href: "/community",
    children: [
      { title: "공지사항", href: "/community/notice" },
      { title: "갤러리", href: "/community/gallery" },
      { title: "자료실", href: "/community/resources" }
    ]
  },
  {
    title: "상담문의",
    href: "/contact",
    children: [
      { title: "온라인 상담", href: "/contact" },
      { title: "자주 묻는 질문", href: "/contact/faq" }
    ]
  }
];

export const quickMenu = [
  {
    title: "복지서비스",
    href: "/welfare",
    icon: "Heart",
    description: "돌봄, 건강관리 서비스"
  },
  {
    title: "교육프로그램",
    href: "/programs",
    icon: "GraduationCap",
    description: "다양한 교육 과정"
  },
  {
    title: "자격증안내",
    href: "/certification",
    icon: "Award",
    description: "자격증 취득 안내"
  },
  {
    title: "일자리센터",
    href: "/jobs",
    icon: "Briefcase",
    description: "노인일자리사업"
  },
  {
    title: "상담문의",
    href: "/contact",
    icon: "MessageCircle",
    description: "온라인 상담 신청"
  }
];

export const footerInfo = {
  centerName: "노인단체 종합복지센터",
  address: "OOO시 OOO구 OOO로 123 종합복지센터",
  phone: "000-0000-0000",
  fax: "000-0000-0001",
  email: "info@senior-welfare.kr",
  operatingHours: "평일 09:00~18:00 (주말/공휴일 휴관)"
};
