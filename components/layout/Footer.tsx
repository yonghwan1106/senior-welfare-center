import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ExternalLink, ChevronRight } from 'lucide-react';
import { footerInfo } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* 상단 곡선 */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52C840 55 960 60 1080 62C1200 65 1320 65 1380 65L1440 65V80H0Z"
            className="fill-[oklch(0.18_0.02_45)]"
          />
        </svg>
      </div>

      {/* 메인 푸터 */}
      <div className="bg-[oklch(0.18_0.02_45)] text-gray-100">
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* 센터 정보 */}
            <div className="lg:col-span-2">
              {/* 로고 */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-3xl font-display">복</span>
                </div>
                <div>
                  <p className="font-bold text-2xl text-white">{footerInfo.centerName}</p>
                  <p className="text-gray-400 mt-1">어르신과 함께하는 행복한 내일</p>
                </div>
              </div>

              {/* 연락처 정보 */}
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">주소</p>
                    <p className="text-white">{footerInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-warm/20 transition-colors">
                    <Phone className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">전화</p>
                    <p className="text-white text-lg font-semibold">{footerInfo.phone}</p>
                    <p className="text-gray-400 text-sm">팩스: {footerInfo.fax}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">이메일</p>
                    <p className="text-white">{footerInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-earth/20 transition-colors">
                    <Clock className="w-5 h-5 text-earth" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">운영시간</p>
                    <p className="text-white">{footerInfo.operatingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 바로가기 */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                바로가기
              </h3>
              <nav className="space-y-1">
                {[
                  { href: '/welfare', label: '복지서비스' },
                  { href: '/programs', label: '교육프로그램' },
                  { href: '/certification', label: '자격증안내' },
                  { href: '/jobs', label: '일자리센터' },
                  { href: '/contact', label: '상담문의' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 py-2.5 text-gray-300 hover:text-white hover:translate-x-1 transition-all group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* 관련 사이트 */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-warm rounded-full" />
                관련 사이트
              </h3>
              <nav className="space-y-1">
                {[
                  { href: 'https://www.mohw.go.kr', label: '보건복지부' },
                  { href: 'https://www.bokjiro.go.kr', label: '복지로' },
                  { href: 'https://www.nid.or.kr', label: '중앙치매센터' },
                  { href: 'https://www.koreapeople60.or.kr', label: '대한노인회' },
                  { href: 'https://www.longevity.or.kr', label: '노인장기요양보험' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2.5 text-gray-300 hover:text-white transition-colors group"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* 구분선 */}
          <div className="section-divider my-10" />

          {/* 하단 저작권 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <p>
              Copyright &copy; {new Date().getFullYear()}{' '}
              <span className="text-white font-medium">{footerInfo.centerName}</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
