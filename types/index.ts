// 프로그램 타입
export interface Program {
  id: string;
  title: string;
  category: '자격증' | '건강' | '디지털' | '취미' | '사회참여';
  description: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  capacity: number;
  currentApplicants: number;
  status: 'recruiting' | 'ongoing' | 'closed';
  isFree: boolean;
  governmentSupport: boolean;
  targetAge: string;
}

// 자격증 타입
export interface Certification {
  id: string;
  name: string;
  type: 'private' | 'national';
  description: string;
  targetAudience: string;
  curriculum: string[];
  duration: string;
  fee: number;
  benefits: string[];
  employmentRate: string;
}

// 일자리 프로그램 타입
export interface JobProgram {
  id: string;
  title: string;
  type: 'public' | 'social' | 'market';
  description: string;
  workDays: string;
  workHours: string;
  wage: string;
  targetAge: string;
  requirements: string[];
  status: 'recruiting' | 'ongoing' | 'closed';
}

// 정부지원사업 타입
export interface SupportProgram {
  id: string;
  title: string;
  ministry: string;
  description: string;
  targetAudience: string;
  supportDetails: string[];
  applicationPeriod: string;
  howToApply: string;
  status: 'ongoing' | 'scheduled' | 'closed';
}

// 복지서비스 타입
export interface WelfareService {
  id: string;
  title: string;
  category: 'care' | 'health' | 'counseling';
  description: string;
  targetAudience: string;
  schedule: string;
  fee: string;
  howToApply: string;
}

// 공지사항 타입
export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  views: number;
  isImportant: boolean;
}

// 갤러리 타입
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  date: string;
  category: '행사' | '교육' | '일상';
}

// FAQ 타입
export interface FAQ {
  id: string;
  category: '교육' | '자격증' | '일자리' | '복지서비스' | '일반';
  question: string;
  answer: string;
}

// 조직 정보 타입
export interface Department {
  name: string;
  description: string;
  staff?: number;
}

export interface Organization {
  centerName: string;
  established: number;
  ceo: string;
  departments: Department[];
  totalStaff: number;
  volunteers: number;
}

// 연혁 타입
export interface HistoryItem {
  year: number;
  events: string[];
}

// 문의 폼 타입
export interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  category: string;
  title: string;
  content: string;
  agreePrivacy: boolean;
}

// 수강신청 폼 타입
export interface ApplyForm {
  name: string;
  phone: string;
  birthDate: string;
  address: string;
  programId: string;
  motivation: string;
  agreePrivacy: boolean;
}

// 네비게이션 타입
export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}
