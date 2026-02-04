import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Bus, Train, Car } from 'lucide-react';
import { PageTitle } from '@/components/common';
import { location } from '@/data/organization';

export const metadata: Metadata = {
  title: '오시는 길',
  description: '노인단체 종합복지센터 위치 및 연락처 안내입니다.',
};

export default function LocationPage() {
  return (
    <>
      <PageTitle
        title="오시는 길"
        description="노인단체 종합복지센터 방문을 환영합니다"
        breadcrumb={[
          { label: '센터소개', href: '/about' },
          { label: '오시는 길' },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 지도 영역 */}
            <div className="bg-muted rounded-2xl aspect-square lg:aspect-auto flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  지도 이미지 또는<br />카카오맵 임베드 영역
                </p>
              </div>
            </div>

            {/* 연락처 정보 */}
            <div className="space-y-6">
              {/* 주소 */}
              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">주소</h3>
                    <p className="text-foreground text-lg">{location.address}</p>
                  </div>
                </div>
              </div>

              {/* 연락처 */}
              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">연락처</h3>
                    <p className="text-foreground text-lg">전화: {location.phone}</p>
                    <p className="text-foreground text-lg">팩스: {location.fax}</p>
                  </div>
                </div>
              </div>

              {/* 이메일 */}
              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">이메일</h3>
                    <p className="text-foreground text-lg">{location.email}</p>
                  </div>
                </div>
              </div>

              {/* 운영시간 */}
              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">운영시간</h3>
                    <p className="text-foreground text-lg">{location.operatingHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 교통 안내 */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">교통 안내</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 지하철 */}
              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Train className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">지하철</h3>
                </div>
                <p className="text-foreground">{location.transportation.subway}</p>
              </div>

              {/* 버스 */}
              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Bus className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg">버스</h3>
                </div>
                <p className="text-foreground">{location.transportation.bus}</p>
              </div>

              {/* 주차 */}
              <div className="bg-card border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-lg">주차</h3>
                </div>
                <p className="text-foreground">{location.parking}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
