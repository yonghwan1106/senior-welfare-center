import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { footerInfo } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 센터 정보 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">복</span>
              </div>
              <div>
                <p className="font-bold text-xl">{footerInfo.centerName}</p>
              </div>
            </div>

            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>{footerInfo.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <span>전화: {footerInfo.phone}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <span>팩스: {footerInfo.fax}</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <span>이메일: {footerInfo.email}</span>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="w-5 h-5 shrink-0" />
                <span>{footerInfo.operatingHours}</span>
              </p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">바로가기</h3>
            <nav className="space-y-2">
              <Link href="/welfare" className="block py-2 text-gray-300 hover:text-white transition-colors">
                복지서비스
              </Link>
              <Link href="/programs" className="block py-2 text-gray-300 hover:text-white transition-colors">
                교육프로그램
              </Link>
              <Link href="/jobs" className="block py-2 text-gray-300 hover:text-white transition-colors">
                일자리센터
              </Link>
              <Link href="/contact" className="block py-2 text-gray-300 hover:text-white transition-colors">
                상담문의
              </Link>
            </nav>
          </div>

          {/* 관련 사이트 */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">관련 사이트</h3>
            <nav className="space-y-2">
              <a
                href="https://www.mohw.go.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                보건복지부
              </a>
              <a
                href="https://www.bokjiro.go.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                복지로
              </a>
              <a
                href="https://www.nid.or.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                중앙치매센터
              </a>
              <a
                href="https://www.koreapeople60.or.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                대한노인회
              </a>
            </nav>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>Copyright &copy; {new Date().getFullYear()} {footerInfo.centerName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
